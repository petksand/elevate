import csv
import yelp_api as yelp
import re
from fuzzywuzzy import process
from pymongo import MongoClient

client = MongoClient('mongodb+srv://db_user:Password1@uniwards-9pud4.mongodb.net/test?retryWrites=true&w=majority')
db = client.uniwards_db
trans = db.transactions

# should feed in transaction data as json, modify below

finance = ["idp purchase", "transfer", "payment", "interac"]

def match(name, matchlist=None):
    """
    Matches given name to business name from Yelp search
    """
    if name == None:
        return ("",0)
    try:
        stores = yelp.search(name)
        if matchlist == None:
            matches = []
            for store in stores["businesses"]:
                matches.append(store["name"])

            return process.extractOne(name, matches)
        else:
            return process.extractOne(name, matchlist)
    except RuntimeError:
        return("",0)


def preprocess(name):
    """
    Preprocesses name
    """
    if name.strip() == "" or any([term in name for term in finance]):
        return None
    
    # remove non alphanumeric characters
    pattern = re.compile(r'[^a-zA-Z\ ]')
    name = pattern.sub("",name)
    # remove 1-letter words at the end (cut off)
    pattern = re.compile(r' [a-zA-Z]{1}$')
    
    return pattern.sub("",name)


def trans_add_category(transaction):
    """
    Populates the "categories" key in the transaction json and pushes to db
    """
    # find name in yelp
    name = preprocess(transaction["name"])
    name = match(name)

    if name[1] < 90:
        # try again w/ autocomplete
        print("Confidence not high enough, trying again")
        autocomplete = yelp.autocomplete(name[0])
        if autocomplete != None:
            matches = [result["text"] for result in autocomplete]
            best = match(name[0], matchlist=matches)
        else:
            best = ("",0)

    if name[1] < 90:
        print("No close matches for {}".format(name))
        return False   
    else:
        name = name[0]

    categories = yelp.search(name)["businesses"][0]
    categories = categories['categories']
    categories = [category["alias"] for category in categories]

    transaction["categories"] = categories

    return transaction


def add_transaction(transaction):
    """
    Populates the "categories" key in the transaction json and pushes to db
    """
    db_trans = {
        "name": transaction['name'],
        "amount": transaction['amount'],
        "month": transaction["month"],
        "day": transaction["day"],
    }
    # find name in yelp
    name = preprocess(transaction["name"])
    name = match(name)

    if name[1] < 90:
        # try again w/ autocomplete
        # print("Confidence not high enough, trying again")
        autocomplete = yelp.autocomplete(name[0])
        if autocomplete != None:
            matches = [result["text"] for result in autocomplete]
            best = match(name[0], matchlist=matches)
        else:
            best = ("",0)

    if name[1] < 90:
        # print("No close matches for {}".format(name))
        return False   
    else:
        name = name[0]

    categories = yelp.search(name)["businesses"][0]
    categories = categories['categories']
    categories = [category["alias"] for category in categories]

    db_trans["categories"] = categories

    # push to database
    result = trans.insert_one(db_trans)

    return db_trans


# # what a transaction object will look like (we fill categories, though)
# test_transaction = {
#     "name": "Mos Mos",
#     "amount": 60,
#     "month": "january",
#     "day": 19,
# }
        
# get_transaction_categories(test_transaction)

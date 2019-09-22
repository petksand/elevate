import json
from datetime import datetime
import calendar
from pymongo import MongoClient
import yelp_api as yelp
import qrcode as qr

client = MongoClient('mongodb+srv://db_user:Password1@uniwards-9pud4.mongodb.net/test?retryWrites=true&w=majority')
db = client.uniwards_db
promos = db.promotions
trans = db.transactions


def create_promo(promotion_request):
    """
    :param promotion: (json object) promotion information as a JSON object
    """
    db_promo = {
        "name": promotion_request['name'],
        "type": promotion_request["type"],
        "month": promotion_request["month"],
        "minimum": promotion_request["minimum"],
        "desc": promotion_request["desc"],
        "discount_percent": promotion_request["discount_percent"],
        "qr_code_id": promotion_request["qr_code_id"]
    }
    categories = yelp.search(promotion_request["name"])
    categories = categories['categories']
    categories = [category["alias"] for category in categories]

    db_promo["categories"] = categories
    db_promo["curr_amount"] = 0
    db_promo["qualify"] = "false"

    # push to database
    result = promos.insert_one(db_promo)

    # return promotion_request
    return db_promo

        
def does_qualify(promotion, transaction):
    """
    Checks if a transaction qualifies for this promo
    """
    if promotion["qualify"] == "true":
        # already satsified this
        return False
    
    # check that in the right month
    if promotion["month"] != transaction["month"]:
        return False
    # check that dealing with right company if "monthly specific"
    if promotion["type"] == "monthly_specific" and promotion["name"] != transaction["name"]:
        return False
    # check that if dealing with categories, some match
    if promotion["type"] == "monthly_category" and any([category for category in promotion["categories"] if category in transaction["categories"]]) == False:
        return False
    # check that if dealing with daily, the days match
    if promotion["type"] == "daily_specific" and promotion["day"] != transaction["day"]:
        return False
    elif promotion["type"] == "daily_specific":
        result = promos.update_one({'_id': promotion["_id"]}, {"$set": {"qualify":"true"}}, upsert=True)
        return True

    curr_amount = promotion["curr_amount"]
    qualifier = int(promotion["minimum"])
    amt = int(transaction["amount"])

    # update amount
    curr_amount += amt
    result = promos.update_one({'_id': promotion["_id"]}, {"$set": {"curr_amount":curr_amount}}, upsert=True)
    
    if curr_amount >= qualifier:
        # update qualify param
        result = promos.update_one({'_id': promotion["_id"]}, {"$set": {"qualify":"true"}}, upsert=True)
        return True
    else:
        return False


def get_qr_code(promotion):
    """
    Creates a QR code with given discount + saves it to "qrcodes" directory
    """
    discount = "{}%".format(promotion["discount_percent"])
    qr_code = qr.make("{} off at {}: {}".format(discount, promotion["name"], promotion["qr_code_id"]))
    try:
        qr_code.save('qrcodes/{}_{}_qr_code.jpg'.format(promotion["name"].replace(" ","_"), promotion["_id"]))
    except:
        pass

    return promotion


def check_transactions():
    """
    Checks all database transactions against all promotions
    """
    # check if any apply
    for transaction in trans.find():
        for promo in promos.find():
            if does_qualify(promo, transaction):
                print("{}: You qualified for the {} at {}".format(promo["_id"],promo["desc"], promo["name"]))

    # return QR codes for qualifying deals
    codes = []
    for promo in promos.find():
        if promo["qualify"] == "true":
            codes.append(get_qr_code(promo))

    return codes

def get_promotions():
    return list(promos.find())

# get_promotions()
test_transaction = {
    "name": "Mos Mos",
    "categories": [
        "coffeeshop"
    ],
    "amount": 60,
    "month": "january",
    "day": 21,
} 

test_promotions = {
    "test_promos": [
        {
            "name": "Mos Mos",
            "type": "monthly_category",
            "month": "january",
            "minimum": 50,
            "desc": "10_percent_discount",
            "discount_percent": 10,
            "qr_code_id": "10AGT"
        },
        {
            "name": "Starbucks",
            "type": "monthly_specific",
            "month": "january",
            "minimum": 50,
            "discount_percent": 20,
            "qr_code_id": "24TYO"

        },
        {
            "name": "McDonalds",
            "type": "daily_specific",
            "desc": "30_percent_discount",
            "month": "january",
            "day": 31,
            "discount_percent": 30,
            "qr_code_id": "www.mcdondalds.com"
        }
    ],
}

# for promo in test_promotions["test_promos"]:
#     create_promo(promo)
# check_transactions()


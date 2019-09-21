import csv
import yelp_api as yelp
import re
from fuzzywuzzy import process


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


def main():
    f = open("transactions.csv", "r", encoding="utf-8")
    csv_reader = csv.DictReader(f, delimiter=",")
    for row in csv_reader:
        name1 = preprocess(row["Description 1"].lower())
        name2 = preprocess(row["Description 2"].lower())
        match1 = match(name1)
        match2 = match(name2)
        
        best = match1 if max(match1[1],match2[1]) == match1[1] else match2
        name = name1 if max(match1[1],match2[1]) == match1[1] else name2
        
        if best[1] < 90:
            print("Confidence not high enough, trying again")
            # match not very good, we'll try again with an autocomplete query
            autocomplete = yelp.autocomplete(name)
            if autocomplete != None:
                matches = [result["text"] for result in autocomplete]
                best = match(name, matchlist=matches)
            else:
                best = ("",0)

        if best[1] < 90:
            print("No close matches for {}".format(name))
        else:
            print("{} matches the closest with {} with a confidence of {}".format(name, best[0], best[1]))

    return search(best[0])
        

if __name__ == '__main__':
    main()
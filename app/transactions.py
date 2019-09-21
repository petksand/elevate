import csv
import yelp_api as yelp
import re
from fuzzywuzzy import process


finance = ["idp purchase", "transfer", "payment", "interac"]


def get_reader(filename):
    """
    Returns csv DictReader object
    """
    # read file in
    with open(filename, "r", encoding="utf-8") as f:
        csv_reader = csv.DictReader(f, delimiter=',')
        
    return csv_reader


def match(name):
    """
    Matches given name to business name from Yelp search
    """
    if name == None:
        return ("",0)
    
    stores = yelp.search(name)
    matches = []
    for i, store in enumerate(stores["businesses"]):
        matches.extend(store["name"])

    closest = process.extractOne(name, matches)
    return closest

    # str2Match = "apple inc"
    # strOptions = ["Apple Inc.","apple park","apple incorporated","iphone"]
    # Ratios = process.extract(str2Match,strOptions)
    # print(Ratios)
    # # You can also select the string with the highest matching percentage
    # highest = process.extractOne(str2Match,strOptions)
    # print(highest)


def preprocess(name):
    """
    Preprocesses name
    """
    if name.strip() == "" or any([term in name for term in finance]):
        return None
    pattern = re.compile(r'[^a-zA-Z\ ]')
    
    return pattern.sub("",name)


def main():
    f = open("transactions.csv", "r", encoding="utf-8")
    csv_reader = csv.DictReader(f, delimiter=",")
    for i, row in enumerate(csv_reader):
        name1 = preprocess(row["Description 1"].lower())
        name2 = preprocess(row["Description 2"].lower())
        match1 = match(name1)
        match2 = match(name2)
        
        best = match1 if max(match1[1],match2[1]) == match[1] else match2
        
        print("{} matches the closest with {} with a confidence of {}".format(name, ))

        if i >= 2:
            break
    


if __name__ == '__main__':
    main()
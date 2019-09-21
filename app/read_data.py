import json

with open('data.json', 'r', encoding="utf-8") as f:
    parsed_json = json.load(f)

parsed_json = parsed_json["categories"]
for category in parsed_json:
    print(category)
print(len(parsed_json))

# collect trends on specific shops and aliases
# collect trends, expand to paren't aliases + track down again to find relates restaurants
# make up QR codes for rewards
# track loyalty (# purchases or $ spent per month)


# info in a purchase transaction
# price paid
# retail store name
# date + time

# do fuzzy search comparing retail store name to yelp databse
# collect location for 'near me'?
# query Yelp for the fuzzy match search
# append to category
# set category qualifiers

# if finance word in transaction, pass 

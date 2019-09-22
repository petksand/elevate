from flask import Flask, escape, request, jsonify
import os
import requests
import transactions as t
import logic
import json
from bson import ObjectId
from flask_cors import CORS

PORT = int(os.getenv("PORT", "80"))

app = Flask(__name__)
CORS(app)

app.config["DEBUG"] = False if os.getenv("PRODUCTION") is not None else True

class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)


#  GET requests (to send data from the application to the user) and POST requests (to receive data from a user).

def _url(path):
    return 'https://uniwards.com' + path

@app.route('/', methods=['GET'])
def home():
    return "<h1>Distant Reading Archive</h1><p>This site is a prototype API for distant reading of science fiction novels.</p>"

@app.route('/businessportal', methods=['GET','POST'])
def submit_promo():
    if request.method == 'GET':
        data = logic.get_promotions()
        rval = {
            "message": "Success",
            "statusCode": 200,
            "data": data
        }
        return JSONEncoder().encode(rval), 200

    if request.method == 'POST':
        data = request.json # should be a json object?
        data = logic.create_promo(data)
        rval = {
            "message": "Successly created promotion",
            "statusCode": 200,
            "data": data
        }
        return JSONEncoder().encode(rval), 200

@app.route('/uniwards', methods=['GET'])
def uniwards():
    if request.method == 'GET':
        # return all promos that you qualify for
        data = logic.check_transactions()
        rval = {
            "message": "Success",
            "statusCode": 200,
            "data": data
        }
        return JSONEncoder().encode(rval), 200

@app.route('/demo', methods=['POST'])
def demo():
    if request.method == "POST":
        data = request.json
        data = t.add_transaction(data)
        rval = {
            "message": "Successly created transaction",
            "statusCode": 200,
            "data": data
        }
        return JSONEncoder().encode(rval), 200


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=PORT)

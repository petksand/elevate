from flask import Flask, escape, request
import os

app = Flask(__name__)

PORT = int(os.getenv("PORT", "80"))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=PORT)

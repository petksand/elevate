import requests
import json
from urllib.error import HTTPError
from urllib.parse import quote
from urllib.parse import urlencode
import sys

BASE_URL = "https://api.yelp.com/v3/"
API_KEY = "dKipzWLzJYkJe3VlBFKguYCOzSj3jyNkZuanEh9AvThKbHulIqnpYeoUpfFHV8qdIb0qv5Rl6kVrngdLNibCDWSthim655JRePmB3rQJIK4jQlJ5AWbVdl7mHhSGXXYx"

API_HOST = 'https://api.yelp.com'
SEARCH_PATH = '/v3/businesses/search'
# business ID will come after slash
BUSINESS_PATH = '/v3/businesses/'


def request(path, url_params=None):
    """
    Given your API_KEY, send a GET request to the API.
    path (str): The path of the API after the domain.
    url_params (dict): An optional set of query parameters in the request.
    Returns:
        dict: The JSON response from the request.
    Raises:
        HTTPError: An error occurs from the HTTP request.
    """
    url_params = url_params or {}
    url = '{0}{1}'.format(BASE_URL, quote(path.encode('utf8')))
    headers = {
        'Authorization': 'Bearer %s' % API_KEY,
    }

    print(u'Querying {0} ...'.format(url))

    response = requests.request('GET', url, headers=headers, params=url_params)

    return response.json()


def categories():
    """
    Collects all business categories on Yelp
    """
    # params = {}

    response = request("categories")
    with open('data.json', 'w', encoding='utf-8') as f:
        json.dump(response, f, ensure_ascii=False, indent=4)
    print(response)


def autocomplete(query):
    """
    Matches a word with an autocomplete query
    """
    try:
        url_params = {
            "text": query
        }
        return request("autocomplete", url_params=url_params)['terms']
    except KeyError:
        return None


def search(business_name):
    """
    Searches for a business
    """
    url_params = {
        "term": business_name,
        "location": "Toronto",
    }
    response = request("businesses/search", url_params=url_params)
    return response


def main():

    try:
        # categories()
        pass
    except HTTPError as error:
        sys.exit(
            'Encountered HTTP error {0} on {1}:\n {2}\nAbort program.'.format(
                error.code,
                error.url,
                error.read(),
            )
        )


if __name__ == '__main__':
    main()
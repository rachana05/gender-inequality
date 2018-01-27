from flask import Flask, redirect, render_template, request

from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types

import urllib
fp=urllib.urlopen("https://en.wikipedia.org/wiki/Pornography")
mybytes =fp.read()
mystr = mybytes.decode("utf8")
fp.close()

app = Flask(__name__)


@app.route('/')
def homepage():
    # Return a Jinja2 HTML template and pass in image_entities as a parameter.
    return render_template("homepage.html")

@app.route('/run_language', methods=['GET', 'POST'])
def run_language():
    # Create a Cloud Natural Language client.
    client = language.LanguageServiceClient()

    # Retrieve inputs and create document object
    #if request.method == "POST":
    #text = request.form['content']
	#text=requests.get('*')
    #text=request.form['msg_input']
    text=mystr
    #document=mystr

    document = language.types.Document(content=text, type=enums.Document.Type.PLAIN_TEXT)

    # Retrieve response from Natural Language's analyze_entities() method
    response = client.analyze_entities(document=document)
    entities = response.entities

    # Retrieve response from Natural Language's analyze_sentiment() method
    response = client.analyze_sentiment(document=document)
    sentiment = response.document_sentiment

    return render_template('homepage.html', text=mystr, entities=entities, sentiment=sentiment)
    #print(sentiment)
    #print(entities)

@app.errorhandler(500)
def server_error(e):
    return """
    An internal error occurred: <pre>{}</pre>
    See logs for full stacktrace.
    """.format(e), 500


if __name__ == '__main__':
    # This is used when running locally. Gunicorn is used to run the
    # application on Google App Engine. See entrypoint in app.yaml.
    app.run(host='127.0.0.1',port=8000,debug=True)
	#run_language()

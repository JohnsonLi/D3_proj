import os
#from urllib import request

from flask import Flask, request, render_template, \
                  flash, url_for, redirect

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")


if __name__ == "__main__":
    app.debug = True
    app.run()

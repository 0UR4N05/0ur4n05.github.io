from website import app
from flask import render_template

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/<directory>")
def lost(directory) : 
    return render_template("404.html" , page=directory)
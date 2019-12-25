from running import chat
from flask import Flask, render_template, request,redirect

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/get")
def response():
    userText = request.args.get('msg')
    return str(chat(userText))

if __name__ == "__main__":
    app.run(debug=True)
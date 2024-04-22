from flask import Flask # type: ignore

app = Flask(__name__)


@app.route("/hello")
def hello():
    return("Hello from flask!")


if __name__ == "__main__":
    app.run(debug=True)
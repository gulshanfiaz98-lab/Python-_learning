from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/")
def home():
    return "Nova backend is running! 🤖"


@app.route("/chat", methods=["POST"])
def chat():

    data = request.get_json()

    message = data.get("message", "")

    if not message:
        return jsonify({
            "reply": "Please send me a message."
        })

    # Temporary response
    reply = f"You said: {message}"

    return jsonify({
        "reply": reply
    })


if __name__ == "__main__":
    app.run()

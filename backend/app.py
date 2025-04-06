from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app, supports_credentials=True)

print("Loaded API key:", os.getenv("GEMINI_API_KEY"))

@app.route('/api/chat', methods=['POST'])
def chat():
    print("✅ Endpoint HIT")
    print("Headers:", request.headers)
    print("Body:", request.json)

    return jsonify({"response": "This is a test response from Flask."})

if __name__ == "__main__":
    app.run(debug=True, )

from flask import Flask, request, jsonify
import requests
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This allows your React app to access this endpoint during development

# Define the endpoint that handles chat requests
@app.route('/api/chat', methods=['POST'])
def chat():
    # Get the JSON data from the incoming request
    data = request.get_json()
    user_message = data.get('message')

    # Define the Gemini API URL and your API key (stored in an environment variable)
    gemini_api_url = 'http://localhost:5000/api/chat'  # Replace with the actual Gemini API endpoint
    gemini_api_key = os.environ.get('GEMINI_API_KEY')  # Ensure this variable is set

    # Prepare the payload for the Gemini API request
    payload = {
         "prompt": user_message,
         # Include any additional parameters required by Gemini
    }
    headers = {
         "Authorization": f"Bearer {gemini_api_key}",
         "Content-Type": "application/json"
    }

    # Make the request to the Gemini API
    response = requests.post(gemini_api_url, json=payload, headers=headers)
    if response.status_code != 200:
         return jsonify({'error': 'Error calling Gemini API'}), 500

    # Extract the response from Gemini (adjust the key based on their response format)
    gemini_response = response.json()
    bot_text = gemini_response.get('response')

    # Return the bot's response as JSON
    return jsonify({'response': bot_text})

if __name__ == '__main__':
    # Run the Flask server on localhost (default port is 5000)
    app.run(debug=True)

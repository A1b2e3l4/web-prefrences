from flask import Flask, request, jsonify, render_template
import gspread
from oauth2client.service_account import ServiceAccountCredentials
import os
import json

app = Flask(__name__)

# Google Sheets API Setup
def connect_to_google_sheets():
    # Define the scope
    scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]

    # Load credentials from environment variable or JSON file
    creds_json = os.getenv("GOOGLE_CREDS")
    if creds_json:
        # Use environment variable
        creds_dict = json.loads(creds_json)
        creds = ServiceAccountCredentials.from_json_keyfile_dict(creds_dict, scope)
    else:
        # Use JSON file (fallback)
        creds = ServiceAccountCredentials.from_json_keyfile_name("data.json", scope)

    # Authorize the client
    client = gspread.authorize(creds)
    return client

# Replace with your Google Sheet name
SHEET_NAME = "Website Design Preferences"

# Serve the index.html file
@app.route("/")
def index():
    return render_template("index.html")

# Handle form submission
@app.route("/submit", methods=["POST"])
def submit_form():
    try:
        # Get form data from the request
        data = request.json

        # Connect to Google Sheets
        client = connect_to_google_sheets()
        sheet = client.open(SHEET_NAME).sheet1

        # Append the data to the sheet
        row = [
            data.get("audienceAge", ""),
            data.get("audienceGoal", ""),
            data.get("brandPersonality", ""),
            data.get("contentHelp", ""),
            data.get("pageTypes", ""),
            data.get("ctaPreferences", ""),
            data.get("seoKeywords", ""),
            data.get("metaPreferences", ""),
            data.get("analyticsIntegration", ""),
            data.get("features", ""),
            data.get("integrations", ""),
            data.get("interactivity", ""),
            data.get("inspirationSites", ""),
            data.get("visualStyle", ""),
            data.get("animations", ""),
            data.get("maintenanceManager", ""),
            data.get("updateFrequency", ""),
            data.get("trainingNeeds", ""),
            data.get("timeline", ""),
            data.get("budget", "")
        ]
        sheet.append_row(row)

        return jsonify({"message": "Data saved successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
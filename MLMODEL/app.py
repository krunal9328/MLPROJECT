import os
import traceback
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "insurance_fraud_random_forest.pkl")

# Load the model
try:
    model_pipeline = joblib.load(MODEL_PATH)
    print("Model loaded successfully from:", MODEL_PATH)
except Exception as e:
    print(f"Error loading model: {e}")
    traceback.print_exc()
    model_pipeline = None

def to_int(val, default=0):
    try:
        if val is None or val == "":
            return default
        return int(float(val))
    except (ValueError, TypeError):
        return default

def to_float(val, default=0.0):
    try:
        if val is None or val == "":
            return default
        return float(val)
    except (ValueError, TypeError):
        return default

def to_str(val, default=""):
    if val is None or val == "":
        return default
    return str(val).strip()

@app.route('/', methods=['GET'])
@app.route('/health', methods=['GET'])
def health():
    return jsonify({
        'status': 'healthy' if model_pipeline is not None else 'model_unavailable',
        'message': 'Insurance Fraud Detection Backend API is running.',
        'model_loaded': model_pipeline is not None
    })

@app.route('/predict', methods=['POST'])
def predict():
    if not model_pipeline:
        return jsonify({'error': 'Model not loaded. Check server logs.'}), 500
        
    try:
        data = request.get_json(silent=True) or {}

        # Convert frontend JSON to the dictionary format expected by the model
        claim_data = {
            "age_of_driver": to_int(data.get('ageOfDriver'), 0),
            "gender": to_str(data.get('gender'), 'M'),
            "marital_status": to_str(data.get('maritalStatus'), '1'),
            "safety_rating": to_int(data.get('safetyRating'), 0),
            "annual_income": to_float(data.get('annualIncome'), 0.0),
            "high_education": to_int(data.get('highEducation'), 1),
            "address_change": to_int(data.get('addressChange'), 0),
            "property_status": to_str(data.get('propertyStatus'), 'Own'),
            "zip_code": to_int(data.get('zipCode'), 0),
            "claim_day_of_week": to_str(data.get('claimDayOfWeek'), 'Monday'),
            "accident_site": to_str(data.get('accidentSite'), 'Local'),
            "past_num_of_claims": to_int(data.get('pastNumOfClaims'), 0),
            "witness_present": to_str(data.get('witnessPresent'), '0'),
            "liab_prct": to_int(data.get('liabPrct'), 50),
            "channel": to_str(data.get('channel'), 'Phone'),
            "police_report": to_int(data.get('policeReport'), 0),
            "age_of_vehicle": to_str(data.get('ageOfVehicle'), '0'),
            "vehicle_category": to_str(data.get('vehicleCategory'), 'Medium'),
            "vehicle_price": to_float(data.get('vehiclePrice'), 0.0),
            "vehicle_color": to_str(data.get('vehicleColor'), 'black'),
            "total_claim": to_float(data.get('totalClaim'), 0.0),
            "injury_claim": to_float(data.get('injuryClaim'), 0.0),
            "policy deductible": to_int(data.get('policyDeductible'), 1000),
            "annual premium": to_float(data.get('annualPremium'), 0.0),
            "days open": to_float(data.get('daysOpen'), 0.0),
            "form defects": to_int(data.get('formDefects'), 0)
        }
        
        # Handle claimDate parsing safely for multiple formats
        claim_date = data.get('claimDate')
        claim_year, claim_month, claim_day = 2024, 1, 1
        if claim_date:
            parsed_date = pd.to_datetime(claim_date, errors='coerce')
            if pd.notnull(parsed_date):
                claim_year = int(parsed_date.year)
                claim_month = int(parsed_date.month)
                claim_day = int(parsed_date.day)
            else:
                parts = str(claim_date).replace('/', '-').split('-')
                if len(parts) == 3:
                    if len(parts[0]) == 4:
                        claim_year, claim_month, claim_day = to_int(parts[0], 2024), to_int(parts[1], 1), to_int(parts[2], 1)
                    else:
                        claim_month, claim_day, claim_year = to_int(parts[0], 1), to_int(parts[1], 1), to_int(parts[2], 2024)

        claim_data['claim_year'] = claim_year
        claim_data['claim_month'] = claim_month
        claim_data['claim_day'] = claim_day
                
        claim_df = pd.DataFrame([claim_data])
        
        # Make prediction
        prediction = model_pipeline.predict(claim_df)[0]
        probabilities = model_pipeline.predict_proba(claim_df)[0]
        
        classes = model_pipeline.classes_
        fraud_index = list(classes).index("Y")
        fraud_probability = probabilities[fraud_index]
        
        # Determine risk level based on probability
        if fraud_probability > 0.7:
            risk_level = "High Risk"
            color = "red"
        elif fraud_probability > 0.4:
            risk_level = "Medium Risk"
            color = "yellow"
        else:
            risk_level = "Low Risk"
            color = "green"
            
        result = {
            "prediction": "Fraud" if prediction == 'Y' else "Not Fraud",
            "fraudProbability": round(float(fraud_probability), 2),
            "riskLevel": risk_level,
            "color": color
        }
        
        return jsonify(result)
        
    except Exception as e:
        traceback.print_exc()
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)


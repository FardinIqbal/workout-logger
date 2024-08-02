# backend/app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Configure the SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///workouts.db'
db = SQLAlchemy(app)

# Define the Workout model
class Workout(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    workout_type = db.Column(db.String(50), nullable=False)
    exercise = db.Column(db.String(100), nullable=False)
    sets = db.Column(db.Integer, nullable=False)
    reps = db.Column(db.Integer, nullable=False)
    weight = db.Column(db.Float, nullable=False)
    date = db.Column(db.String(50), nullable=False)

# Create the database and the table within the application context
with app.app_context():
    db.create_all()

# Define the home route
@app.route('/')
def home():
    return "Welcome to the Workout Logger API!"

# Define the registration route
@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    # Add user registration logic here
    return jsonify({"message": "User registered successfully!"}), 201

# Define the login route
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    # Add user login logic here
    return jsonify({"message": "User logged in successfully!"})

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)

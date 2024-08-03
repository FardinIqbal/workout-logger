# backend/app.py
# File: backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

# Configuration for SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///workouts.db'
db = SQLAlchemy(app)


# Define Workout model
class Workout(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    workout_type = db.Column(db.String(50), nullable=False)
    exercise = db.Column(db.String(100), nullable=False)
    sets = db.Column(db.Integer, nullable=False)
    reps = db.Column(db.Integer, nullable=False)
    weight = db.Column(db.Float, nullable=False)
    date = db.Column(db.String(50), nullable=False)


# Create the database tables
with app.app_context():
    db.create_all()


@app.route('/')
def home():
    return "Welcome to the Workout Logger API!"


@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    # Add user registration logic here
    return jsonify({"message": "User registered successfully!"}), 201


@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    # Add user login logic here
    return jsonify({"message": "User logged in successfully!"})


@app.route('/api/log-workout', methods=['POST'])
def log_workout():
    data = request.get_json()
    new_workout = Workout(
        workout_type=data.get('workout_type'),
        exercise=data.get('exercise'),
        sets=data.get('sets'),
        reps=data.get('reps'),
        weight=data.get('weight'),
        date=data.get('date')
    )
    db.session.add(new_workout)
    db.session.commit()
    return jsonify({"message": "Workout logged successfully!"}), 201


@app.route('/api/view-workouts', methods=['GET'])
def view_workouts():
    workouts = Workout.query.all()
    return jsonify([
        {
            "workout_type": workout.workout_type,
            "exercise": workout.exercise,
            "sets": workout.sets,
            "reps": workout.reps,
            "weight": workout.weight,
            "date": workout.date
        }
        for workout in workouts
    ]), 200


if __name__ == '__main__':
    app.run(debug=True)

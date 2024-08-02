# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

# Configure the SQLAlchemy part of the app instance
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


# Create the database and the database table
db.create_all()


@app.route('/')
def home():
    """Homepage route"""
    return "Welcome to the Workout Logger API!"


@app.route('/api/register', methods=['POST'])
def register():
    """
    User registration route
    Expects JSON data with 'email' and 'password'
    """
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    # Add user registration logic here
    return jsonify({"message": "User registered successfully!"}), 201


@app.route('/api/login', methods=['POST'])
def login():
    """
    User login route
    Expects JSON data with 'email' and 'password'
    """
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    # Add user login logic here
    return jsonify({"message": "User logged in successfully!"})


@app.route('/api/workouts', methods=['POST'])
def add_workout():
    """
    Route to add a new workout
    Expects JSON data with workout details
    """
    data = request.get_json()
    new_workout = Workout(
        workout_type=data['workout_type'],
        exercise=data['exercise'],
        sets=data['sets'],
        reps=data['reps'],
        weight=data['weight'],
        date=data['date']
    )
    db.session.add(new_workout)
    db.session.commit()
    return jsonify({"message": "Workout logged successfully!"}), 201


@app.route('/api/workouts', methods=['GET'])
def get_workouts():
    """
    Route to get all workouts
    Returns JSON data with a list of workouts
    """
    workouts = Workout.query.all()
    results = [
        {
            "workout_type": workout.workout_type,
            "exercise": workout.exercise,
            "sets": workout.sets,
            "reps": workout.reps,
            "weight": workout.weight,
            "date": workout.date
        } for workout in workouts]

    return jsonify(results)


if __name__ == '__main__':
    app.run(debug=True)

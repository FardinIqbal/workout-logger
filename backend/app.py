from flask import Flask, request, jsonify

app = Flask(__name__)


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


if __name__ == '__main__':
    app.run(debug=True)

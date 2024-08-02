# Backend - Workout Logger

This directory contains the backend of the Workout Logger application built with Flask.

## Setup

1. Create a virtual environment:
    ```bash
    python3 -m venv venv
    ```
2. Activate the virtual environment:
    ```bash
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```
3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

## Running the App

1. Set the Flask application environment variable:
    ```bash
    export FLASK_APP=app.py  # On Windows use `set FLASK_APP=app.py`
    ```
2. Run the Flask app:
    ```bash
    flask run
    ```

## API Endpoints

- `POST /api/register`: Register a new user.
- `POST /api/login`: Log in an existing user.

For more detailed API documentation, see the [API Documentation](API.md).

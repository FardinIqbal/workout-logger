# Workout Logger

This is a workout logging application built with React for the frontend and Flask for the backend. The application allows users to register, log in, and track their workouts.

## Project Structure

```
workout-logger/
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css
│   ├── package.json
│   ├── package-lock.json
│   ├── .gitignore
│   ├── README.md
├── backend/
│   ├── venv/
│   ├── app.py
│   ├── requirements.txt
│   ├── .gitignore
│   ├── README.md
```

## Setup Instructions

### Frontend

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```

For more detailed instructions, see the [Frontend README](frontend/README.md).

### Backend

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```
2. Create a virtual environment:
    ```bash
    python3 -m venv venv
    ```
3. Activate the virtual environment:
    ```bash
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```
4. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
5. Run the Flask app:
    ```bash
    flask run
    ```

For more detailed instructions, see the [Backend README](backend/README.md).

## Contributing

Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for details on the code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

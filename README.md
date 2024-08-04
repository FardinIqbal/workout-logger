# Workout Logger Application

## Overview

The Workout Logger Application is a full-stack web application designed to help users log and track their workouts. The application is built using Ruby on Rails for the backend and React for the frontend, with Docker for containerization and AWS for deployment. It includes user authentication, workout logging, data visualization, and social features.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Running the Backend](#running-the-backend)
  - [Running the Frontend](#running-the-frontend)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Authentication**
  - Register and login with secure password handling
- **Workout Logging**
  - Log workout details including type, exercises, sets, reps, weight, and date
  - View logged workouts
- **Data Visualization**
  - Visualize workout data with charts
- **User Profile Management**
  - Update and view user profile information
- **Social Features**
  - Follow other users and view their workouts
- **Notifications**
  - Receive notifications for new workouts or comments

## Project Structure

~~~bash
workout-logger/
├── Dockerfile
├── app/
│   ├── controllers/
│   │   ├── users_controller.rb
│   │   └── workouts_controller.rb
│   ├── models/
│   │   ├── user.rb
│   │   └── workout.rb
├── client/
│   └── src/
│       ├── App.js
│       ├── components/
│       ├── hooks/
│       ├── index.js
│       ├── pages/
│       └── styles/
├── config/
│   ├── database.yml
│   ├── initializers/
│   │   ├── cors.rb
│   ├── routes.rb
└── docker-compose.yml
~~~

## Getting Started

### Prerequisites

- Docker
- Docker Compose
- Node.js
- Ruby
- PostgreSQL

### Installation

1. **Clone the repository:**

    ~~~bash
    git clone https://github.com/FardinIqbal/workout-logger.git
    cd workout-logger
    ~~~

2. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following variables:

    ~~~env
    DATABASE_USERNAME=postgres
    DATABASE_PASSWORD=password
    ~~~

3. **Build and run the Docker containers:**

    ~~~bash
    docker-compose build
    docker-compose up
    ~~~

4. **Set up the database:**

    ~~~bash
    docker-compose run web rake db:create db:migrate
    ~~~

## Running the Application

### Running the Backend

The Rails backend will be available at `http://localhost:3000`.

### Running the Frontend

1. **Navigate to the `client` directory:**

    ~~~bash
    cd client
    ~~~

2. **Install the dependencies:**

    ~~~bash
    npm install
    ~~~

3. **Start the React development server:**

    ~~~bash
    npm start
    ~~~

The React frontend will be available at `http://localhost:3001`.

## Running Tests

### Backend Tests

To run tests for the backend:

~~~bash
docker-compose run web rspec
~~~

### Frontend Tests

To run tests for the frontend:

~~~bash
cd client
npm test
~~~

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, please contact [fardin.iqbal@stonybrook.edu](mailto:fardin.iqbal@stonybrook.edu).
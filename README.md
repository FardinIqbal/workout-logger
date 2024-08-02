# Workout Logger

## Description
A minimalistic web application to log workouts, track progress, and view workout history. This project is developed iteratively, starting with basic functionalities and progressively adding more features.

## Version 1 Goals
1. Basic user registration and login.
2. Logging workout details.
3. Viewing logged workouts.
4. Simple user interface.


## Features

### User Registration and Authentication
- Email and password registration and login.
- No email verification initially.

### Workout Logging
- Log workout details:
  - Workout Type (e.g., push, pull, legs, full body)
  - Exercise
  - Sets
  - Reps
  - Weight
  - Date
- Custom exercises.

### Progress Tracking
- Display progress using graphs and tables.
- Real-time data updates.
- Line graphs for data visualization.

### User Interface
- Minimalistic and clean design with black, white, and gray color scheme.

### Social Features
- Share workouts and upload images.
- Follow other users and view their progress (future iterations).

### Scalability
- Initially designed for personal use and friends.

### Admin Features
- Optional admin interface for managing users and content (future iterations).

### Feedback and Support
- Contact form and FAQ for user support (future iterations).

### User Profile Management
- Update personal information and profile pictures.

### Search and Filter
- Search and filter workout logs based on different criteria (e.g., date range, workout type).

### Mobile Compatibility
- Mobile-responsive design or mobile app in future iterations.

## Technical Requirements

### Frontend Framework
- React.js

### Backend Framework
- Python with Flask or Django

### Database System
- PostgreSQL or MySQL

### CI/CD
- Implement best practices using AWS

### Testing
- Unit testing and integration testing

### Deployment
- Docker for containerization
- AWS for hosting and managing the application
- Terraform for infrastructure as code

## Implementation Steps

### 1. Setup GitHub Repository
- Create a new GitHub repository.
- Initialize the repository with a README file.
- Clone the repository locally.
- Create the project structure with separate folders for frontend and backend.

### 2. Develop Frontend
- Initialize React App using `create-react-app`.
- Set up basic routing with `react-router-dom`.
- Create components: Home, Register, Login, Dashboard, Navbar.
- Manage authentication state with React Context API or Redux.
- Set up Axios for making HTTP requests to the backend.

### 3. Develop Backend
- Initialize Flask App:
  - Set up a virtual environment.
  - Install Flask and other necessary dependencies.
  - Create a basic Flask app structure.
- Set up user authentication:
  - Create user model and routes for registration and login.
  - Use Flask-Login or JWT for managing user sessions.
- Create workout logging functionality:
  - Create workout model and routes for CRUD operations.
  - Set up a database (SQLite for simplicity in version 1).
- Implement API endpoints: `/register`, `/login`, `/workouts`.

### 4. Setup Database
- Create database schema with Users and Workouts tables.
- Use Flask-Migrate to handle database migrations.

### 5. Containerization and Deployment
- Write Dockerfiles for frontend and backend.
- Set up Docker Compose to manage both services.
- Deploy the application using AWS services.
- Set up a CI/CD pipeline with GitHub Actions.

## API Integration Suggestions
- **Exercise Database API**: Integrate with an API like ExerciseDB to fetch exercise details and information.
- **Nutritional Information API**: Optionally, integrate with an API like Nutritionix to provide users with nutritional information for their meals and workouts.

## Summary
This README outlines the basic setup and initial implementation steps for developing the Workout Logger application. The project will be developed iteratively, starting with the core functionalities and progressively adding more features in future versions.

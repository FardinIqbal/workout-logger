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
- [Deployment](#deployment)
- [Using Terraform](#using-terraform)
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

## Deployment

### Deploying to AWS

1. **Set up AWS CLI and configure it:**

    ~~~bash
    aws configure
    ~~~

2. **Initialize and apply Terraform configuration:**

    ~~~bash
    cd terraform
    terraform init
    terraform apply
    ~~~

### Continuous Integration and Deployment

The project uses AWS CodePipeline for CI/CD. Ensure your repository is connected to CodePipeline and follow the AWS CodePipeline setup instructions.

## Using Terraform

Terraform will be used to manage and provision AWS resources required for this project, including setting up:

- AWS S3 buckets for storing static assets and backups
- AWS IAM roles and policies for secure access management
- AWS Lambda functions for serverless operations
- AWS DynamoDB for scalable and flexible data storage
- AWS ECS (Elastic Container Service) for container orchestration

We will provide detailed Terraform configurations and instructions as we proceed with the implementation in the grand plan.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, please contact [fardin.iqbal@stonybrook.edu](mailto:fardin.iqbal@stonybrook.edu).

---

## Grand Plan for Version 1: Workout Logging Application with Terraform

### Step 1: Implement Docker Setup for Backend

1. **Create Dockerfile for Rails Backend**
2. **Create Docker Compose File**
3. **Update Database Configuration**
4. **Build and Run Docker Containers**

### Step 2: Set Up Terraform for AWS Resources

1. **Install Terraform**
2. **Create Terraform Configuration**
3. **Configure AWS Provider**
4. **Initialize and Apply Terraform**

### Step 3: Create AWS Lambda Function for Notifications

1. **Set Up AWS CLI**
2. **Create Lambda Function**
3. **Create Deployment Package**
4. **Deploy Lambda Function**

### Step 4: Set Up CI/CD Pipeline with AWS CodePipeline and Terraform

1. **Create Buildspec for CodeBuild**
2. **Connect Terraform to AWS CodePipeline**

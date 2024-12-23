
# Fargate App for MongoDB Record Retrieval

This project is a Node.js application deployed on AWS Fargate, designed to retrieve records from a MongoDB database. The app demonstrates cloud-native deployment using Docker and AWS services, showcasing containerization and DevOps practices.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)


## Features

- Retrieves records from MongoDB based on specific queries.
- Serverless deployment using AWS Fargate.
- Scalable architecture for cloud-native environments.
- Dockerized for portability and ease of deployment.
- Real-time monitoring and logging using AWS CloudWatch.

## Technologies Used

- Frontend: Static files (HTML, CSS) for basic UI.
- Backend: Node.js for server-side logic.
- Database: MongoDB for storing and retrieving records.
- Containerization: Docker for packaging the app.
- Cloud: AWS Fargate for serverless compute, Amazon ECR for Docker image storage.
- Monitoring: AWS CloudWatch for real-time monitoring and logs.

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/saisandeep174/FargateApp
   cd FargateApp
   ```

2. Install dependencies:
   This project uses npm to manage dependencies. Run the following command to install them:
   ```bash
   npm install
   ```

3. Set up MongoDB connection:
   - Ensure that your MongoDB instance is running. If you're using MongoDB Atlas, get the connection string from the Atlas dashboard.
   - Modify the `server.js` file to include your MongoDB URI in the connection string.

4. Start the app locally:
   ```bash
   node server.js
   ```

5. Access the app:
   Open your browser and visit `http://localhost:3000` (or another port if specified in the `server.js` file).


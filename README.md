# Getting Started with Create React App

This project was created with [Create React App](https://github.com/facebook/create-react-app).


### Overview
The program is a full-stack web application designed to manage to-do items. It uses React for the frontend, Node.js with Express for the backend, and MongoDB Atlas as the database.

## Features

- **Frontend:** React with components for managing and displaying to-do items.
- **Backend:** Node.js with Express, providing a RESTful API for managing to-do items.
- **Database:** MongoDB Atlas, used for persistent data storage.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB Atlas cluster set up.
- Postman

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ElenaDatso/wit-react-node-sql.git
   

   You will need two terminals to run client and server at one time.
   In each terminal switch to according folders:
   First in each terminal:
   cd wit-react-node-sql

   Then change directory in each terminal. One - to client, another to server directory:
   
   cd server
   cd client

   In each terminal you will need to run command to install dependencies:

   npm install

### Start the development server:
nodemon index.js
or
nodemon .
Server will run at http://localhost:3001

### To start the browser:
npm run start
The application will be accessible at http://localhost:3000 in your web browser.

### API Endpoints
GET /tasks - Retrieve all to-do items.
POST /tasks - Create a new to-do item.
PUT /tasks/:id - Update an existing to-do item.
DELETE /tasks/:id - Delete a to-do item.

### Technologies Used
Frontend: React, CSS, MUI
Backend: Node.js, Express

### Frontend (React)
## User Interface: The React frontend provides an interface for users to interact with the to-do list. Users can add, view, update, and delete to-do items.
## Components: The frontend is broken down into reusable components, such as:
      ToDo List Component: Displays a list of all to-do items.
      ToDo Item Component: Represents individual to-do items, showing details like task name, description, and priority.
      Input Components: Allow users to add new to-do items or edit existing ones.
### Backend (Node.js with Express)
      API Endpoints: The backend provides a set of RESTful API endpoints for managing to-do items. These include:
            GET /tasks: Fetches all to-do items from the database.
            POST /tasks: Adds a new to-do item to the database.
            PUT /tasks/:id: Updates an existing to-do item by its ID.
            DELETE /tasks/:id: Deletes a to-do item by its ID.
# Routing: 
          The Express framework handles routing for the API endpoints, processing HTTP requests from the frontend and sending back responses.
# Middleware: 
          The backend uses middleware to handle tasks such as parsing JSON request bodies, handling CORS (if needed), and serving static files.

### Workflow
#User Interaction:
Users interact with the frontend through forms and buttons to manage their to-do items.
When a user submits a form to add or edit a to-do item, a corresponding API call is made to the backend.

## API Requests:
  The React frontend sends HTTP requests to the Express backend, depending on the user action (e.g., adding a new to-do item).
The backend processes these requests, interacts its local database to perform the required operation, and sends back a response.

## Data Management:
The backend retrieves, adds, updates, or deletes to-do items in the local database.
The frontend updates the UI based on the response from the backend, reflecting the current state of the to-do list.


## Error Handling
The program includes basic error handling. If an API request fails (e.g., due to a network issue or server error), the application logs the error to the console.

## Development and Deployment
Development Server: Developers can run a local development server for both the frontend and backend. This allows for live reloading and easy testing during development.
Production Build: The frontend can be built into a production-ready bundle using Webpack or a similar tool, which is then served by the Node.js backend.
### Summary
  In summary, this program provides a fully functional to-do list application with a robust backend, a user-friendly frontend, and persistent storage. It enables users to manage their tasks effectively, with features like CRUD 
  operations and keyword search, all while ensuring seamless communication between the frontend and backend.

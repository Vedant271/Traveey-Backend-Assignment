// Dependencies
const express=require('express') // Importing the Express.js framework
const mongoose=require('mongoose') // Importing the Mongoose library for MongoDB database interactions
const Routes=require('./Routes/route') // Importing a module called 'route' from a file located in the "./Routes" directory
require('dotenv').config() // Loading environment variables from a .env file into the application

// Initializing Express App :
app=express() // Creating instance of a Express Application

// Utilizing Express middleware express.json() for parsing JSON data within app
app.use(express.json()) 

// Calls a function initDB from a file located in the root directory to initialize the database connection
require('./initDB')() 

// Defines a simple route for the root URL ("/")
// When a user accesses the root URL, it sends a "Welcome" message as the response
app.get('/',(req,res)=>{
    res.send("Server running successfully")
})

// Defines a simple route for the root URL ("/"). When a user accesses the root URL, it sends a "Welcome" message as the response
app.use('/',Routes);

// Defines a catch-all error handler for routes that don't match any of the defined routes
// It sends a "Not Found" error message with a 404 status code when an undefined route is accessed
app.use((req,res)=>{
  res.status(404).send("Error: Not Found")
})

// Starts the Express.js server on port 3000 which will listen for incoming HTTP requests
app.listen(3000)
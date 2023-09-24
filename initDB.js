// Dependencies
const mongoose=require('mongoose') // Imports the Mongoose library for MongoDB interactions
const dotenv=require('dotenv').config() // Loading environment variables from a .env file into the application

// As the application do not have frontend to display status of execution, 
// console.logs within current file are executed to ensure the connection status of Express app with MongoDB database

// Outputs the MongoDB URI from the environment variables loaded using dotenv
console.log('MongoDB URI:', process.env.MONGO_URL); // Also this will be the URI used to connect to the MongoDB server


module.exports=()=>{

    // MongoDB Connection Setup
    // Disabling strict query mode, which allows for querying on fields not defined in the schema
    mongoose.set('strictQuery', false);

    // Initiating the connection to the MongoDB database using the URI stored in process.env.MONGO_URL and configuring other options
    mongoose.connect(process.env.MONGO_URL,{
       dbName:process.env.DB_NAME,
       user:'',
       pass:'',
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log('Mongodb connected...')
    }).catch(err=>console.log(err.message));

    // Connection Event Listeners
    // Listens for the 'connected' event and cross checking successful connection by loging appropriate message
    mongoose.connection.on('connected',()=>{
        console.log("Mongoose connected to db..")
    })
    // Listens for the 'error' event and loging error message if there's an issue with the database connection
    mongoose.connection.on('error',(err)=>{
        console.log(err.message)
    })
    // Listens for the 'disconnected' event and loging a message when the Mongoose connection is disconnected
    mongoose.connection.on('disconnected',()=>{
        console.log("Mongoose connection is disconnected")
    })

    // Listens for the 'SIGINT' event, which is triggered when the application is terminated manually
    process.on('SIGINT',()=>{
        // Closes the Mongoose connection using mongoose.connection.close()
        mongoose.connection.close(()=>{
            // Logs a message and exits the application with process.exit(0), after the connectoin is closed
            console.log("Mongoose connetion is disconnected due to app termination")
            process.exit(0)
        })
    })

}
// Dependencies
const mongoose=require('mongoose') // Imports the Mongoose library for MongoDB interactions
const schema=mongoose.Schema // Creates a schema object using Mongoose's `Schema` class

// Defines the schema for a task document in MongoDB. This schema describes the structure and properties of a task record
const taskSchema=new schema({

    // A numerical field representing the task's ID 
    // It's marked as `required` and `unique`, meaning it must be provided when creating a task record, and each ID must be unique.
    ID:{
        type:Number,
        required:true,
        unique:true
    },

    // A string field representing the task's title. It's marked as `required`
    title:{
        type:String,
        required:true
    },

    // A string field representing the task's description. It's marked as `required`
    description:{
        type:String,
        required:true
    },

    // A date field representing the due date for the task. It's marked as `required`
    duedate:{
        type:Date,
        required:true
    },

    // A numerical field representing the ID of the employee to whom the task is assigned. It's marked as `required`
    employeeId:{
        type:Number,
        required:true
    }
})

// Creates a Mongoose model named "task" based on the "taskSchema" 
// The first argument ('task') is the name of the collection in the MongoDB database where these documents will be stored
// The second argument (the schema) defines the structure of the documents within that collection.
const Task=mongoose.model('task',taskSchema)

// Exports the "Task" model, making it available for use in other parts of your Node.js application
// This exported model can be used to interact with the MongoDB database and perform CRUD (Create, Read, Update, Delete) operations on task records
module.exports=Task
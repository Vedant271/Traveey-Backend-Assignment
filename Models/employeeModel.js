// Dependencies
const mongoose=require('mongoose') // Imports the Mongoose library for MongoDB interactions
const schema=mongoose.Schema // Creates a schema object using Mongoose's `Schema` class

// Defines the schema for an employee document in MongoDB. 
// This schema describes the structure and properties of an employee record
const employeeSchema=new schema({

    // A numerical field representing the employee's ID
    // It's marked as `required` and `unique`, meaning it must be provided when creating an employee record, and each ID must be unique.
    ID:{
        type:Number,
        required:true,
        unique:true
    },

    // A string field representing the employee's name. It's marked as `required`
    name:{
        type:String,
        required:true
    },

    // A string field representing the employee's email address. It's marked as `required` and `unique`
    email:{
        type:String,
        required:true,
        unique:true
    },

    // A string field representing the employee's phone number. It's marked as `required`
    phone:{
        type:String,
        required:true
    },

    // A date field representing the date when the employee was hired. It's marked as `required`
    hiredate:{
        type:Date,
        required:true
    },

    // A string field representing the employee's position. It's marked as `required`
    position:{
        type:String,
        required:true
    }
})

// Creates a Mongoose model named "employee" based on the "employeeSchema." 
// The first argument ('employee') is the name of the collection in the MongoDB database where these documents will be stored. 
// The second argument (the schema) defines the structure of the documents within that collection.
const Empolyee=mongoose.model('employee',employeeSchema)

// Exports the "Employee" model, making it available for use in other parts of your Node.js application. 
// This exported model can be used to interact with the MongoDB database and perform CRUD (Create, Read, Update, Delete) operations on employee records
module.exports=Empolyee
// Dependencies
const expess=require('express') // Importing the Express.js framework
// Importing two models, taskModel and employeeModel, which presumably represent the schema for tasks and employees in a MongoDB database
const Task=require('../Models/taskModel')
const Employee=require('../Models/employeeModel')

// As the application do not have frontend to display status of execution, 
// console.logs within current file are executed to ensure if the operations accomplished successfully

// The code exports an object with several methods, each of which corresponds to a different route or action related to employees and tasks
module.exports={
    
    // GetAllEmployee asynchronous function handles an HTTP GET request to retrieve all employee records
    GetAllEmployee:async(req,res)=>{
        try{
            // It uses await Employee.find({}, {_v: 0}) to query the MongoDB database for all employee documents, excluding the "__v" field
            const results=await Employee.find({},{_v:0});
            // If no employees are found, it sends a "No Employee found" response
            if(!results)return res.send('No Employee found')
            // If employees are found, it sends the employee data as a response
            res.send(results)
        }catch(err){
            res.status(500).send('Error')
        }
    },

    // This asynchronous function handles an HTTP POST request to add a new employee record
    AddEmployee:async(req,res)=>{
        try{
            // It creates a new Employee instance using new Employee(req.body) with the request body data
            const employee=new Employee(req.body);
            // It then saves the new employee to the database using await employee.save()
            const result=await employee.save()
            // If the employee is successfully added, it sends the newly created employee data as a response and logs "Employee added"
            res.send(result)
            console.log("Employee added")
        }catch(err){
            res.status(500).send('unable to add employee')
        }
    },

    //This asynchronous function handles an HTTP GET request to retrieve a single employee record based on the provided id parameter
    GetSingleEmployee:async(req,res)=>{
        //It extracts the id parameter from the request using const sid = req.params.id
        const sid=req.params.id
        try{
            //It uses await Employee.find({ID: sid}) to query the database for an employee with the specified ID
            const employee=await Employee.find({ID:sid})
            //If no employee is found, it sends a "Not found" response
            if(!employee)return res.status(500).send('Not found');
            //If an employee is found, it sends the employee data as a response
            res.send(employee)
        }catch(err){
            res.status(500).send(err)
        }
    },

    //This asynchronous function handles an HTTP PATCH request to update an employee record based on the provided id parameter
    UpdateEmployee:async(req,res)=>{
        try{
            //It extracts the id parameter from the request using const updateId = req.params.id
            const updateId=req.params.id;
            //It expects an updated employee object in the request body
            const update=req.body;
            //It checks if the update object exists; if not, it sends a "invalid update" response
            if(!update)return res.status(404).send('invalid update');
            const options={new:true}
            //It uses await Employee.findOneAndUpdate({ID: updateId}, update, options) to find and update the employee record
            const update_entry=await Employee.findOneAndUpdate({ID:updateId},update,options)
            if(!update_entry){
                //If no employee is found for the provided ID, it sends a "No such task" response
                return res.status(500).json({message:'NO such task'})
            }
            //If the employee is successfully updated, it sends the updated employee data as a response
            res.send(update_entry)
        }catch(err){
            res.status(500).send(err)
        }
    },

    //This asynchronous function handles an HTTP DELETE request to delete an employee record based on the provided id parameter
    DeleteEmployee:async(req,res)=>{
        try{
            //It extracts the id parameter from the request using const deleteId = req.params.id
            const deleteid=req.params.id;
            //It uses await Employee.findOneAndDelete({ID: deleteId}) to find and delete the employee record
            const result=await Employee.findOneAndDelete({ID:deleteid})
            //If no employee is found for the provided ID, it sends a "Task not found" response
            if(!result)return res.status(500).send('Task not found');
            //If the employee is successfully deleted, it sends the deleted employee data as a response
            res.send(result)
        }catch(err){
            res.status(500).send(err)
        }
    },
    
    //This asynchronous function handles an HTTP GET request to retrieve all tasks associated with a specific employee based on the provided id parameter
    GetAllTask:async(req,res)=>{
        //It extracts the id parameter from the request using const employeeID = req.params.id
        const eployeeID=req.params.id;
        try{
            //It uses await Task.find({employeeId: employeeID}, {_v: 0}) to query the database for tasks associated with the specified employee ID
            const results=await Task.find({employeeId:eployeeID},{_v:0});
            //If no tasks are found, it sends a "No task found" response
            if(!results)return res.send('No task found')
            //If tasks are found, it sends the task data as a response
            res.send(results)
        }catch(err){
            res.status(500).send(err)
        }
    },

    //This asynchronous function handles an HTTP POST request to add a new task associated with a specific employee based on the provided id parameter
    AddNewTask:async(req,res)=>{
        try{
            //It expects task data in the request body
            //It creates a new Task instance using new Task(req.body) with the request body data
            const task=new Task(req.body);
            //It then saves the new task to the database using await task.save()
            const result=await task.save()
            //If the task is successfully added, it sends the newly created task data as a response and logs "Task added"
            res.send(result)
            console.log("Task added")
        }catch(err){
            res.status(500).send(err)
        }
    },

}
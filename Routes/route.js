// Dependencies 
const express=require('express') // Imports the Express.js framework
const route=express.Router(); //  Creates an instance of an Express Router to define routes
const controller=require('../Controller/companyController') // Imports a controller module (CompanyController) that contains functions for handling these routes

// Imports 'TaskModel' and 'EmployeeModel' models
const Task=require('../Models/taskModel')
const Employee=require('../Models/employeeModel')

// Defining all routes
route.get('/employees',controller.GetAllEmployee) // GET /employees: Retrieves a list of all employees

route.post('/employees',controller.AddEmployee) // POST /employees: Creates a new employee

route.get('/employees/:id',controller.GetSingleEmployee) // GET /employees/:id: Retrieves a specific employee by their id

route.patch('/employees/:id',controller.UpdateEmployee) // PATCH /employees/:id: Updates a specific employee by their id

route.delete('/employees/:id',controller.DeleteEmployee) // DELETE /employees/:id: Deletes a specific employee by their id

route.get('/employees/:id/tasks',controller.GetAllTask) // GET /employees/:id/tasks: Retrieves all tasks associated with a specific employee by their id

route.post('/employees/:id/tasks',controller.AddNewTask) // POST /employees/:id/tasks: Creates a new task for a specific employee by their id

// Exports the defined routes as a module, allowing these routes to be used in the main Express.js application by importing this module
module.exports=route
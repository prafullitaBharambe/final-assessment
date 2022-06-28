const db = require("../models")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const EmployeeDbModel = db.EmployeeModel


// Create
exports.create = (req,res,next) =>{
    let {name,mobile,address,email,password} = req.body
    EmployeeDbModel.create({
        name,
        mobile,
        address,
        email,
        password
    }, (err,result) => {
        if(err){
            res.json({
                message: "Error while saving employee",
                error: err
            })
        }
        res.json({
            status:200,
            data:result
        })
    })
}

// Get All
exports.getAll = (req,res,next) =>{
    EmployeeDbModel.find({},(err,result)=>{
        if(err)
        next(err)
        res.json({
            status:"success",
            message:"Successfully Retrieved all the employees",
            data:{
                empolyees:result
            }
        })
    })
}
// Get By ID
exports.getById = (req,res,next) =>{

    EmployeeDbModel.findById(req.params.id, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved employee By Id",
            data:{
                employee: result
            }
        })
    })
} 

// Get By Email
exports.getByEmail = (req,res,next) =>{
   // console.log(req.params);
   EmployeeDbModel.find({"email":req.body.email},(err,result)=> {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved employee By Email",
            data:{
                employee: result
            }
        })
    })
}
// Update
exports.updateById = (req,res,next) =>{
    EmployeeDbModel.findByIdAndUpdate(req.params.id,req.body,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Updated employee By Id",
            data:{
                employee: result
            }
        })
    })

}
// Delete By Id
exports.deleteById = (req,res,next) =>{
    EmployeeDbModel.findByIdAndRemove(req.params.id,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Deleted employee By Id",
            data:{
                employee: result
            }
        })
    })
}
// Delete All
exports.deleteAll = (req,res,next) =>{
    EmployeeDbModel.deleteMany((err,result)=>{
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Deleted All employees",
            data:{
                employee: result
            }
        })
    })

}
const adminModel = require('../models/admin.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const create = (req,res,next) => {
    const {name,email,password} = req.body

    adminModel.create({
        name,
        email,
        password
    }, (err,result) => {
        if(err)
        next(err)
        else
        res.status(200).json({
            status: "Success",
            message: "Admin Added Successfully",
            data: result
        })
    })
} 

const login = (req,res,next) => {
  //  console.log("check1")
    adminModel.findOne({email:req.body.email}, (err,result) => {
        if(err){
            next(err)
        }
        else{
            if(bcrypt.compare(req.body.password, result.password)){
                const token = jwt.sign({id:result._id},process.env.SECRETKEY/*req.app.get('secretKey')*/, {expiresIn:'1h'})
                res.json({
                    status:"Success",
                    message:"Successfully Logged in",
                    data: {
                        user: result,
                        token: token
                    }
                })
            }
        }
    })
}

module.exports = {create, login}
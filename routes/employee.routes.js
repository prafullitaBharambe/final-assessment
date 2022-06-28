const express = require('express')

const router = express.Router()

const controller = require('../controllers/employee.controller')


router.post('/addEmployee', controller.create)
router.get('/getAllEmployees',controller.getAll)
//router.get('/getEmployeeById/:id',controller.getById)
//router.post('/getEmployeebyEmail',controller.getByEmail)
router.put('/updateEmployee/:id',controller.updateById)
//router.delete('/deleteAll',controller.deleteAll)
router.delete('/deleteEmployeebyId/:id',controller.deleteById)


module.exports = router
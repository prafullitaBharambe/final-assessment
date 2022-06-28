const dbConfig = require("../config/db.config")
const mongoose = require("mongoose")

mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.mongoUrl = dbConfig.mongoUrl

// Database Name
db.employee = require("./employee.model")(mongoose)

module.exports = db
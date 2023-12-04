const mongoose=require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    emaill: String,
    passwordd: String,
    conpasswordd: String
})

const EmployeeModel = mongoose.model("people", EmployeeSchema)
module.exports = EmployeeModel
const mongoose = require('mongoose')


const employeeSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    nationalite: {
        type: String,
        required: true
    },
})
module.exports = Employee = mongoose.model('employee', employeeSchema)
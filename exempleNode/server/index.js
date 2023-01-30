const express = require("express")
const mongoose = require('mongoose')
const Employee = require("../models/employee")
const bodyParser = require("body-parser")
const cors = require('cors')
const { RouteEmplyee } = require('../routes/employe')
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(RouteEmplyee)


mongoose.connect('mongodb://localhost:27017/bdEmplye',
    (err, done) => {
        if (err) {
            console.log(err);
        }
        if (done) {
            console.log('base de donnee connecté avec succes');
        }
    })

app.listen(3000, () => { console.log("serveur en marche"); })

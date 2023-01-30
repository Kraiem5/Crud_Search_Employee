const express = require('express')
const { addEmplye, getEmplye, deleteEmplye, updateEmplye } = require('../controllers/employe')
const router = express.Router()


router.post("/employee", getEmplye)

router.post("/ajouter_employee", addEmplye)

router.delete("/delete/:id", deleteEmplye)

router.put('/modifier/:id', updateEmplye)

module.exports.RouteEmplyee = router
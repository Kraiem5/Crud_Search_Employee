const { getEmp, addEmp, updateEmp, deleteEmp } = require("../services/employe");

module.exports.getEmplye = async (req, res) => {
    try {
        const result = await getEmp(req, res)
        res.send(result)
    }
    catch (err) {
        console.log(err);
    }
}

module.exports.addEmplye = async (req, res) => {
    try {
        const result = await addEmp(req, res)
        res.send(result)
    }
    catch (err) {
        console.log(err);
    }
}

module.exports.deleteEmplye = async (req, res) => {
    try {


        const result = await deleteEmp(req, res)
        res.send(result)
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

module.exports.updateEmplye = async (req, res) => {
    try {

        const result = await updateEmp(req, res)
        res.send(result)
    }
    catch (err) {
        res.send(err)
    }
}

module.exports.getEmp = async (req, res) => {
    try {
        let search = {}

        if (req.body.firstname && req.body.firstname !== '')
            search['firstname'] = new RegExp('^' + req.body.firstname)
        if (req.body.lastname && req.body.lastname !== '')
            search['lastname'] = new RegExp(req.body.lastname, 'gi')
        if (req.body.age && req.body.age !== '')
            search['age'] = Number(req.body.age)
            if (req.body.nationalite && req.body.nationalite !== '')
            search['nationalite'] =new RegExp(req.body.nationalite, 'gi')    
          
        return await Employee.aggregate([{ $match: search }])


    } catch (error) {

    }
}
module.exports.addEmp = async (req, res) => {
    try {

        let new_employee = new Employee({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            nationalite: req.body.nationalite,
        });
        const result = await new_employee.save()

        return ({ status: true, data: result });

    } catch (error) {

    }
}
module.exports.updateEmp = async (req, res) => {
    try {
        const result = await Employee.findByIdAndUpdate({ _id: req.params.id }, {$set:{
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            nationalite: req.body.nationalite
        }},{new:true})
        return { status: true, data: result }
    } catch (error) {
        console.log(err);
    }
}
module.exports.deleteEmp = async (req, res) => {
    console.log("delete")
    try {
        const result = await Employee.findByIdAndDelete({ _id: req.params.id })
        console.log(result)
        return { status: true, data: result }
    } catch (error) {
        console.log(err);
    }
}
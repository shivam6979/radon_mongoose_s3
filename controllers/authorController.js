const authorModel = require("../models/authorModel")


const authorCreated = async function(req, res) {
    let data = req.body;
    let savedData = await authorModel.create(data)
    res.send({ status: true, data: savedData })
    console.log(savedData)
};
module.exports.authorCreated = authorCreated;
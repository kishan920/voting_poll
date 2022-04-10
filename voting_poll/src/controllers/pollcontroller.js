
const pollModel = require("../models/pollModel")
const jwt = require('jsonwebtoken')


//Q1
const createpoll = async function (req, res) {
    try {
        var data = req.body
       
        if (data) {
            let savedData = await pollModel.create(data)
            res.status(200).send({ status: true, msg: savedData })
        } else {
            res.status(400).send({ status: false, msg: "Mandatory body missing" })
        }
    } catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}






module.exports.createpoll = createpoll



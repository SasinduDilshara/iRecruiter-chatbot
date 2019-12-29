const procedures = require("../../../Core/Routines/procedure")
const uuidv4 = require('uuid/v4');
const hashFunction = require("../../../Functions/functions")
const functions = require("../../../Core/Routines/fuctions")
const companyModel = require("./companyModel")

exports.insert = (req, res) => {

    var ID = uuidv4()
    var name = req.body.details.name;
    var address = req.body.details.address;
    var telephone = req.body.details.telephone;
    var city = req.body.details.city;
    var password = req.body.details.password;
    var email = req.body.details.email;
    var username = req.body.details.username;
    var access = req.body.details.accessLevel;

    functions.checkValidateOfCompanyRegister(email, username, name).then((message) => {
        if (message != "OK") {
            console.log("VALIDATE MESSAGE", message)
            res.send({
                "success": message,
                "code": 204
            })
        }
        else {

            hashFunction.hashPassword(password)
                .then((hash) => {
                    console.log("hashregister", hash)
                    var password = hash
                    procedures.companyRegister(
                        ID, name, address, telephone, city, username, password, access, email
                    )
                        .then((result) => {
                            res.status(200).send(result);
                        });



                })

        }
    })
};

exports.getAll = (req, res) => {

    companyModel.getAll().then((result) => {

        res.send(result)

    })

};

exports.getByUsername = (req, res) => {

    companyModel.getByUsername(req.params.username).then((result) => {

        res.send(result)

    })

};

exports.getByID = (req, res) => {

    companyModel.getById(req.params.ID).then((result) => {

        res.send(result)

    })

};

exports.getByName = (req, res) => {

    companyModel.getByCompanyName(req.params.companyName).then((result) => {

        res.send(result)

    })

};
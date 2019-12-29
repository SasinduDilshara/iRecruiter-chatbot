Db = require("../../../Core/DB");
employeeProcedure = require('../../../Core/Routines/procedure')

var table = "company";
var ID = "ID";//primary key

exports.getAll = () => {
    return Db.getAll(table).then((results) => {
        return results;
    });

};

exports.getById = (id) => {
    return Db.getByColumn(table, { "column": ID, "body": id }).then((results) => {
        return results;
    });

};
exports.getByUsername = (username) => {
    console.log("MOEL", username)
    return Db.getByColumn(table, { "column": 'username', "body": username }).then((results) => {

        return results;
    });
};

exports.getByCompanyName = (companyName) => {
    return Db.getByColumn(table, { "column": 'companyName', "body": companyName }).then((results) => {
        return results;
    });
};

exports.update = (data, filter) => {
    return Db.update(table, data, { "column": ID, "body": filter }).then((results) => {

        return results;
    });

};

exports.delete = (id) => {
    return Db.delete(table, { "column": ID, "body": id }).then((results) => {

        return results;
    });

};

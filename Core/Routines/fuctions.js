Db = require('../DB')
eventNames = require('../../Config/DatabaseConfig/functions')
var connection = Db.mysqlConnection

async function checkValidateOfCompanyRegister(data1, data2, data3) {
    try {
        const result = await connection.query("select " + eventNames.checkValidateOfCompanyRegister + "(?,?,?)", [data1, data2, data3]);
        if (!result.length)
            throw new Errors.NotFound('Error');
        console.log("RES", Object.values(result[0][0])[0]);
        return Object.values(result[0][0])[0]
    }
    catch{
        console.log("Error")
    }
    
}

module.exports.checkValidateOfCompanyRegister = checkValidateOfCompanyRegister;
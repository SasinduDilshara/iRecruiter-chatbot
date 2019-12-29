Db = require("../DB")
names = require('../../Config/DatabaseConfig/procedures')

var connection = Db.mysqlConnection

async function companyRegister(data1, data2, data3, data4, data5, data6, data7, data8, data9) {
    console.log("NAMES", names)
    try {
        const result = await connection.query("call " + names.companyRegister + "(?,?,?,?,?,?,?,?,?)", [data1, data2, data3, data4, data5, data6, data7, data8, data9]);
        if (!result.length)
            throw new Errors.NotFound('Error');
        console.log("RES", result)
        return result
    }
    catch (err) {

        console.log("Error companyRegister", err)

    }

}

async function interviewerRegister(data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14, data15) {
    try {

        const result = await connection.query("call " + names.interviewerRegister + "(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14, data15]);
        if (!result.length)
            throw new Errors.NotFound('Error');
        console.log("RES", result)
        return result
    }
    catch{

        console.log("Error interviewerRegister")

    }


}


module.exports.companyRegister = companyRegister
module.exports.interviewerRegister = interviewerRegister;
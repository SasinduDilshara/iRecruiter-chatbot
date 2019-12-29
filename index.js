const config = require('./Config/envConfig');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// var cors = require('cors');
// // app.use(cors());

// app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const CompanyUserRouter = require('./Models/userModel/companyModel/router.config');



app.use(bodyParser.json());
CompanyUserRouter.routesConfig(app);


app.listen(config.port, function () {
    console.log('app listening at port %s', config.port);
});

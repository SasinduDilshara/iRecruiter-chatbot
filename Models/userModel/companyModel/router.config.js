CompanyController = require('./companyController');

exports.routesConfig = function (app) {
    app.get('/company/register', [
        CompanyController.insert
    ]);
    app.get('/company/searchID/:ID', [
        CompanyController.getByID
    ]);
    app.get('/company/searchUsername/:username', [
        CompanyController.getByUsername
    ]);
    app.get('/company/searchName/:companyName', [
        CompanyController.getByName
    ]);
    app.get('/companies', [
        CompanyController.getAll
    ]);

}


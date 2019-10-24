// API interfaces
const logEvent = require('../controllers/logEvent.controller');
const sumMetrics = require('../controllers/sumMetrics.controller');

//Custom modules
const db = require("../modules/Database.module");


class Routes {

    metricTable = new db();

    routes(app) {
        app.post('/metric/:key', (req, res) => logEvent(req, res, this.metricTable));
        app.get('/metric/:key/sum', (req, res) => sumMetrics(req, res, this.metricTable));
    };

};

module.exports = Routes;
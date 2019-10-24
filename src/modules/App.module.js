// NPM Packages
const express = require("express");
const bodyParser = require("body-parser");

// Routes module
const Routes = require("../routes/rest.api.routes");

class App {

    app = express();
    masterRoutes = new Routes();

    constructor() {
        this.initialize();
        this.masterRoutes.routes(this.app);
    };

    initialize() {
        this.app.use(bodyParser.json());
    };

};

module.exports = new App().app;
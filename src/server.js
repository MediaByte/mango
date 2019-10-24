// NodeJS standard library module
const http = require("http");

// Custom Module
const app = require('./modules/App.module');

const httpServer = new http.Server(app);

httpServer.listen(5000, () => console.log("Ready for connections"));

module.exports = httpServer;
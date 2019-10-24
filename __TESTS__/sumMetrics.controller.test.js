// Controllers
const sumMetrics = require('../src/controllers/sumMetrics.controller');
const logEvent = require('../src/controllers/logEvent.controller');

//Project Modules
const Database = require('../src/modules/Database.module')

//NPM Package for unit testing controllers
const { Request } = require('jest-express/lib/request');
const { Response } = require('jest-express/lib/response');

describe('GET data from metric controller', function () {
    let db;
    const req = new Request();
    const res = new Response();
    db = new Database();

    afterEach(() => req.resetMocked())

    it('does not fail with empty metrics data', () => {
        req.setParams("key", "active_routes");

        sumMetrics(req, res, db);

        expect(res.json).toBeCalled()
        expect(res.json).toBeCalledWith({ value: 0 });
        expect(db.metricTable.length).toBe(0)
    });

    it("returns the sum of a given metric", async () => {
        req.setParams("key", "active_routes");
        req.setBody({ "value": 20 });
        logEvent(req, res, db);

        req.setBody({ "value": 20 });
        logEvent(req, res, db);

        sumMetrics(req, res, db);

        expect(res.json).toBeCalledWith({ value: 40 });
        expect(db.metricTable.length).toBe(2)

    })


});

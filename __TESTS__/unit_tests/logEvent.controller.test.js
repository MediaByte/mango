const logEvent = require('../../src/controllers/logEvent.controller');
const Database = require('../../src/modules/Database.module')
const { Request } = require('jest-express/lib/request');
const { Response } = require('jest-express/lib/response');

const req = new Request();
const res = new Response();
let db

describe('Log a new metric', () => {

    beforeEach(() => {
        db = new Database();
    })

    it('responds to an API request as required', () => {
        req.setParams("key", "active_routes");
        req.setBody({ "value": 10 });
        logEvent(req, res, db);

        expect(res.json).toBeCalled()
        expect(res.json).toBeCalledWith({});
        expect(db.metricTable.length).toBe(1)
    });

    it('it does not crash when given empty key and value', () => {
        req.resetMocked();
        logEvent(req, res, db);

        expect(res.status).toBeCalledWith(404);
        expect(res.json).toBeCalledWith({})
        expect(db.metricTable.length).toBe(0)
    });

    it('it does not crash with null or undefined', () => {
        req.setParams("key", null);
        req.setBody({ "value": undefined });

        expect(res.status).toBeCalledWith(404);
        expect(res.json).toBeCalledWith({})
        expect(db.metricTable.length).toBe(0)
    });

});

const Metrics = require('../../src/modules/Database.module')
let db;

describe("Database", () => {

    it('returns a length of zero at initialization', () => {
        db = new Metrics(5000);
        expect(db.metricTable.length).toBe(0);
        expect(db.metricTable.length).not.toBeGreaterThan(0);
    })

    it("records new metrics", () => {
        db = new Metrics(5000);
        expect(db.push("active_routes", 10)).toBeTruthy()
    });

    it("returns a length greater than one", () => {
        db = new Metrics(5000);
        db.push("active_routes", 10)
        expect(db.metricTable.length).toBeGreaterThan(0);
        expect(db.metricTable.length).toBe(1);
    });

    it("returns the sum of a specific metric", () => {
        db = new Metrics(5000);
        db.push("active_routes", 10)
        expect(db.sumOf("active_routes")).toBe(10)
    })

    it('does not fail with empty arguments', () => {
        db = new Metrics(5000);
        expect(db.push()).toBeFalsy();
    });

    it('tests expiring data after 500ms', () => {
        const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
        db = new Metrics(500);

        sleep(1000)
        expect(db.metricTable.length).toBe(0);
        expect(db.metricTable.length).not.toBeGreaterThan(0);

    })

})
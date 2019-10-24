
const app = require('../src/modules/App.module.js');
const request = require('supertest');

describe('POST /metric/:key', () => {

    it("does not fail if given empty parameters", async (done) => {
        const response = await request(app).post('/metric/');
        done();

        expect(response.status).toBe(404);
        expect(response.body).toEqual({});
    })

    it("responds with status code 200 and empty object", async (done) => {
        const response = await request(app).post('/metric/active_users').send({ value: 10 });
        done();

        expect(response.body).toEqual({});
        expect(response.status).toBe(200);
    })

})

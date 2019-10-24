// Custom modules
const app = require('../../src/modules/App.module');

// NPM Package for integration testing
const request = require('supertest');

describe('GET Request /metric/:key/sum', () => {

    beforeAll(async (done) => {
        await request(app).post('/metric/active_users').send({ value: 10 })
        done()
    })

    it("returns zero if there are no metrics", async (done) => {

        const response = await request(app).get('/metric/users/sum')

        done()

        expect(response.status).toBe(200)
        expect(response.body).toEqual({ value: 0 })

    });

    it("returns the metric if it is available", async (done) => {

        const response = await request(app).get('/metric/active_users/sum')

        done()

        expect(response.status).toBe(200)
        expect(response.body).toEqual({ value: 10 })
        expect(response.body).not.toBe({ value: 0 })

    });

})

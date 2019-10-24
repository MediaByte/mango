describe('Server', function () {
    let server;

    beforeAll(async () => server = require('../../src/server'))
    afterAll(async () => server.close())

    it('has a defined port', () => expect(server.address().port).toBe(5000))
    it('is listening for new connections', async () => expect(server.listening).toBeTruthy())


})
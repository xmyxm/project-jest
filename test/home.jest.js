const home = require('../src/page/home')
const fetch = require('../src/lib/fetch')
jest.mock('../src/lib/fetch')


describe('Home', () => {
    test('valid ', async () => {
        expect.assertions(2)
        await home.getText()
        expect(fetch.Text).toHaveBeenCalled()
        expect(fetch.Text).toHaveBeenCalledTimes(1)
    })
})

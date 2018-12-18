const cache = require('../src/page/cache')
const isempty = require('../src/lib/isempty')
jest.mock('../src/lib/isempty')


describe('cache', () => {
    //我们在测试一些函数中的回调函数是否被调用
    test('cache mock', () => {
        cache.addCache()
        expect(isempty).toBeCalled()
        // 断言mockFn被调用了一次
        expect(isempty).toBeCalledTimes(1)
    })
})

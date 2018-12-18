const cache = require('../src/page/cache')
const isempty = require('../src/lib/isempty')
// 这里的mock会对路径里的文件进行包装，其它项目依赖的这个文件都会被mock，所以在执行这些模块的方法时只是执行了mock的方法，真实方法并未执行
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

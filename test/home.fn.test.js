const home = require('../src/page/home')


describe('Home', () => {
    //我们在测试一些函数中的回调函数是否被调用
    test('测试fn回调', async () => {
        let mockFn = jest.fn()
        await home.getText(mockFn)
        //断言mockFn被调用
        expect(mockFn).toBeCalled()
    })
    // 
    test('测试fn断言', () => {
        let mockFn = jest.fn()
        let result = mockFn(1, 2)
        // 断言mockFn的执行后返回undefined
        expect(result).toBeUndefined()
        // 断言mockFn被调用
        expect(mockFn).toBeCalled()
        // 断言mockFn被调用了一次
        expect(mockFn).toBeCalledTimes(1)
        // 断言mockFn传入的参数为1, 2
        expect(mockFn).toHaveBeenCalledWith(1, 2)
    })

    test('测试fn返回固定值', () => {
        let mockFn = jest.fn().mockReturnValue('default')
        // 断言mockFn执行后返回值为default
        expect(mockFn()).toBe('default')
        const myMock = jest.fn()
        console.log(myMock()) //undefined
        myMock.mockReturnValueOnce(1).mockReturnValueOnce('fn').mockReturnValue(true)
        expect(myMock()).toEqual(1)
        expect(myMock()).toBe('fn')
        expect(myMock()).toEqual(true)
    })

    test('测试fn内部实现', () => {
        let mockFn = jest.fn((num1, num2) => {
            return num1 * num2
        })
        // 断言mockFn执行后返回100
        expect(mockFn(10, 10)).toBe(100);
    })
    test('测试jest.fn()返回Promise', async () => {
        let mockFn = jest.fn().mockResolvedValue('异步')
        let result = await mockFn()
        // 断言mockFn通过await关键字执行后返回值为default
        expect(result).toBe('异步')
        // 断言mockFn调用后返回的是Promise对象
        expect(Object.prototype.toString.call(mockFn())).toBe("[object Promise]")
    })
})
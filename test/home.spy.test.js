const home = require('../src/page/home')
const fetch = require('../src/lib/fetch')

//jest.spyOn()方法同样创建一个mock函数，但是该mock函数不仅能够捕获函数的调用情况，还可以正常的执行被spy的函数
describe('Home', () => {
    test('valid spy', async () => {
    	// 通过spyOn设置fetch暴露的Text模块被
    	const spyFn = jest.spyOn(fetch, 'Text')
		  await home.getText()
		  //断言spyFn被调用
		  expect(spyFn).toHaveBeenCalled()
		  //断言spyFn被调用2次
		  expect(spyFn).toHaveBeenCalledTimes(1)
	// 8000是限定测试用例超时时间
    }, 8000)
})

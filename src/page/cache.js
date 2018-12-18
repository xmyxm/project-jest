
const isEmpty = require('../lib/isempty')
const print = require('../lib/print')

let cache = {}

function addCache(data) {
	let result = isEmpty(data)
	if (result) {
		cache = Object.assign(cache, result)
		print.info('添加缓存数据')
		return true
	} else {
		print.warn('缓存数据无效')
		return false
	}
}

function getCache(key) {
	if (key && cache[key]) {
		return cache[key]
	} else {
		print.info('当前缓存不存在')
		return false
	}
}

function delCache(key) {
	if (key && cache[key]) {
		delete cache[key]
		return true
	} else {
		print.info('删除缓存不存在')
		return false
	}
}

module.exports = {
	addCache,
	getCache,
	delCache
}
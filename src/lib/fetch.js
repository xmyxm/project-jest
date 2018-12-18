const fetch = require('node-fetch')
const print = require('./print.js')

function fetchText(url) {
    return new Promise(resolve => {
        let result = { code: 200, msg: '成功' }
        fetch(url)
            .then(res => res.text())
            .then(body => {
                result.data = body
                resolve(result)
            })
            .catch(e => {
                let error = e.toString()
                result.code = 500
                result.msg = error
                print.warn(`node fetchText 捕获代码异常: ${error}`)
                resolve(result)
            })
    })
}

function fetchJson(url) {
    return new Promise(resolve => {
        let result = { code: 200, msg: '成功' }
        fetch(url)
            .then(res => res.json())
            .then(json => {
                result.data = json
                resolve(result)
            })
            .catch(e => {
                let error = e.toString()
                result.code = 500
                result.msg = error
                print.warn(`node fetchJson 捕获代码异常: ${error}`)
                resolve(result)
            })
    })
}

function fetchPost(url, data) {
    return new Promise(resolve => {
        let result = { code: 200, msg: '成功' }
        fetch(url,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(res => res.json()) // expecting a json response
            .then(json => {
                result.data = json
                resolve(result)
            })
            .catch(e => {
                let error = e.toString()
                result.code = 500
                print.warn(`node fetchPost 捕获代码异常: ${error}`)
                resolve(result)
            })
    })
}

module.exports.Text = fetchText
module.exports.Json = fetchJson
module.exports.Post = fetchPost

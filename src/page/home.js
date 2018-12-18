
const fetch = require('../lib/fetch')

function getText(susCall) {
    let url = 'https://github.com/'
    return fetch.Text(url).then(res => {
        susCall && susCall(res.data)
    })
}

function getJson(susCall) {
    let url = 'https://api.github.com/users/github'
    return fetch.Json(url).then(res => {
        susCall && susCall(res.data)
    })
}

function goPost(susCall) {
    let url = 'https://httpbin.org/post'
    let data = { name: 'jest' }
    return fetch.Post(url, data).then(res => {
        susCall && susCall(res.data)
    })
}

exports.getText = getText
exports.getJson = getJson
exports.goPost = goPost


const fetch = require('../lib/fetch')

function getText() {
    let url = 'https://github.com/'
    fetch.Text(url).then(res => {
        console.log(res.data)
    })
}

function getJson() {
    let url = 'https://api.github.com/users/github'
    fetch.Json(url).then(res => {
        console.log(res.data)
    })
}

function goPost() {
    let url = 'https://httpbin.org/post'
    let data = { name: 'jest' }
    fetch.Post(url, data).then(res => {
        console.log(res.data)
    })
}

exports.getText = getText
exports.getJson = getJson
exports.goPost = goPost

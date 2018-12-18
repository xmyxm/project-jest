function isEmpty(data) {
    if (data) {
        let temp = {},
            istrue = false
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                if (data[key]) {
                    temp[key] = data[key]
                    istrue = true
                }
            }
        }
        if (istrue) {
            return temp
        } else {
            return false
        }
    }
    return false
}

module.exports = isEmpty
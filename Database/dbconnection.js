const mongoose = require('mongoose')

const dbconnection = (url) => {
    mongoose.connect(url)
}

module.exports = dbconnection
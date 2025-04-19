const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    full_name : {
        type: String,
        unique: true,
        require: true
    },
    contact : {
        type: Number,
        require: true,
        unique: true
    },
    email : {
        type: String,
        require: true
    }
})

const Client = model('User', userSchema)
module.exports = Client
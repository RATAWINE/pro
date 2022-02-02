const mongoose = require('mongoose') 
const Schema = mongoose.Schema
const messageSchema = new Schema({
    title:String,
    body:String,
    _user:{type:Schema.Types.ObjectId,ref:'User'}
})

module.exports = mongoose.model('Messages',messageSchema)
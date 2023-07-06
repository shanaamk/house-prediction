const mongoose = require('mongoose')
const schema = mongoose.Schema


const ChatModelSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    sender:{type:String},    
    receiver:{type:String},
    message:{type:String},
    date:{type:String},
    time:{type:String},


    
})

const ChatModel = mongoose.model('chat_tb',ChatModelSchema)
module.exports = ChatModel
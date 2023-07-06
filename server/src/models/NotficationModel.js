const mongoose = require('mongoose')
const schema = mongoose.Schema


const NotificationModelSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    sender:{type:String},    
    receiver:{type:String},
    notification:{type:String},
    date:{type:String},
    action:{type:String}


    
})

const NotificationModel = mongoose.model('notification_tb',NotificationModelSchema)
module.exports = NotificationModel
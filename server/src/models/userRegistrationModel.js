const mongoose = require('mongoose')
const schema = mongoose.Schema


const userRegistrationSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    name:{type:String},
    gender:{type:String},
    address:{type:String},
    email:{type:String},
    phoneno:{type:String},
    

})

const userRegistrationModel = mongoose.model('user_registration_tb',userRegistrationSchema)
module.exports = userRegistrationModel
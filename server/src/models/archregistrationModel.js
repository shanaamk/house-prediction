const mongoose = require('mongoose')
const schema = mongoose.Schema


const archRegistrationSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    name:{type:String},   
    email:{type:String},
    phoneno:{type:String},
    currentproject:{type:String},
    project_id:{type:mongoose.Types.ObjectId,ref:"project_tb"}
    

})

const archRegistrationModel = mongoose.model('arch_registration_tb',archRegistrationSchema)
module.exports = archRegistrationModel
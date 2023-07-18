const mongoose = require('mongoose')
const schema = mongoose.Schema


const projectmngerRegistrationSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    name:{type:String},  
    email:{type:String},
    phoneno:{type:String},
    currentproject:{type:String},
    status:{type:String},
    project_id:{type:mongoose.Types.ObjectId,ref:"project_tb"}
    

})

const projectmngerRegistrationModel = mongoose.model('projectmnger_registration_tb',projectmngerRegistrationSchema)
module.exports =projectmngerRegistrationModel
const mongoose = require('mongoose')
const schema = mongoose.Schema


const contractRegistrationSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    name:{type:String},    
    email:{type:String},
    phoneno:{type:String},
    worktype:{type:String},
    uploadcv:{type:String},


    
})

const contractRegistrationModel = mongoose.model('contract_registration_tb',contractRegistrationSchema)
module.exports = contractRegistrationModel
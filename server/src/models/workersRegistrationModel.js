const mongoose = require('mongoose')
const schema = mongoose.Schema


const workersRegistrationSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    name:{type:String},    
    email:{type:String},
    phoneno:{type:String},
    worktype:{type:String},
    workexperience:{type:String},
    currentproject:{type:String},
    availability_status:{type:String},
    project_id:{type:mongoose.Types.ObjectId,ref:"project_tb"}
    
    
})

const workersRegistrationModel = mongoose.model('workers_registration_tb',workersRegistrationSchema)
module.exports = workersRegistrationModel
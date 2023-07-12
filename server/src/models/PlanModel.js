const mongoose = require('mongoose')
const schema = mongoose.Schema


const PlanModelSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    user_id:{type:mongoose.Types.ObjectId,ref:"user_registration_tb"},
    project_id:{type:mongoose.Types.ObjectId,ref:"project_tb"},
   
    planimage:{type:String},  
    rejectmessage:{type:String},
    rejectcount:{type:String},
    status:{type:String},
    time_Period:{type:String},
    cost:{type:String}
})

const PlanModel = mongoose.model('plan_tb',PlanModelSchema)
module.exports =PlanModel
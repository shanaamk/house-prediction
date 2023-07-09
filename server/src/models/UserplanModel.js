const mongoose = require('mongoose')
const schema = mongoose.Schema


const userplanSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    user_id:{type:mongoose.Types.ObjectId,ref:"user_registration_tb"},
    uploadplanimg:{type:String},
   
    

})

const userplanModel = mongoose.model('user_plan_tb',userplanSchema)
module.exports = userplanModel
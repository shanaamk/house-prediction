const mongoose = require('mongoose')
const schema = mongoose.Schema


const workstatusSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    work_status:{type:String},    
    status_date:{type:String},
    status_description:{type:String},
    home_img:{type:String},
    project_id:{type:mongoose.Types.ObjectId,ref:"project_tb"}
    
    
})

const workstatusModel = mongoose.model('work_status_tb',workstatusSchema)
module.exports = workstatusModel
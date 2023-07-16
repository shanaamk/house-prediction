const mongoose = require('mongoose')
const schema = mongoose.Schema


const ProjectModelSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    architecture_id:{type:mongoose.Types.ObjectId,ref:"arch_registration_tb"},
    projectmanager_id:{type:mongoose.Types.ObjectId,ref:"projectmnger_registration_tb"},
    requirment_id:{type:mongoose.Types.ObjectId,ref:"requirment_tbs"},
    user_id:{type:mongoose.Types.ObjectId,ref:"user_registration_tb"},
    name:{type:mongoose.Types.ObjectId,ref:"user_registration_tb"},
    project_name:{type:String},    
    location:{type:String},
    prjctstrt_drtn:{type:String},
    expctd_budget:{type:String},
    confirmation:{type:String},
    register_date:{type:Date},
    starting_date:{type:String},
    finishing_date:{type:String},
    project_status:{type:String},   
    status_date:{type:String},
    status_description:{type:String},
    approvel_status:{type:String},
   
    
})

const ProjectModel = mongoose.model('project_tb',ProjectModelSchema)
module.exports = ProjectModel
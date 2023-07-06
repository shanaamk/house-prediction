const mongoose = require('mongoose')
const schema = mongoose.Schema


const ProjectModelSchema = new schema({
    architecture_id:{type:mongoose.Types.ObjectId,ref:"arch_registration_tb"},
    projectmanager_id:{type:mongoose.Types.ObjectId,ref:"projectmnger_registration_tb"},
    user_id:{type:mongoose.Types.ObjectId,ref:"user_registration_tb"},
    project_name:{type:String},    
    location:{type:String},
    register_date:{type:String},
    starting_date:{type:String},
    finishing_date:{type:String},
    project_status:{type:String},
    work_category:{type:String},
    status_date:{type:String},
    status_description:{type:String}
   
    
})

const ProjectModel = mongoose.model('project_tb',ProjectModelSchema)
module.exports = ProjectModel
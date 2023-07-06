const mongoose = require('mongoose')
const schema = mongoose.Schema

const ProjectReportModelSchema = new schema({
    
    project_id:{type:mongoose.Types.ObjectId,ref:"project_tb"},
    measure_date:{type:String},
    report:{type:String},
    contract_amnt:{type:String},
    total_days:{type:String},
    
    
    
    
   
    
})

const ProjectReportModel = mongoose.model('projectreport_tb',ProjectReportModelSchema)
module.exports = ProjectReportModel
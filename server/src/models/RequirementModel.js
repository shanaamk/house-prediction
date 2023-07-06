const mongoose = require('mongoose')
const schema = mongoose.Schema


const RequirementModelSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    project_id:{type:mongoose.Types.ObjectId,ref:"project_tb"},
    size_sqft:{type:String},    
    total_floors:{type:String},
    bedrooms:{type:String},
    bathrooms:{type:String},
    kitchen:{type:String},
    balcony:{type:String},
    message:{type:String}

    
})

const RequirementModel = mongoose.model('requirment_tb',RequirementModelSchema)
module.exports = RequirementModel
const mongoose = require('mongoose')
const schema = mongoose.Schema


const choosearchprojctModelSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    architecture_id:{type:mongoose.Types.ObjectId,ref:"arch_registration_tb"},
    projectmanager_id:{type:mongoose.Types.ObjectId,ref:"projectmnger_registration_tb"},
   


    
})

const choosearchprojctModel = mongoose.model('choosearchprojct_tb',choosearchprojctModelSchema)
module.exports = choosearchprojctModel
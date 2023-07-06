const mongoose = require('mongoose')
const schema = mongoose.Schema


const RentModelSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    propertyname:{type:String},  
    price:{type:String},    
    location:{type:String},
    landmark:{type:String},
    rentimage:{type:String},
    bedrooms:{type:String},
    bathrooms:{type:String},
    area:{type:String},

    
})

const RentModel = mongoose.model('rent_tb',RentModelSchema)
module.exports = RentModel
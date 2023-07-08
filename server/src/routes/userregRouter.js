const express = require('express')
const userRegistrationModel = require('../models/userRegistrationModel')
const loginModel = require('../models/loginModel')
const archRegistrationModel = require('../models/archregistrationModel')
const projectmngerRegistrationModel = require('../models/projectmngerRegistrationModel')
const workersRegistrationModel = require('../models/workersRegistrationModel')
const contractRegistrationModel = require('../models/contractRegistrationModel')

const userregRouter = express.Router()
userregRouter.get('/approve/:id', async (req, res) => {
try {
    const id = req.params.id;

    const approve = await loginModel.updateOne({ _id: id }, { $set: { status: 1 } });

    if (approve && approve.modifiedCount === 1) {
      return res.status(200).json({
        success: true,
        message: 'User approved',
      });
    } else if (approve && approve.modifiedCount === 0) {
      return res.status(400).json({
        success: false,
        message: 'User not found or already approved',
      });
    } else {
      throw new Error('Error updating user');
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Something went wrong',
      details: error.message,
    });
  }
});
userregRouter.get('/reject/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const reject = await loginModel.deleteOne({ _id: id });

    if (reject && reject.deletedCount === 1) {
      return res.status(200).json({
        success: true,
        message: 'User rejected',
      });
    } else if (reject && reject.deletedCount === 0) {
      return res.status(400).json({
        success: false,
        message: 'User not found or already rejected',
      });
    } else {
      throw new Error('Error deleting user');
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Something went wrong',
      details: error.message,
    });
  }
});


userregRouter.get('/view-users', async (req, res) => {
    try {
        const users = await userRegistrationModel.aggregate([
            
                {
                  '$lookup': {
                    'from': 'login_tbs', 
                    'localField': 'login_id', 
                    'foreignField': '_id', 
                    'as': 'login'
                  }
                },
                {"$unwind":"$login"
            },
            {
                "$group":{
                    '_id':"$_id",
                    'name':{"$first":"$name"},
                    'gender':{"$first":"$gender"},
                    'Address':{"$first":"$Address"},
                    'email':{"$first":"$email"},
                    'phoneNo':{"$first":"$phoneNo"},
                    'status':{"$first":"$login.status"},
                    'login_id':{"$first":"$login._id"},
                }
            }
      ])
              
        
        if(users[0]!=undefined){
            return res.status(200).json({
                success:true,
                error:false,
                data:users
            })
        }else{
            return res.status(400).json({
                success:false,
                error:true,
                message:"No data found"
            })
        }
    } catch (error) {
        return res.status(400).json({
            success:false,
            error:true,
            message:"Something went wrong",
            details:error
        })
    }
    })

userregRouter.post('/userreg', async (req, res) => {
    try{
        const oldUser = await loginModel.findOne({ username: req.body.Username })
        if(oldUser){
           return res.status(406).json({
                success:false,
                error:true,
                message:"Username already exists"
            })
        }
        

        const oldEmail = await userRegistrationModel.findOne({ email: req.body.Email })
        if(oldEmail){
           return res.status(406).json({
                success:false,
                error:true,
                message:"Email already exists"
            })
        }

        const login_data ={
            username:req.body.Username,
            password:req.body.Password,
            status:0,
            role:1

        }


        const save_login = await loginModel(login_data).save()
        if(save_login){
            const register_data = {
                login_id:save_login._id,
                name: req.body.Name,
                gender: req.body.Gender,
                address: req.body.Address,
                email: req.body.Email,
                phoneno: req.body.PhoneNo,

            }
            const save_register= await userRegistrationModel (register_data).save()
            if(save_register){
                return res.status(201).json({
                    success:true,
                    error:false,
                    message:"Registration completed",
                    details:save_register
                })
            }
        }

    }catch (error){
        return res.status(400).json({
            success:false,
            error:true,
            message:"Something went wrong",
            details:error
        })
    }
    
})


userregRouter.get('/view-architectures', async (req, res) => {
    try {
        const users = await archRegistrationModel.aggregate([
            
                {
                  '$lookup': {
                    'from': 'login_tbs', 
                    'localField': 'login_id', 
                    'foreignField': '_id', 
                    'as': 'login'
                  }
                },
                {"$unwind":"$login"
            },
            {
                "$group":{
                    '_id':"$_id",
                    'name':{"$first":"$name"},                   
                    'email':{"$first":"$email"},
                    'phoneno':{"$first":"$phoneno"},
                    'status':{"$first":"$login.status"},
                    'login_id':{"$first":"$login._id"},
                }
            }
      ])
              
        
        if(users[0]!=undefined){
            return res.status(200).json({
                success:true,
                error:false,
                data:users
            })
        }else{
            return res.status(400).json({
                success:false,
                error:true,
                message:"No data found"
            })
        }
    } catch (error) {
        return res.status(400).json({
            success:false,
            error:true,
            message:"Something went wrong",
            details:error
        })
    }
    })



userregRouter.post('/archreg1', async (req, res) => {
    try {

        const oldUser = await loginModel.findOne({ username: req.body.Username })
        if(oldUser){
           return res.status(406).json({
                success:false,
                error:true,
                message:"Username already exists"
            })
        }
        const oldEmail = await archRegistrationModel.findOne({ email: req.body.Email })
        if(oldEmail){
           return res.status(406).json({
                success:false,
                error:true,
                message:"Email already exists"
            })
        }
        const oldPhone = await archRegistrationModel.findOne({  phoneno: req.body.PhoneNo })
        if(oldPhone){
           return res.status(406).json({
                success:false,
                error:true,
                message:"Mobile number already exists"
            })
        }
        const login_data = {
            username: req.body.Username,
            password: req.body.Password,
            status:0,
            role:2
        }

        const save_login = await loginModel(login_data).save()
        if(save_login){
            const register_data = {
                login_id:save_login._id,
                name: req.body.Name,
                email: req.body.Email,
                phoneno: req.body.PhoneNo,
                currentproject:null
            }
            const save_register = await archRegistrationModel(register_data).save()
            if(save_register){
                return res.status(201).json({
                    success:true,
                    error:false,
                    message:"Registration completed",
                    details:save_register
                })
            }
        }
       
        
    } catch (error) {
        return res.status(400).json({
            success:false,
            error:true,
            message:"Something went wrong",
            details:error
        })
    }
})
  
userregRouter.get('/view-projectmanagers', async (req, res) => {
    try {
        const users = await projectmngerRegistrationModel.aggregate([
            
                {
                  '$lookup': {
                    'from': 'login_tbs', 
                    'localField': 'login_id', 
                    'foreignField': '_id', 
                    'as': 'login'
                  }
                },
                {"$unwind":"$login"
            },
            {
                "$group":{
                    '_id':"$_id",
                    'name':{"$first":"$name"},                  
                    'email':{"$first":"$email"},
                    'phoneno':{"$first":"$phoneno"},
                    'status':{"$first":"$login.status"},
                    'login_id':{"$first":"$login._id"},
                }
            }
      ])
              
        
        if(users[0]!=undefined){
            return res.status(200).json({
                success:true,
                error:false,
                data:users
            })
        }else{
            return res.status(400).json({
                success:false,
                error:true,
                message:"No data found"
            })
        }
    } catch (error) {
        return res.status(400).json({
            success:false,
            error:true,
            message:"Something went wrong",
            details:error
        })
    }
    })


userregRouter.post('/projectreg1',async(req,res)=>{
    try{
        const oldUser = await loginModel.findOne({username: req.body.Username})
        if(oldUser){
            return res.status(406).json({sucess:false,
            error:true,
            message:"Username already exists"
            })
        }
        const oldEmail= await projectmngerRegistrationModel.findOne({email:req.body.Email})
        if(oldEmail){
            return res.status(406).json({sucess:false,
            error:true,
            message:"Email already exists"
            })
        }
        const login_data= {
            username:req.body.Username,
            password:req.body.Password,
            status:0,
            role:3
        }
        const save_login = await loginModel(login_data).save()
        if(save_login){
            const register_data={
                login_id:save_login._id,
                name: req.body.Name,
                email: req.body.Email,
                phoneno: req.body.PhoneNo,
                currentproject:null
            }
            const save_register=await projectmngerRegistrationModel(register_data).save()
            if(save_register){
                return res.status(201).json({
                    sucess:true,
                    error:false,
                    message:"Registration completed",
                    deatils:save_register
                })
            }
        }
    }catch(error){
        return res.status(400).json({
            success:false,
            error:true,
            message:"Somethong went wrong",
            details:error
        })
    }
})

userregRouter.get('/view-workers', async (req, res) => {
    try {
        const users = await workersRegistrationModel.aggregate([
            
                {
                  '$lookup': {
                    'from': 'login_tbs', 
                    'localField': 'login_id', 
                    'foreignField': '_id', 
                    'as': 'login'
                  }
                },
                {"$unwind":"$login"
            },
            {
                "$group":{
                    '_id':"$_id",
                    'name':{"$first":"$name"},                  
                    'email':{"$first":"$email"},
                    'phoneno':{"$first":"$phoneno"},
                    'worktype':{"$first":"$worktype"},
                    'workexperience':{"$first":"$workexperience"},
                    'status':{"$first":"$login.status"},
                    'login_id':{"$first":"$login._id"},
                }
            }
      ])
              
        
        if(users[0]!=undefined){
            return res.status(200).json({
                success:true,
                error:false,
                data:users
            })
        }else{
            return res.status(400).json({
                success:false,
                error:true,
                message:"No data found"
            })
        }
    } catch (error) {
       
        return res.status(400).json({
            success:false,
            error:true,
            message:"Something went wrong",
            details:error
        })
    }
    })


userregRouter.post('/workerreg', async (req, res) => {
    try{
        const oldUser = await loginModel.findOne({ username: req.body.Username })
        if(oldUser){
           return res.status(406).json({
                success:false,
                error:true,
                message:"Username already exists"
            })
        }
        

        const oldEmail = await workersRegistrationModel.findOne({ email: req.body.Email })
        if(oldEmail){
           return res.status(406).json({
                success:false,
                error:true,
                message:"Email already exists"
            })
        }

        const login_data ={
            username:req.body.Username,
            password:req.body.Password,
            status:0,
            role:4

        }


        const save_login = await loginModel(login_data).save()
        if(save_login){
            const register_data = {
                login_id:save_login._id,
                name: req.body.Name,
                email: req.body.Email,
                phoneno: req.body.PhoneNo,
                worktype: req.body.WorkType,
                workexperience: req.body.WorkExperience,
                currentproject:null,
                project_id:req.body.project_id
                
            }
            const save_register= await workersRegistrationModel (register_data).save()
            if(save_register){
                return res.status(201).json({
                    success:true,
                    error:false,
                    message:"Registration completed",
                    details:save_register
                })
            }
        }

    }catch (error){
        return res.status(400).json({
            success:false,
            error:true,
            message:"Something went wrong",
            details:error
        })
    }
    
})

userregRouter.get('/view-contract', async (req, res) => {
    try {
        const users = await contractRegistrationModel.aggregate([
            
                {
                  '$lookup': {
                    'from': 'login_tbs', 
                    'localField': 'login_id', 
                    'foreignField': '_id', 
                    'as': 'login'
                  }
                },
                {"$unwind":"$login"
            },
            {
                "$group":{
                    '_id':"$_id",
                    'name':{"$first":"$name"},                  
                    'email':{"$first":"$email"},
                    'phoneno':{"$first":"$phoneno"},
                    'worktype':{"$first":"$worktype"},
                    'uploadcv':{"$first":"$uploadcv"},
                    'status':{"$first":"$login.status"},
                    'login_id':{"$first":"$login._id"},
                }
            }
      ])
              
        
        if(users[0]!=undefined){
            return res.status(200).json({
                success:true,
                error:false,
                data:users
            })
        }else{
            return res.status(400).json({
                success:false,
                error:true,
                message:"No data found"
            })
        }
    } catch (error) {
       
        return res.status(400).json({
            success:false,
            error:true,
            message:"Something went wrong",
            details:error
        })
    }
    })




userregRouter.post('/contractreg1', async (req, res) => {
    try{
        const oldUser = await loginModel.findOne({ username: req.body.Username })
        if(oldUser){
           return res.status(406).json({
                success:false,
                error:true,
                message:"Username already exists"
            })
        }
        

        const oldEmail = await contractRegistrationModel.findOne({ email: req.body.Email })
        if(oldEmail){
           return res.status(406).json({
                success:false,
                error:true,
                message:"Email already exists"
            })
        }

        const login_data ={
            username:req.body.Username,
            password:req.body.Password,
            status:0,
            role:5

        }


        const save_login = await loginModel(login_data).save()
        if(save_login){
            const register_data = {
                login_id:save_login._id,
                name: req.body.Name,
                email: req.body.Email,
                phoneno: req.body.PhoneNo,
                worktype: req.body.WorkType,
                uploadcv: req.body.CV

            }
            const save_register= await contractRegistrationModel (register_data).save()
            if(save_register){
                return res.status(201).json({
                    success:true,
                    error:false,
                    message:"Registration completed",
                    details:save_register
                })
            }
        }

    }catch (error){
        return res.status(400).json({
            success:false,
            error:true,
            message:"Something went wrong",
            details:error
        })
    }
    
})


// userregRouter.post('/workerreg', function (req, res) {
//     const data = {

//         name: req.body.Name,
//         email: req.body.Email,
//         phoneno: req.body.PhoneNo,
//         worktype: req.body.WorkType,
//         workexperience: req.body.WorkExperience,
//         username: req.body.Username,
//         password: req.body.Password,
//         cpassword: req.body.ConformPassword
//     }
//     console.log(data);
// })

// userregRouter.post('/contractreg1', function (req, res) {
//     const data = {

//         name: req.body.Name,
//         email: req.body.Email,
//         phoneno: req.body.PhoneNo,
//         worktype: req.body.WorkType,
//         uploadcv: req.body.CV,
//         username: req.body.Username,
//         password: req.body.Password,
//         cpassword: req.body.ConformPassword
//     }
//     console.log(data);
// })
 module.exports = userregRouter
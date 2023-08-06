const express=require('express');
const loginModel = require('../models/loginModel');
const userRegistrationModel = require('../models/userRegistrationModel');
const archRegistrationModel = require('../models/archregistrationModel');
const projectmngerRegistrationModel = require('../models/projectmngerRegistrationModel');
const contractRegistrationModel = require('../models/contractRegistrationModel');
const workersRegistrationModel = require('../models/workersRegistrationModel');

const loginRouter=express.Router()

loginRouter.post('/login', async (req, res) => {
    try{
       
        
        const oldUser= await loginModel.findOne({username:req.body.Username})
        if(!oldUser){
            return res.status(400).json({sucess:false,
                error:true,
                message:"User not found!"
                })
            }
        if(oldUser.password==req.body.Password){
          if(oldUser.role==0){
            return res.status(200).json({sucess:true,
                error:false,
                role:oldUser.role,
               
                login_id:oldUser._id,
                detailes:oldUser
          })


        }
        if(oldUser.role==1){
            const user = await userRegistrationModel.findOne({login_id:oldUser._id})
            if(user){
                if(oldUser.status==1){
                    return res.status(200).json({
                        success:true,
                        error:false,
                        role:oldUser.role,
                        login_id:oldUser._id,
                        name:user.name,
                        user_id:user._id,
                        status:oldUser.status,
                        detailes:oldUser
    
                    })
                }else{
                    return res.status(406).json({
                        success:false,
                        error:true,
                        message:"waiting for admin approval!"
        
                    })
                }
               
            }
        }
        if(oldUser.role==2){
            const architecture = await archRegistrationModel.findOne({login_id:oldUser._id})
            if(architecture){
                if(oldUser.status==1){
                return res.status(200).json({
                    success:true,
                    error:false,
                    role:oldUser.role,
                    login_id:oldUser._id,
                    architecture_id:architecture._id,
                    status:oldUser.status,
                    detailes:oldUser

                })
            }else{
                 return res.status(406).json({
                success:false,
                error:true,
                message:"waiting for admin approval!"

            })
          }

            }
        }
        if(oldUser.role==3){
            const projectmanager = await projectmngerRegistrationModel.findOne({login_id:oldUser._id})
            if(projectmanager){
                if(oldUser.status==1){
                return res.status(200).json({
                    success:true,
                    error:false,
                    role:oldUser.role,
                    login_id:oldUser._id,
                    projectmanager_id:projectmanager._id,
                    status:oldUser.status,
                    detailes:oldUser

                })
            }else{ return res.status(406).json({
                success:false,
                error:true,
                message:"waiting for admin approval!"

            })

            }
        }
    }
        if(oldUser.role==4){
            const workers = await workersRegistrationModel.findOne({login_id:oldUser._id})
            if(workers){
                if(oldUser.status==1){
                return res.status(200).json({
                    success:true,
                    error:false,
                    role:oldUser.role,
                    login_id:oldUser._id,
                    workers_id:workers._id,
                    status:oldUser.status,
                    detailes:oldUser

                })
            }else{ return res.status(406).json({
                success:false,
                error:true,
                message:"waiting for admin approval!"

            })
        }
    }
}
        if(oldUser.role==5){
            const contract = await contractRegistrationModel.findOne({login_id:oldUser._id})
            if(contract){
                return res.status(200).json({
                    success:true,
                    error:false,
                    role:oldUser.role,
                    login_id:oldUser._id,
                    contract_id:contract._id,
                    status:oldUser.status,
                    detailes:oldUser

                })
            }
        }

        }else{
            return res.status(406).json({
                success:false,
                error:true,
                message:"Pssword not matching!"

            })
        }
            
           

    }catch(error){
        return res.status(400).json({
            success:false,
            error:true,
            message:"Something went wrong",
            details:error
        })
    }
})
    
   
module.exports=loginRouter   
const express = require('express');
const RentModel = require('../models/RentModel');

const RentRouter = express.Router();
RentRouter.get('/view-rent', async (req, res) => {
  try {
      const users = await RentModel.find()
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

RentRouter.post('/rent', async (req, res) => {
    try{
        const data ={
           
           
            architecture_id:req.body.architecture_id, 
            user_id:req.body.user_id,
            projectmanager_id:req.body.projectmanager_id,

            propertyname:req.body.Property_name,    
            price:req.body. Price,
            location:req.body.Location,
            landmark:req.body.Landmark,
            rentimage:req.body.Rentimage,
            bedrooms:req.body.Bedrooms,
            bathrooms:req.body.Bathrooms,
            area:req.body.Area
        };
       
        const savedData = await RentModel(data).save();

        if (savedData) {
          return res.status(200).json({
            success: true,
            error: false,
            message: "Registration completed",
            details: savedData
          });
        }
    } catch (error) {
        return res.status(400).json({
          success: false,
          error: true,
          message: "Something went wrong",
          details: error
        });
      }
    });
    module.exports = RentRouter;


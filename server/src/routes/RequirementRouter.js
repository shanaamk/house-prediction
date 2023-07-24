const express = require('express');
const RequirementModel = require('../models/RequirementModel');

const RequirementRouter = express.Router();



RequirementRouter.get('/view-requirement/:id', async (req, res) => {
  try {
    const project_id = req.params.id;
    const requirements = await RequirementModel.find({project_id});
      
      
      if(requirements!=undefined){
        console.log('ok');
          return res.status(200).json({
              success:true,
              error:false,
              data:requirements
          })
      }else{
       console.log('no');
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
RequirementRouter.post('/requirement', async (req, res) => {
    try{
        const data ={
           
           
           project_id:req.body.project_id, 
           user_id: req.body.user_id,
           size_sqft:req.body.Size_sqft,    
           total_floors:req.body. Total_floors,
           bedrooms:req.body.Bedrooms,
           bathrooms:req.body.Bathrooms,
           kitchen:req.body.kitchen,
           balcony:req.body.Balcony,
           message:req.body.message,
           
        };
       console.log(data);

        const savedData = await RequirementModel(data).save();

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

    
    
    module.exports = RequirementRouter;



const express = require('express');
const RequirementModel = require('../models/RequirementModel');

const RequirementRouter = express.Router();

RequirementRouter.post('/requirement', async (req, res) => {
    try{
        const data ={
           
           
           project_id:req.body.project_id, 
           size_sqft:req.body.Size_sqft,    
           total_floors:req.body. Total_floors,
           bedrooms:req.body.Bedrooms,
           bathrooms:req.body.Bathrooms,
           kitchen:req.body.kitchen,
           balcony:req.body.Balcony,
           message:req.body.Message,
           
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



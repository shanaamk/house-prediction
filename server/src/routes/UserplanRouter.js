const express = require('express');
const userplanModel = require('../models/UserplanModel');



const userplanRouter = express.Router();

userplanRouter.post('/userplan', async (req, res) => {
    try{
        const data ={
           
           
            user_id:req.body.user_id,
            uploadplanimg:req.body.uploadplanimg,
          
           
        };
        
        const savedData = await userplanModel(data).save();

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
    module.exports = userplanRouter;




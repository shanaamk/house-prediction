const express = require('express');
const choosearchprojctModel = require('../models/choosearchprojctModel');



const choosearchprojctRouter = express.Router();

choosearchprojctRouter.post('/choosearchproject', async (req, res) => {
    try{
        const data ={
           
            
            architecture_id:req.body.architecture_id,
            projectmanager_id:req.body.projectmanager_id,
            
           
          
           
        };
       
        const savedData = await choosearchprojctModel(data).save();

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
    module.exports = choosearchprojctRouter;




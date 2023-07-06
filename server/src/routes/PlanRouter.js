const express = require('express');
const PlanModel = require('../models/PlanModel');

const PlanRouter = express.Router();
PlanRouter.post('/plan', async (req, res) => {
    try{
        const data ={
           
           
            project_id:req.body.project_id, 
            plan:req.body.Plan,
            reject_message:req.body.Reject_message,
            reject_count:req.body.Reject_count,    
            status:req.body. Status,
            time_Period:req.body.Time_Period,
            cost:req.body. Cost
           
        };
        
    
        const savedData = await PlanModel(data).save();

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
    module.exports = PlanRouter;
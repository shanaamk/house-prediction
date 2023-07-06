const express = require('express');
const ProjectReportModel = require('../models/ProjectReportModel');




const ProjecrReportRouter = express.Router();

ProjecrReportRouter.post('/projectreport', async (req, res) => {
    try{
        const data ={
           
           
            
            measure_date:req.body.Measure_date,    
            report:req.body. Report,
            contract_amnt:req.body.Contract_amnt,
            total_days:req.body.Total_days
          
          
           
        };
        
        const savedData = await ProjectReportModel(data).save();

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
    module.exports = ProjecrReportRouter;




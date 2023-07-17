const express = require('express');

const workstatusModel = require('../models/WorkstatusModel');

const workstatusRouter = express.Router();

workstatusRouter.post('/update_workstatus/:id', async (req, res) => {
    try{
    const id = req.params.id
    console.log('id', id);
        const data ={
           
            status_date: req.body.status_date,
           status_description: req.body.status_description,
    
           work_status: req.body.project_status
          
           
        };
       
        
        const savedData = await workstatusModel.updateOne({ project_id: id }, { $set: data });

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


    workstatusRouter.get('/view_update_workstatus/:id', async (req, res) => {
        try {
          const id = req.params.id
          const workstatus = await workstatusModel.find({ project_id: id});
            
            
            if(workstatus!=undefined){
              console.log('ok');
                return res.status(200).json({
                    success:true,
                    error:false,
                    data:workstatus
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
    module.exports = workstatusRouter;





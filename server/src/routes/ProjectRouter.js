const express = require('express');
const ProjectModel = require('../models/ProjectModel');

const ProjectRouter = express.Router();

ProjectRouter.post('/project', async (req, res) => {
    try{
        const data ={
           
           
            architecture_id:req.body.architecture_id, 
            user_id:req.body.user_id,
            projectmanager_id:req.body.projectmanager_id,
            project_name:req.body.Project_name,    
            location:req.body. Location,
            register_date:req.body.Register_date,
            starting_date:req.body.Starting_date,
            finishing_date:req.body.Finishing_date,
            project_status:req.body.Project_status,
            work_category:req.body.work_category,
            status_date:req.body.Status_date,
            status_description:req.body.Status_description
        };
        const savedData = await ProjectModel(data).save();

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
    module.exports = ProjectRouter;


const express = require('express');
const PlanModel = require('../models/PlanModel');
const multer = require('multer');

const PlanRouter = express.Router();


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "../client/public/upload")
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })
PlanRouter.post('/upload', upload.single("file"), (req, res) => {
  return res.json("file uploaded")
})
PlanRouter.get('/approve/:id', async (req, res) => {
  try {
      const id = req.params.id;
  
      const approve = await PlanModel.updateOne({ _id: id }, { $set: { status: 1 } });
  
      if (approve && approve.modifiedCount === 1) {
        return res.status(200).json({
          success: true,
          message: 'User approved',
        });
      } else if (approve && approve.modifiedCount === 0) {
        return res.status(400).json({
          success: false,
          message: 'User not found or already approved',
        });
      } else {
        throw new Error('Error updating user');
      }
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: 'Something went wrong',
        details: error.message,
      });
    }
  });
  PlanRouter.get('/reject/:id', async (req, res) => {
    try {
      const id = req.params.id;
  
      const reject = await PlanModel.deleteOne({ _id: id });
  
      if (reject && reject.deletedCount === 1) {
        return res.status(200).json({
          success: true,
          message: 'User rejected',
        });
      } else if (reject && reject.deletedCount === 0) {
        return res.status(400).json({
          success: false,
          message: 'User not found or already rejected',
        });
      } else {
        throw new Error('Error deleting user');
      }
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: 'Something went wrong',
        details: error.message,
      });
    }
  });
  
PlanRouter.get('/view-plan', async (req, res) => {
  try {
      const users = await PlanModel.find()
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

PlanRouter.post('/plan', async (req, res) => {
    try{
        const data ={
           
           
            user_id:req.body.user_id, 
            project_id:req.body.project_id, 
            planimage:req.body.planimage,
            reject_message:req.body.Reject_message,
            reject_count:req.body.Reject_count,    
            status:0,
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
const express = require('express');
const PlanModel = require('../models/PlanModel');
const multer = require('multer');

const PlanRouter = express.Router();


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "../client/public/assets/upload")
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })
PlanRouter.post('/upload', upload.single("file"), (req, res) => {
  return res.json("file uploaded")
})
PlanRouter.get('/approve-plan/:id', async (req, res) => {
  try {
      const id = req.params.id;
      console.log(id);
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
  
 
PlanRouter.get('/view-plan/:id', async (req, res) => {
  try {
    const user_id= req.params.id
      const users = await PlanModel.find({user_id:user_id,status:1})
    
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

  PlanRouter.get('/useraccept-plan/:id', async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const approve = await PlanModel.updateOne({ user_id: id }, { $set: { status: 2 } });
    
        if (approve && approve.modifiedCount === 1) {
          return res.status(200).json({
            success: true,
            message: 'plan accepted',
          });
        } else if (approve && approve.modifiedCount === 0) {
          return res.status(400).json({
            success: false,
            message: 'plan not found or already accepted',
          });
        } else {
          throw new Error('Error updating plan');
        }
      } catch (error) {
        return res.status(400).json({
          success: false,
          message: 'Something went wrong',
          details: error.message,
        });
      }
    });
    PlanRouter.get('/userreject-plan/:id', async (req, res) => {
      try {
        const id = req.params.id;
    
        const reject = await PlanModel.deleteOne({user_id: id });
    
        if (reject && reject.deletedCount === 1) {
          return res.status(200).json({
            success: true,
            message: ' plan rejected',
          });
        } else if (reject && reject.deletedCount === 0) {
          return res.status(400).json({
            success: false,
            message: 'plan not found or already rejected',
          });
        } else {
          throw new Error('Error deleting plan');
        }
      } catch (error) {
        return res.status(400).json({
          success: false,
          message: 'Something went wrong',
          details: error.message,
        });
      }
    });
    
    PlanRouter.get('/userview-plan/:id', async (req, res) => {
      try {
        const user_id= req.params.id
          const users = await PlanModel.find({user_id:user_id,status:2})
        
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
           
           architecture_id:req.body.architecture_id, 
            user_id:req.body.user_id, 
            project_id:req.body.project_id, 
            planimage:req.body.planimage,
            reject_message:req.body.reject_message,
            reject_count:req.body.Reject_count,  
            reject_messagedate:req.body.reject_messagedate,
            status:0,
            messageupdte_time:req.body. messageupdte_time,
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
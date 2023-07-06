const express = require('express');
const NotificationModel = require('../models/NotficationModel');


const NotificationRouter = express.Router();

NotificationRouter.post('/notification', async (req, res) => {
    try{
        const data ={
           
           
            
           sender:req.body.Sender,    
           receiver:req.body. Receiver,
           notification:req.body.Notification,
           date:req.body.Date,
           action:req.body.Action
          
           
        };
        
        const savedData = await NotificationModel(data).save();

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
    module.exports = NotificationRouter;




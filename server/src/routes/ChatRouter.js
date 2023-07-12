const express = require('express');
const ChatModel = require('../models/ChatModel');

const ChatRouter = express.Router();

ChatRouter.post('/chatbox', async (req, res) => {
    try{
        const data ={
           
           
            
           sender:req.body.Sender,    
           receiver:req.body. Receiver,
           message:req.body.Message,
           date:req.body.Date,
           time:req.body.Time,
           reply:null,
           action:req.body.Action
          
           
        };
       
        
        const savedData = await ChatModel(data).save();

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
    module.exports = ChatRouter;





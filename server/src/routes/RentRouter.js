const express = require('express');
const RentModel = require('../models/RentModel');
const multer = require('multer');


const RentRouter = express.Router();


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "../client/public/assets/upload")
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })
RentRouter.post('/upload', upload.single("file"), (req, res) => {
  return res.json("file uploaded")
})


// RentRouter.delete('/delete-rent/:id', async (req, res) => {
//   try {
//     const rentId = req.params.id;
//     const deletedrentItem = await addcartModel.findByIdAndDelete(rentId);
    
//     if (deletedrentItem) {
//       return res.status(200).json({
//         success: true,
//         error: false,
//         message: 'rent item deleted successfully',
//       });
//     } else {
//       return res.status(404).json({
//         success: false,
//         error: true,
//         message: 'rent item not found',
//       });
//     }
//   } catch (error) {
//     return res.status(400).json({
//       success: false,
//       error: true,
//       message: 'Something went wrong',
//       details: error,
//     });
//   }
// });

// RentRouter.put('/edit-rent/:id', async (req, res) => {
//   try {
//     const id=req.params.id
//       console.log('id',id);
//     const updatedData = {
//             user_id:req.body.user_id,          
//             propertyname:req.body.Property_name,    
//             address:req.body. Address,
//             price:req.body. Price,
//             location:req.body.Location,
//             landmark:req.body.Landmark,
//             rentimage:req.body.rentimage,
//             bedrooms:req.body.Bedrooms,
//             bathrooms:req.body.Bathrooms,
//             area:req.body.Area
//     };

//     const updatedRent = await RentModel.findByIdAndUpdate(id, updatedData, { new: true });

//     if (updatedRent) {
//       return res.status(200).json({
//         success: true,
//         error: false,
//         message: 'Rent  updated successfully',
//         data: updatedRent,
//       });
//     } else {
//       return res.status(404).json({
//         success: false,
//         error: true,
//         message: 'Rent  not found',
//       });
//     }
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       error: true,
//       message: 'Something went wrong',
//       details: error,
//     });
//   }
// });

RentRouter.get('/view-rent', async (req, res) => {
  try {
      const users = await RentModel.find()
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

  RentRouter.get('/view-rent/:id', async (req, res) => {
    try {
        const id=req.params.id
        const users = await RentModel.find({_id:id})
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
RentRouter.post('/rent', async (req, res) => {
    try{
        const data ={
           
           
            
            user_id:req.body.user_id,          
            propertyname:req.body.Property_name,    
            address:req.body. Address,
            price:req.body. Price,
            location:req.body.Location,
            landmark:req.body.Landmark,
            rentimage:req.body.rentimage,
            bedrooms:req.body.Bedrooms,
            bathrooms:req.body.Bathrooms,
            area:req.body.Area
        };
       
        const savedData = await RentModel(data).save();

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
    module.exports = RentRouter;


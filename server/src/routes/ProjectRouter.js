const express = require('express');
const ProjectModel = require('../models/ProjectModel');

const ProjectRouter = express.Router();

ProjectRouter.get('/view-add-project', async (req, res) => {
  try {
    const users = await ProjectModel.find()
    if (users[0] != undefined) {
      return res.status(200).json({
        success: true,
        error: false,
        data: users
      })
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: "No data found"
      })
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Something went wrong",
      details: error
    })
  }
})

ProjectRouter.post('/add-project', async (req, res) => {
  try {
    const data = {

     
      architecture_id: null,
      projectmanager_id: null,
      user_id: req.body.user_id,  
      name: req.body.name,   
      project_name: req.body.project_name,
      location: req.body.Location,
      prjctstrt_drtn: req.body.prjctstrt_drtn,
      expctd_budget: req.body.expctd_budget,
      confirmation: req.body.confirmation,
      register_date:req.body.register_date,
      starting_date: null,
      finishing_date: null,
      project_status: req.body.project_status,
      work_status: null,
      work_category: null,
      status_date: null,
      status_description: null,
      approvel_status: 0
    };
    const savedData = await ProjectModel(data).save();

    if (savedData) {
      return res.status(200).json({
        success: true,
        error: false,
        message: "Request Added",
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


ProjectRouter.get('/view-project-request', async (req, res) => {
  try {
    const users = await ProjectModel.aggregate([

      {
        '$lookup': {
          'from': 'user_registration_tbs',
          'localField': 'user_id',
          'foreignField': '_id',
          'as': 'user'
        }
      },
      {
        "$unwind": "$user"
      },
      // {
      //   '$match': {
      //     'approvel_status': '0'
      //   }
      // },

     

      {
        "$group": {
          '_id': "$_id",
          'name':{"$first":"$user.name"},
          'user_id':{"$first":"$user_id"}, 
          'project_name': { "$first": "$project_name" },
          'location': { "$first": "$location" },
          'prjctstrt_drtn': { "$first": "$prjctstrt_drtn" },
          'expctd_budget': { "$first": "$expctd_budget" },
          'confirmation': { "$first": "$confirmation" },
          'approvel_status': { "$first": "$approvel_status" },
          'login_id': { "$first": "$login._id" },
        }
      }
    ])
    if (users[0] != undefined) {
      return res.status(200).json({
        success: true,
        error: false,
        data: users
      })
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: "No data found"
      })
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Something went wrong",
      details: error
    })
  }
})

ProjectRouter.get('/view-choose-archtctr', async (req, res) => {
  try {
    const users = await ProjectModel.aggregate([

      {
        '$lookup': {
          'from': 'user_registration_tbs',
          'localField': 'user_id',
          'foreignField': '_id',
          'as': 'user'
        }
      },
      {
        '$lookup': {
          'from': 'arch_registration_tbs',
          'localField': 'architecture_id',
          'foreignField': '_id',
          'as': 'architecture'
        }
      },
      {
        '$lookup': {
          'from': 'projectmnger_registration_tbs',
          'localField': 'projectmanager_id',
          'foreignField': '_id',
          'as': 'projectmanager'
        }
      },
      {
        "$unwind": "$user"
      },
      {
        "$unwind": "$architecture"
      },
      {
        "$unwind": "$projectmanager"
      },
      {
                  "$group":{
                      '_id':"$_id",
                      'name':{"$first":"$user.name"},  
                      'project_name':{"$first":"$project_name"}, 
                      'address':{"$first":"$user.address"},               
                      'phoneno':{"$first":"$user.phoneno"},
                      'architecturename':{"$first":"$architecture.name"},
                      'projectmanagername':{"$first":"$projectmanager.name"},
                      'register_date':{"$first":"$register_date"},
                      'project_status':{"$first":"$project_status"},
                      'approvel_status':{"$first":"$approvel_status"},
                      'login_id':{"$first":"$login._id"},
                      'user_id':{"$first":"$user_id"},
                  }
              }
    ])


    if (users[0] != undefined) {
      return res.status(200).json({
        success: true,
        error: false,
        data: users
      })
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: "No data found"
      })
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Something went wrong",
      details: error
    })
  }
})




ProjectRouter.post('/choose-archtctr/:id', async (req, res) => {
  try {
    const id = req.params.id
    console.log('id', id);
    const data = {
      requirment_id:req.body.project_id,
      architecture_id: req.body.architecture_id,
      projectmanager_id: req.body.projectmanager_id,
      approvel_status:1
    };

    const approve = await ProjectModel.updateOne({ _id: id }, { $set: data });

    if (approve) {
      return res.status(200).json({
        success: true,
        error: false,
        message: "Request Added",
        details: approve
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      error: true,
      message: "Something went wrong",
      details: error
    });
  }
});


ProjectRouter.get('/view-client-list', async (req, res) => {
  try {
    const users = await ProjectModel.aggregate([

      {
        '$lookup': {
          'from': 'user_registration_tbs',
          'localField': 'user_id',
          'foreignField': '_id',
          'as': 'user'
        }
      },
      {
        '$lookup': {
          'from': 'plan_tbs',
          'localField': 'user_id',
          'foreignField': '_id',
          'as': 'plan'
        }
      },
     
      
      {
        "$unwind": "$user"
      },
      
      {
        "$unwind": "$plan"
      },
      
      {
                  "$group":{
                      '_id':"$_id",
                      'architecture_id':{"$first":"$architecture_id"},
                      'name':{"$first":"$user.name"}, 
                      'project_name':{"$first":"$project_name"},  
                      'location': { "$first": "$location" }, 
                      'register_date':{"$first":"$register_date"},
                      'status':{"$first":"$login.status"},
                      'login_id':{"$first":"$login._id"},
                      // 'useraprvl_status':{"$first":"$plan.useraprvl_status"},
                      'approvel_status':{"$first":"$approvel_status"},
                      'user_id':{"$first":"$user_id"},
                  }
              }
    ])


    if (users[0] != undefined) {
      return res.status(200).json({
        success: true,
        error: false,
        data: users
      })
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: "No data found"
      })
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Something went wrong",
      details: error
    })
  }
})



ProjectRouter.get('/view-allprjcts-toprjmnger', async (req, res) => {
  try {
    const users = await ProjectModel.aggregate([

      {
        '$lookup': {
          'from': 'user_registration_tbs',
          'localField': 'user_id',
          'foreignField': '_id',
          'as': 'user'
        }
      },
      {
        '$lookup': {
          'from': 'plan_tbs',
          'localField': 'user_id',
          'foreignField': 'user_id',
          'as': 'plan'
        }
      },
     
      
      {
        "$unwind": "$user"
      },
      {
        "$unwind": "$plan"
      },
      {
                  "$group":{
                      '_id':"$_id",
                     
                      'name':{"$first":"$user.name"},
                      'address':{"$first":"$user.address"},               
                      'phoneno':{"$first":"$user.phoneno"}, 
                      'project_name':{"$first":"$project_name"}, 
                      'location': { "$first": "$location" }, 
                      'register_date':{"$first":"$register_date"},
                      'time_Period':{"$first":"$plan.time_Period"}, 
                       'cost':{"$first":"$plan.cost"},
                                       
                      'approvel_status':{"$first":"$approvel_status"},
                      'login_id':{"$first":"$login._id"},
                      'user_id':{"$first":"$user_id"},
                  }
              }
    ])


    if (users[0] != undefined) {
      return res.status(200).json({
        success: true,
        error: false,
        data: users
      })
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: "No data found"
      })
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Something went wrong",
      details: error
    })
  }
})



ProjectRouter.post('/work_status/:id', async (req, res) => {
  try {
    const id = req.params.id
    console.log('id', id);
    const data = {
     
      status_date: req.body.status_date,
      status_description: req.body.status_description,
      work_category:req.body.work_category,
      work_status: req.body.work_status,
      // approvel_status:1
    };

    const approve = await ProjectModel.updateOne({ _id: id }, { $set: data });

    if (approve) {
      return res.status(200).json({
        success: true,
        error: false,
        message: "Request Added",
        details: approve
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      error: true,
      message: "Something went wrong",
      details: error
    });
  }
});
// ProjectRouter.get('/view_work_status/:id', async (req, res) => {
//   try {
//     const user_id = req.params.id;
//     const requirements = await ProjectModel.find({user_id});
      
      
//       if(requirements!=undefined){
//         console.log('ok');
//           return res.status(200).json({
//               success:true,
//               error:false,
//               data:requirements
//           })
//       }else{
//        console.log('no');
//           return res.status(400).json({
//               success:false,
//               error:true,
//               message:"No data found"
//           })
//       }
//   } catch (error) {
//       return res.status(400).json({
//           success:false,
//           error:true,
//           message:"Something went wrong",
//           details:error
//       })
//   }
//   })
module.exports = ProjectRouter;


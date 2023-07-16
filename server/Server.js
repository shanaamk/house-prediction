const express = require('express')
const mongoose = require('mongoose')
const loginRouter = require('./src/routes/loginRouter')
const userregRouter = require('./src/routes/userregRouter')
const bodyParser = require('body-parser')
const ProjectRouter = require('./src/routes/ProjectRouter')
const RentRouter = require('./src/routes/RentRouter')
const PlanRouter = require('./src/routes/PlanRouter')
const RequirementRouter = require('./src/routes/RequirementRouter')
const NotificationRouter = require('./src/routes/NotificationRouter')
const ChatRouter = require('./src/routes/ChatRouter')
const ProjecrReportRouter = require('./src/routes/ProjectReportRouter')
const choosearchprojctRouter = require('./src/routes/choosearchprojctRouter')
const userplanRouter = require('./src/routes/UserplanRouter')
const workstatusRouter = require('./src/routes/WorkstatusRouter')
const app = express()
app.use(bodyParser())
app.use(express.urlencoded({extended:true}))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader( 
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });



app.use('/login',loginRouter)
app.use('/register',userregRouter)
app.use('/register',ProjectRouter)
app.use('/register',RentRouter)
app.use('/register',PlanRouter)
app.use('/register',RequirementRouter)
app.use('/register',NotificationRouter)
app.use('/register',ChatRouter)
app.use('/register',ProjecrReportRouter)
app.use('/register',choosearchprojctRouter)
app.use('/userplan',userplanRouter)
app.use('/workstatus',workstatusRouter)

const mongoDBurl='mongodb+srv://shanamk0101:shanamk0101@cluster0.c2ytrmw.mongodb.net/houseprediction?retryWrites=true&w=majority'
mongoose.connect(mongoDBurl).then(()=>{
    app.listen(5000, () =>{
        console.log("server started");
    })   
}).catch((error) => {
    console.log(error);
})


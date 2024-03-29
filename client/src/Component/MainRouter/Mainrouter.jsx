import React from 'react'
import { Route,Routes} from 'react-router-dom'
import PublicUser from '../../Pages/PublicUser'
import UserReg from '../Register/UserReg'
import PublicUserAbout from '../../Pages/PublicUserAbout'
import Login from '../Login/Login'
import Contract from '../Register/Contract'
import Architecture from '../Register/Architecture'
import ProjectManager from '../Register/ProjectManager'
import Workers from '../Register/Workers'
import Userhome from '../../Pages/User/Userhome'
import Adminhome from '../../Pages/Admin/Adminhome'
import Architecturehome from '../../Pages/Architecture/Architecturehome'
import ProjectManagerhome from '../../Pages/ProjectManager/ProjectManagerhome'
import Workershome from '../../Pages/Workers/Workershome'
import Userrequirementpage from '../../Pages/User/Userrequirementpage'
import Userviewplan from '../../Pages/User/Userviewplan'
import Architecturepredictionslider from '../Architecture2/Architecturepredictionslider'
import Architecturepredictionpage from '../../Pages/Architecture/Architecturepredictionpage'
import Adminrentpage from '../../Pages/Admin/Adminrentpage'
import Adminusermanagepage from '../../Pages/Admin/Adminusermanagepage'
import Workersviewteam from '../Workers/Workersviewteam'
import Workresviewteampage from '../../Pages/Workers/Workresviewteampage'


import ProjectReport from '../ProjectManager/ProjectReport'
import ProjectReportpage from '../../Pages/ProjectManager/ProjectReportpage'
import WorkStatuspage from '../../Pages/ProjectManager/WorkStatuspage'
import Viewreq from '../Architecture2/Viewreq'
import Viewreqpage from '../../Pages/Architecture/Viewreqpage'
import ViewUserpage from '../../Pages/Architecture/ViewUserpage'
import ApproveQuotepage from '../../Pages/Admin/ApproveQuotepage'
import ViewPlanpage from '../../Pages/Admin/ViewPlanpage'
import Viewprojectstatuspage from '../../Pages/Admin/Viewprojectstatuspage'
import Ongoingworkpage from '../../Pages/Admin/Ongoingworkpage'
import Mnageprojectmanagerpage from '../../Pages/Admin/Mnageprojectmanagerpage'
import Managearchpage from '../../Pages/Admin/Managearchpage'
import Upcominworkpage from '../../Pages/Upcominworkpage'
import Userrentalpage from '../../Pages/User/Userrentalpage'
import Viewprojectpage from '../../Pages/User/Viewprojectpage'
import Managecontractpage from '../../Pages/ProjectManager/Managecontractpage'
import Usersprojectpage from '../../Pages/ProjectManager/Usersprojectpage'
import Projectstatuspage from '../../Pages/User/Projectstatuspage'
import Projectreportviewpage from '../../Pages/Admin/Projectreportviewpage'
import Viewcvpage from '../../Pages/ProjectManager/Viewcvpage'
import Viewrentdetailes from '../USER/Viewrentdetailes'
import Rentcontact from '../USER/Rentcontact'
import Addworkcategoy from '../ProjectManager/Addworkcategoy'
import AddWorker from '../ProjectManager/AddWorker'
import ManageWorker from '../ProjectManager/ManageWorker'
import ManageWorkcategory from '../ProjectManager/ManageWorkcategory'
import ViewPlan from '../Admin/ViewPlan'
import Viewarchnotification from '../USER/Viewarchnotification'
import Chatboxwithadmin from '../USER/Chatboxwithadmin'
import Viewallprojects from '../Admin/Viewallprojects'
import ChooseArchitecture from '../Admin/ChooseArchitecture'
import ChooseProjectmanager from '../Admin/ChooseProjectmanager'
import Projectreportform from '../ProjectManager/Projectreportform'
import Manageprjctreportform from '../ProjectManager/Manageprjctreportform'
import ProjectmanagerNotifications from '../ProjectManager/ProjectmanagerNotifications'
import Workerstable from '../Workers/Workerstable'
import Notifications from '../Workers/Notifications'
import Tests from '../USER/Tests'
import Control from '../Admin/Control'
import Arccontrol from '../Architecture2/Arccontrol'
import Testers from '../Architecture2/Testers'
import Adminnot from '../Admin/Adminnot'

import Projects from '../ProjectManager/Projects'
import Pmcontrol from '../ProjectManager/Pmcontrol'
import Assignworkers from '../ProjectManager/Assignworkers'
import Projectreports from '../Workers/Projectreports'
import Editrent from '../Admin/Editrent'
import QuestionCarousel from '../USER/Questions'
import Projectrequest from '../Admin/Projectrequest'
import PrjctRequestcontrol from '../Admin/PrjctRequestcontrol'
import Chat from '../ProjectManager/Chat'




const Mainrouter = () => {
  return (
   <>
   <Routes>
<Route path="/" element={<PublicUser/>}/>
<Route path="Publicuserabout" element={<PublicUserAbout/>}/>
<Route path="Userreg" element={<UserReg/>}/>
<Route path="login" element={<Login/>}/>
<Route path="contractreg" element={<Contract/>}/>
<Route path="archreg" element={<Architecture/>}/>  
<Route path="projectmanagerreg" element={<ProjectManager/>}/>
<Route path="workersreg" element={<Workers/>}/>
<Route path="userhome" element={<Userhome/>}/>
<Route path="userreq/:id" element={<Userrequirementpage/>}/>
<Route path="notfctn" element={<Viewarchnotification/>}/>
<Route path="box" element={<Chatboxwithadmin/>}/>
<Route path="userrent" element={<Userrentalpage/>}/>
<Route path="userview" element={<Viewprojectpage/>}/>
<Route path="adminhome" element={<Adminhome/>}/>
<Route path="architecturehome" element={<Architecturehome/>}/>
<Route path="projectmanagerhome" element={<ProjectManagerhome/>}/>
<Route path="workershome" element={<Workershome/>}/>
<Route path="userviewplan/:id" element={<Userviewplan/>}/>
<Route path="question" element={<QuestionCarousel/>}/>
<Route path="Status/:id" element={<Projectstatuspage/>}/>
<Route path="archpredictn" element={<Architecturepredictionpage/>}/>

<Route path="rentpage" element={<Adminrentpage/>}/>

<Route path="viewallprojucts" element={<Viewallprojects/>}/>
<Route path="managepage" element={<Adminusermanagepage/>}/>
<Route path="reqst" element={<Projectrequest/>}/>
<Route path="allprjctcontrol/:id/:user_id" element={<PrjctRequestcontrol/>}/>
<Route path="reports" element={<Projectreportviewpage/>}/>
<Route path="viewteam/:id/:pro" element={<Workresviewteampage/>}/>
<Route path="table" element={<Workerstable/>}/>
<Route path="reportss" element={<Projectreports/>}/>
<Route path="worknotfctn" element={<Notifications/>}/>

<Route path="pmnotification" element={<ProjectmanagerNotifications/>}/>
<Route path="projectreport" element={<ProjectReportpage/>}/>
<Route path="projectreportform" element={<Projectreportform/>}/>
<Route path="form" element={<Manageprjctreportform/>}/>
<Route path="cv" element={<Viewcvpage/>}/>
<Route path="tst" element={<Tests/>}/>
<Route path="admcontrol/:id/:user_id" element={<Control/>}/>
<Route path="arccontrol" element={<Arccontrol/>}/>
<Route path="not" element={<Adminnot/>}/>
<Route path="testpage" element={<Testers/>}/>
<Route path="chat" element={<Chat/>}/>
<Route path="pmpro" element={<Projects/>}/>
<Route path="pmcontrol/:id/:user_id" element={<Pmcontrol/>}/>
<Route path="Work/:id" element={<WorkStatuspage/>}/>
<Route path="assign/:id" element={<Assignworkers/>}/>
<Route path="view/:id/:user_id" element={<Viewreqpage/>}/>
<Route path="viewuse" element={<ViewUserpage/>}/>
<Route path="Quote" element={<ApproveQuotepage/>}/>
<Route path="plan/:id" element={<ViewPlanpage/>}/>
<Route path="adminstatus/:id" element={<Viewprojectstatuspage/>}/>
<Route path="ongoing" element={<Ongoingworkpage/>}/>
<Route path="manage" element={<Mnageprojectmanagerpage/>}/>
<Route path="pages" element={<Managecontractpage/>}/>
<Route path="page" element={<Usersprojectpage/>}/>
<Route path="arch" element={<Managearchpage/>}/>
<Route path="upcoming" element={<Upcominworkpage/>}/>
<Route path="viewrent/:id" element={<Viewrentdetailes/>}/>
<Route path="contact" element={<Rentcontact/>}/>
<Route path="workcategory" element={<Addworkcategoy/>}/>
<Route path="addworker" element={<AddWorker/>}/>
<Route path="manageworker" element={<ManageWorker/>}/>
<Route path="manageworkercategory" element={<ManageWorkcategory/>}/>
<Route path="carchitecture" element={<ChooseArchitecture/>}/>
<Route path="cprojectmanager" element={<ChooseProjectmanager/>}/>
<Route path="editrent/:id" element={<Editrent/>}/>








   </Routes>
   </>
  )
}

export default Mainrouter
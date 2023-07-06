import React from 'react'
import ProjectManagernavbar from './ProjectManagernavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'

const ProjectmanagerNotifications = () => {
  return (
    <>
    <ProjectManagernavbar/>
    <div className="notrow notification-container" style={{color:'black'}}>
    <h2 className="text-center">My Notifications</h2>
    <p className="dismiss text-right">
      <a id="dismiss-all" href="#">
        Dismiss All
      </a>
    </p>
    <div className="notcard notification-notcard notnotification-invitation">
              <div className="notcard-body">
             
                      <div className="col-md-8">
                        <div className="notcard-title">
                        <b>Architecture is working on your required project</b> 
                        </div>
                      </div>
                      <div className="col-md-4">
                        <a href="#" className="btn btn-danger dismiss-notification">
                          Dismiss
                        </a>
                      </div>
             
              </div>
    </div>
    <div className="notcard notification-notcard notnotification-warning">
    <div className="notcard-body">
             
             <div className="col-md-8">
               <div className="notcard-title">
               <b>Architecture is working on your required project</b> 
               </div>
             </div>
             <div className="col-md-4">
               <a href="#" className="btn btn-danger dismiss-notification">
                 Dismiss
               </a>
             </div>
    
     </div>
    </div>
    <div className="notcard notification-notcard notnotification-danger">
    <div className="notcard-body">
             
             <div className="col-md-8">
               <div className="notcard-title">
               <b>Architecture is working on your required project</b> 
               </div>
             </div>
             <div className="col-md-4">
               <a href="#" className="btn btn-danger dismiss-notification">
                 Dismiss
               </a>
             </div>
    
     </div>
    </div>
    <div className="notcard notnotification-card notnotification-reminder">
    <div className="notcard-body">
             
             <div className="col-md-8">
               <div className="notcard-title">
               <b>Architecture is working on your required project</b> 
               </div>
             </div>
             <div className="col-md-4">
               <a href="#" className="btn btn-danger dismiss-notification">
                 Dismiss
               </a>
             </div>
    
     </div>
    </div>
  </div>
  <PublicUserFooter/>
  </>
  )
}

export default ProjectmanagerNotifications
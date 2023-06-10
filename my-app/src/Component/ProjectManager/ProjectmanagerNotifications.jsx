import React from 'react'
import ProjectManagernavbar from './ProjectManagernavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'

const ProjectmanagerNotifications = () => {
  return (
    <>
    <ProjectManagernavbar/>
    <div className="row notification-container" style={{color:'black'}}>
    <h2 className="text-center">My Notifications</h2>
    <p className="dismiss text-right">
      <a id="dismiss-all" href="#">
        Dismiss All
      </a>
    </p>
    <div className="card notification-card notification-invitation">
      <div className="card-body">
        <div className="col-md-8">
          <div className="card-title">
          <b>You are added for a new project</b> 
          </div>
        </div>
        <div className="col-md-4 text-right">
          
          <a href="#" className="btn btn-danger dismiss-notification">
            Dismiss
          </a>
        </div>
      </div>
    </div>
    <div className="card notification-card notification-warning">
      <div className="card-body">
        <div className="col-md-8">
          <div className="card-title">
            <b>mr.sunil(user) upload a plan</b>
          </div>
        </div>
        <div className="col-md-4 text-right">
         
          <a href="#" className="btn btn-danger dismiss-notification">
            Dismiss
          </a>
        </div>
      </div>
    </div>
    <div className="card notification-card notification-danger">
      <div className="card-body">
        <div className="col-md-8">
          <div className="card-title">
           <b>Make Updations for projectes</b>
          </div>
        </div>
        <div className="col-md-4 text-right">
          
          <a href="#" className="btn btn-danger dismiss-notification">
            Dismiss
          </a>
        </div>
      </div>
    </div>
    <div className="card notification-card notification-reminder">
      <div className="card-body">
        <div className="col-md-8">
          <div className="card-title">
             <b>you have been completed within scheduled time</b> 
          </div>
        </div>
        <div className="col-md-4 text-right">
         
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
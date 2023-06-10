import React from 'react'
import Workersnavbar from './Workersnavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Notifications = () => {
  return (
    <>
    <Workersnavbar/>
    <div className="notrow notification-container" style={{color:'black'}}>
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
          <b>ProjectManager is added you in a new Project</b> 
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
            <b>Project Reports will be inform you</b>
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
           <b>Congratulations team! and we are trusted  for you to completing this project</b>
          </div>
        </div>
        <div className="col-md-4 text-right">
          
          <a href="#" className="btn btn-danger dismiss-notification">
            Dismiss
          </a>
        </div>
      </div>
    </div>
    {/* <div className="card notification-card notification-reminder">
      <div className="card-body">
        <div className="col-md-8">
          <div className="card-title">
             <b>Thank you for choosing us in your dream project</b> 
          </div>
        </div>
        <div className="col-md-4 text-right">
         
          <a href="#" className="btn btn-danger dismiss-notification">
            Dismiss
          </a>
        </div>
      </div>
    </div> */}
  </div>
  <PublicUserFooter/>
  </>
  )
}

export default Notifications
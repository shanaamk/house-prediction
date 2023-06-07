import React from 'react'

const ViewUsers = () => {
  return (
    <div className="container mt-5">
  <div className="d-flex justify-content-center row">
    <div className="col-md-6">
      <div className="p-3 bg-white text-center" style={{color:'black'}}>
        <div>
          <img src="" />
          <h4>Users List</h4>
        </div>
        <p >
          Follow some beautiful soul who&nbsp;
          <br />
          have some interests like you!
          <br />
          <br />
        </p>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex flex-row align-items-center">
            <img
              className="rounded-circle"
              src="img/pic/downloadlogo.jpg"
              width={55}
            />
            <div className="d-flex flex-column align-items-start ml-2">
              <span className="font-weight-bold">Bella Thorne</span>
              <span className="followers">1450 Followers</span>
            </div>
            </div>
            <div className="d-flex flex-row align-items-center ml-2">
            
              <span className="followers">Client Waiting for plan updation</span>
            </div>
        
          <div className="d-flex flex-row align-items-center mt-2">
            <button className="btn btn-outline-primary btn-sm" type="button">
             Viewed
            </button>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center mt-2">
          <div className="d-flex flex-row align-items-center">
            <img
              className="rounded-circle"
              src="img/pic/downloadlogo.jpg"
              width={55}
            />
            <div className="d-flex flex-column align-items-start ml-2">
              <span className="font-weight-bold">Scarlet</span>
              <span className="followers">18570 Followers</span>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center ml-2">
            
            <span className="followers">Client Waiting for plan updation</span>
          </div>
          <div className="d-flex flex-row align-items-center mt-2">
            <button className="btn btn-primary btn-sm" type="button">
              View
            </button>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center mt-2">
          <div className="d-flex flex-row align-items-center">
            <img
              className="rounded-circle"
              src="img/pic/downloadlogo.jpg"
              width={55}
            />
            <div className="d-flex flex-column align-items-start ml-2">
              <span className="font-weight-bold">Soffie Morne</span>
              <span className="followers">12550 Followers</span>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center ml-2">
            
            <span className="followers">Client Waiting for plan updation</span>
          </div>
          <div className="d-flex flex-row align-items-center mt-2">
            <button className="btn btn-outline-primary btn-sm" type="button">
              Viewed
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ViewUsers
import React from 'react'

const Workersnavbar = () => {
  return (
    <div className="container-fluid sticky-top bg-white bg-light-radial shadow-sm px-5 pe-lg-0">
    <nav className="navbar navbar-expand-lg  bg-white bg-light-radial  navbar-dark py-3 py-lg-0">
      <a href="index.html" className="navbar-brand">
        <h6 className="text-uppercase text-black">
          <img src="img\pic\logoimge.jpg" width="70px" />
          &nbsp;&nbsp; HOME CONSTRUCTION
        </h6>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" style={{ color: "black" }} />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0" style={{ color: "black" }}>
          <a href="" className="nav-item nav-link active">
            Home
          </a>
         
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Works
            </a>
            <div className="dropdown-menu m-0">
              <a href="#Ongoing" className="dropdown-item">
                Ongoing works
              </a>
              <a href="archtctr.html" className="dropdown-item">
                Upcoming Works
              </a>
             
            </div>
          </div>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Project
            </a>
            <div className="dropdown-menu m-0">
              <a href="viewteam" className="dropdown-item">
                View team
              </a>            
            </div>
          </div>
          <a href="pages" className="nav-item nav-link">
           Notifications
          </a>
          <a href="Sign in.html" className="nav-item nav-link">
            Logout
          </a>
          
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Workersnavbar
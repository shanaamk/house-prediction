import React from 'react'

const ProjectManagernavbar = () => {
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
          <a href="pages" className="nav-item nav-link">
            Manage contract
          </a>
          
          {/* <a href="" class="nav-item nav-link">Contact</a> */}
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Project
            </a>
            <div className="dropdown-menu m-0">
              <a href="projectreportform" className="dropdown-item">
                Add project Report
              </a>
              <a href="form" className="dropdown-item">
               Manage project Report
              </a>
              <a href="projectreport" className="dropdown-item">
                View project Report
              </a>
              <a href="Work" className="dropdown-item">
                Project Status
              </a>
              {/* <a href="workers.html" class="dropdown-item">Workers</a> */}
              {/* <a href="detail.html" class="dropdown-item">Blog Detail</a> */}
            </div>
          </div>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Work category
            </a>
            <div className="dropdown-menu m-0">
              <a href="workcategory" className="dropdown-item">
                Add
              </a>
              <a href="manageworkercategory" className="dropdown-item">
                Manage
              </a>
              {/* <a href="archtctr.html" class="dropdown-item">project Report</a>
                          <a href="projectmanager.html" class="dropdown-item">Project Status</a> */}
              {/* <a href="workers.html" class="dropdown-item">Workers</a> */}
              {/* <a href="detail.html" class="dropdown-item">Blog Detail</a> */}
            </div>
          </div>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Workers
            </a>
            <div className="dropdown-menu m-0">
              <a href="addworker" className="dropdown-item">
                Add
              </a>
              <a href="manageworker" className="dropdown-item">
                Manage
              </a>
              {/* <a href="archtctr.html" class="dropdown-item">project Report</a>
                          <a href="projectmanager.html" class="dropdown-item">Project Status</a> */}
              {/* <a href="workers.html" class="dropdown-item">Workers</a> */}
              {/* <a href="detail.html" class="dropdown-item">Blog Detail</a> */}
            </div>
            
          </div>
          <a href="Sign in.html" className="nav-item nav-link">
            Logout
          </a>
          {/* <a href="contract.html" class="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block">Contract <i class="bi bi-arrow-right"></i></a> */}
        </div>
      </div>
    </nav>
  </div>
  )
}

export default ProjectManagernavbar
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProjectManagernavbar = () => {
  const navigate = useNavigate()
  const logout = () => {
    
    localStorage.removeItem('projectmanager_id')
    localStorage.removeItem('login_id')
    localStorage.removeItem('role')
    navigate('/')
  }
  useEffect(() => {
    const projectmanagers_id = localStorage.getItem('projectmanager_id')
    if (!projectmanagers_id) {
      navigate('/')
    }
  }, [])
  const projectmanager_id=localStorage.getItem('projectmanager_id')
  if (!projectmanager_id) {
    navigate('/login')
  }
  return (
    <div className="container-fluid sticky-top bg-white bg-light-radial shadow-sm px-5 pe-lg-0">
    <nav className="navbar navbar-expand-lg  bg-white bg-light-radial  navbar-dark py-3 py-lg-0">
      <a href="index.html" className="navbar-brand">
        <h6 className="text-uppercase text-black">
          <img src="img\pic\logoimge.jpg" width="70px" />
          &nbsp;&nbsp; BuildScape
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
          <a href="pmpro" className="nav-item nav-link">
           Projects
          </a>
          
          {/* <a href="" class="nav-item nav-link">Contact</a> */}
          
         
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Workers
            </a>
            <div className="dropdown-menu m-0">
              
              <a href="manageworker" className="dropdown-item">
                Manage
              </a>
              {/* <a href="archtctr.html" class="dropdown-item">project Report</a>
                          <a href="projectmanager.html" class="dropdown-item">Project Status</a> */}
              {/* <a href="workers.html" class="dropdown-item">Workers</a> */}
              {/* <a href="detail.html" class="dropdown-item">Blog Detail</a> */}
            </div>
            
          </div>
          {/* <a   href="chat"className="nav-item nav-link"><i className='far fa-comments' style={{fontSize:36}}></i></a>
          <a href="pmnotification" className="nav-item nav-link">
           Notifications
          </a> */}
          <a onClick={logout} className="nav-item nav-link">
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
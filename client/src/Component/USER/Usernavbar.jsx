import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Usernavbar = () => {
  const navigate = useNavigate()
  const logout = () => {
    
    localStorage.removeItem('user_id')
    localStorage.removeItem('login_id')
    localStorage.removeItem('role')
    navigate('/')
  }
  useEffect(() => {
    const users_id = localStorage.getItem('user_id')
    if (!users_id) {
      navigate('/')
    }
  }, [])
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
          <a href="userhome" className="nav-item nav-link active">
            Home
          </a>
          {/* <a href="" class="nav-item nav-link">Rent</a> */}
          
          <a href="userview" className="nav-item nav-link">
           Projects
          </a>
         

          {/* <a href="Userviewplan" className="nav-item nav-link">
            Project
          </a> */}
          {/* <a href="" class="nav-item nav-link">Requirement</a> */}
          
          <a href="notfctn" className="nav-item nav-link">
            Notifications
          </a>
          
          <a   href="box"className="nav-item nav-link"><i className='far fa-comments' style={{fontSize:36}}></i></a>
          <a onClick={logout} className="nav-item nav-link">
            LOGOUT
          </a>
          <a
            href="contractreg"
            className="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block"
          >
            Contract <i className="bi bi-arrow-right" />
          </a>
          {/* <a href="contract.html" class="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block">Contract <i class="bi bi-arrow-right"></i></a> */}
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Usernavbar
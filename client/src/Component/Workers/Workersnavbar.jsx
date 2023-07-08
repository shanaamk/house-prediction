import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Workersnavbar = () => {
  const navigate = useNavigate()
  const logout = () => {
    
    localStorage.removeItem('workers_id')
    localStorage.removeItem('login_id')
    localStorage.removeItem('role')
    navigate('/')
  }
  useEffect(() => {
    const worker_id = localStorage.getItem('workers_id')
    if (!worker_id) {
      navigate('/')
    }
  }, [])
  const workers_id=localStorage.getItem('workers_id')
  if (!workers_id) {
    navigate('/login')
  }
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
          <a href="worknotfctn" className="nav-item nav-link">
           Notifications
          </a>
          <a onClick={logout} className="nav-item nav-link">
            Logout
          </a>
          
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Workersnavbar
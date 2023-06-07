import React from 'react'

const PublicUserNav = () => {
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
          <a href="/" className="nav-item nav-link active">
            Home
          </a>
          <a href="Publicuserabout" className="nav-item nav-link">
            About
          </a>
          <a href="" className="nav-item nav-link">
            Contact
          </a>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Register
            </a>
            <div className="dropdown-menu m-0">
              <a href="Userreg" className="dropdown-item">
                user
              </a>
              <a href="archreg" className="dropdown-item">
                Architecture
              </a>
              <a href="projectmanagerreg" className="dropdown-item">
                Project Manager
              </a>
              <a href="workersreg" className="dropdown-item">
                Workers
              </a>
              {/* <a href="detail.html" class="dropdown-item">Blog Detail</a> */}
            </div>
          </div>
          <a href="login" className="nav-item nav-link">
            Login
          </a>
          <a
            href="contractreg"
            className="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block"
          >
            Contract <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </nav>
  </div>
  
  )
}

export default PublicUserNav
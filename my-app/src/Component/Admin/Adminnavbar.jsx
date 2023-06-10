import React from 'react'

const Adminnavbar = () => {
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
        <a href="ongoing" className="nav-item nav-link active">
          Home
        </a>
        <a href="/" className="nav-item nav-link">
         Notifications
        </a>
       <a   href="userchat"className="nav-item nav-link"><i className='far fa-comments' style={{fontSize:36}}></i></a>
        <a href="/" className="nav-item nav-link">
          LOGOUT
        </a>
      </div>
    </div>
  </nav>
</div>
  )
}

export default Adminnavbar
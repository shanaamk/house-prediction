import React from 'react'

const PublicAbout = () => {
  return (
    <div className="container-fluid py-6 px-5">
    <div className="row g-5">
      <div className="col-lg-7">
        <h3 className="display-5 text-uppercase mb-4">
          We are <span className="text-blacktext-uppercase">the Leader</span> in
          Construction Industry
        </h3>
        {/* <h4 className="text-lowercase mb-3 text-body">
          {" "}
          
        </h4> */}
        <p  className="fw-bold mb-2" style={{color:"black"}}>
        By which the customer can build their customized independent homes at
          the customers dream location At the customers requirements and elevation,at the best of its
          quality,at best lowestcost in a truthful and transparent way
          This platform is a cutting-edge solution designed to revolutionize the construction industry. This comprehensive platform aims to streamline and automate various aspects of construction management while providing accurate house price predictions and valuable information on the construction process. This Website can help streamline and automate many of the processes involved in construction management, including project planning, scheduling, and budgeting. It can also provide real-time updates on project progress and communication with clients, subcontractors, and other stakeholders involved in the project.
        </p>
        <div className="row gx-5 py-2">
          <div className="col-sm-6 mb-2"  style={{color:"black"}}>
            <p className="fw-bold mb-2">
              <i className="fa fa-check text-primary me-3" />
              Perfect Planning
            </p>
            <p className="fw-bold mb-2">
              <i className="fa fa-check text-primary me-3" />
              Professional Workers
            </p>
            <p className="fw-bold mb-2">
              <i className="fa fa-check text-primary me-3" />
              First Working Process
            </p>
          </div>
          {/* <div className="col-sm-6 mb-2"  style={{color:"black"}}>
            <p className="fw-bold mb-2">
              <i className="fa fa-check text-primary me-3" />
              Perfect Planning
            </p>
            <p className="fw-bold mb-2">
              <i className="fa fa-check text-primary me-3" />
              Professional Workers
            </p>
            <p className="fw-bold mb-2">
              <i className="fa fa-check text-primary me-3" />
              First Working Process
            </p>
          </div> */}
        </div>
        {/* <p class="mb-4">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos labore</p>
            <img src="img/signature.jpg" alt=""> */}
      </div>
      <div className="col-lg-5 pb-5" style={{ minHeight: 400 }}>
        <div className="position-relative bg-dark-radial h-100 ms-5">
          <img
            className="position-absolute w-100 h-100 mt-5 ms-n5"
            src="img\pic\aboutcontentimg.jpg"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default PublicAbout
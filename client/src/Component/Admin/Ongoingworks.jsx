import React from 'react'

const Ongoingworks = () => {
  return (
    <div className="container mt-5 mb-3">
  <div className="row">
    <div className="col-md-4">
      <div className="card p-3 mb-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className="icon">
              {" "}
              <i className="bx bxl-mailchimp" />{" "}
            </div>
            <div className="ms-2 c-details">
              <h6 className="mb-0">Shana</h6> <span className="text2">1 days ago</span>
            </div>
          </div>
          <div className="badge">
            {" "}
            <span>Design</span>{" "}
          </div>
        </div>
        <div className="mt-5">
        <a href="reports" >
        <h3> View project detailes</h3>
              </a>
          <div className="mt-5">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="mt-3">
              {" "}
              <span className="text1">
               <span className="text2"> 50% of work completed <a href='status'>[view Status]</a></span>
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card p-3 mb-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className="icon">
              {" "}
              <i className="bx bxl-dribbble" />{" "}
            </div>
            <div className="ms-2 c-details">
              <h6 className="mb-0">Sajad</h6> <span className="text2">4 days ago</span>
            </div>
          </div>
          <div className="badge">
            {" "}
            <span>Product</span>{" "}
          </div>
        </div>
        <div className="mt-5">
        <a href="viewproject" >
        <h3> View project detailes</h3>
              </a>
          <div className="mt-5">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="mt-3">
              {" "}
              <span className="text1">
              <span className="text2"> 70% of work completed <a href='status'>[view Status]</a></span>
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card p-3 mb-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className="icon">
              {" "}
              <i className="bx bxl-reddit" />{" "}
            </div>
            <div className="ms-2 c-details">
              <h6 className="mb-0">Fasil</h6> <span className="text2">2 days ago</span>
            </div>
          </div>
          <div className="badge">
            {" "}
            <span>Design</span>{" "}
          </div>
        </div>
        <div className="mt-5">
        <a href="viewproject" className='heading' ><h3> View project detailes</h3>
               
              </a>
          <div className="mt-5">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="mt-3">
              {" "}
              <span className="text1">
              <span className="text2"> 45% of work completed<a href='status'>[view Status]</a></span>
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Ongoingworks
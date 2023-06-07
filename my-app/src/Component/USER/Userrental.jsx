import React from 'react'

const Userrental = () => {
  return (
    <div className="container-fluid bg-light py-6 px-5" id='Rental'>
    <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
      <h2 className="display-5 text-uppercase mb-4">
        <i>
          Find the <span className="text-primary" >Latest</span> Homes for Rent
        </i>
      </h2>
    </div>
    <div className="row gx-5">
      <div className="col-12 text-center">
        <div className="d-inline-block bg-dark-radial text-center pt-4 px-5 mb-5">
          <ul className="list-inline mb-0" id="portfolio-flters">
            <li
              className="btn btn-outline-primary bg-white p-2 active mx-2 mb-4"
              data-filter="*"
            >
              <img
                src="img/portfolio-1.jpg"
                style={{ width: 150, height: 100 }}
              />
              
            </li>
           
            <li
              className="btn btn-outline-primary bg-white p-2 mx-2 mb-4"
              data-filter=".second"
            >
              <img
                src="img/portfolio-3.jpg"
                style={{ width: 150, height: 100 }}
              />
             
             
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row g-5 portfolio-container">
      <div className="col-xl-4 col-lg-6 col-md-6 portfolio-item first">
        <div className="position-relative portfolio-box">
           {/* <img
            className="img-fluid w-100"
            src="img\pic\userimage11.jpg"
            alt=""
          /> */}
          {/*<a className="portfolio-title shadow-sm" href="viewrent">
            <p className="h4 text-uppercase">Project Name</p>
            <span className="text-body">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              123 Street, New York, USA
            </span>
          </a>
          <a
            className="portfolio-btn"
            href="img/portfolio-1.jpg"
            data-lightbox="portfolio"
          >
            <i className="bi bi-plus text-white" />
          </a> */}
           <img
            className="img-fluid w-100"
            src="img\pic\userimage2.jpg"
            alt=""
          />
          <a className="portfolio-title shadow-sm" href="viewrent">
            <p className="h4 text-uppercase">Project Name</p>
            <span className="text-body">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              123 Street, New York, USA
            </span>
          </a>
          <a
            className="portfolio-btn"
            href="img/portfolio-2.jpg"
            data-lightbox="portfolio"
          >
            <i className="bi bi-plus text-white" />
          </a>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6 portfolio-item second">
        <div className="position-relative portfolio-box">
          <img
            className="img-fluid w-100"
            src="img\pic\userimage2.jpg"
            alt=""
          />
          <a className="portfolio-title shadow-sm" href="viewrent">
            <p className="h4 text-uppercase">Project Name</p>
            <span className="text-body">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              123 Street, New York, USA
            </span>
          </a>
          <a
            className="portfolio-btn"
            href="img/portfolio-2.jpg"
            data-lightbox="portfolio"
          >
            <i className="bi bi-plus text-white" />
          </a>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6 portfolio-item first">
        <div className="position-relative portfolio-box">
          <img className="img-fluid w-100" src="img\pic\userimage.jpg" alt="" />
          <a className="portfolio-title shadow-sm" href="viewrent">
            <p className="h4 text-uppercase">Project Name</p>
            <span className="text-body">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              123 Street, New York, USA
            </span>
          </a>
          <a
            className="portfolio-btn"
            href="img/portfolio-3.jpg"
            data-lightbox="portfolio"
          >
            <i className="bi bi-plus text-white" />
          </a>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6 portfolio-item second">
        <div className="position-relative portfolio-box">
          <img
            className="img-fluid w-100"
            src="img\pic\userimage4.jpg"
            alt=""
          />
          <a className="portfolio-title shadow-sm" href="viewrent">
            <p className="h4 text-uppercase">Project Name</p>
            <span className="text-body">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              123 Street, New York, USA
            </span>
          </a>
          <a
            className="portfolio-btn"
            href="img/portfolio-4.jpg"
            data-lightbox="portfolio"
          >
            <i className="bi bi-plus text-white" />
          </a>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6 portfolio-item first">
        <div className="position-relative portfolio-box">
          <img
            className="img-fluid w-100"
            src="img\pic\userimage5.jpg"
            alt=""
          />
          <a className="portfolio-title shadow-sm" href="viewrent">
            <p className="h4 text-uppercase">Project Name</p>
            <span className="text-body">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              123 Street, New York, USA
            </span>
          </a>
          <a
            className="portfolio-btn"
            href="img/portfolio-5.jpg"
            data-lightbox="portfolio"
          >
            <i className="bi bi-plus text-white" />
          </a>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6 portfolio-item second">
        <div className="position-relative portfolio-box">
          <img
            className="img-fluid w-100"
            src="img\pic\userimage6.jpg"
            alt=""
          />
          <a className="portfolio-title shadow-sm" href="viewrent">
            <p className="h4 text-uppercase">Project Name</p>
            <span className="text-body">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              123 Street, New York, USA
            </span>
          </a>
          <a
            className="portfolio-btn"
            href="img/portfolio-6.jpg"
            data-lightbox="portfolio"
          >
            <i className="bi bi-plus text-white" />
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Userrental
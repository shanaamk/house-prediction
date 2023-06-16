import React from 'react'

const UserSlider = () => {
  return (
    <>
    <div className="container-fluid p-0">
    <div
      id="header-carousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="w-100"
            src="img\pic\bg-01.jpg"
            alt="Image"
            height={600}
          />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: 900 }}>
              {/* <i class="fa fa-home fa-4x text-primary mb-4 d-none d-sm-block"></i> */}
              <h2 className="text-uppercase text-white mb-md-4">
                <i>
                  We will be happy
                  <br /> to take care of your work
                </i>
              </h2>
              <a href="userreq" class="btn btn-primary py-md-3 px-md-5 mt-2 ml-3">BUILD</a>
              <a href="userrent" class="btn btn-primary py-md-3 px-md-5 mt-2 ml-3">RENT</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="w-100"
            src="img\pic\bg-01.jpg"
            alt="Image"
            height={600}
          />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: 900 }}>
             
              <h4 className="text-uppercase text-white mb-md-4">
                <i>
                  We will be happy
                  <br /> to take care of your work
                </i>
              </h4>
             
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  {/* Carousel End


   
  {/* Services Start */}
  <div className="container-fluid bg-light py-6 px-5">
    <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
      <h2 className="display-5 text-uppercase mb-4">
        <i>
          Our Constructed <span className="text-primary">projects</span> are
        </i>
      </h2>
    </div>
    <div className="row g-5">
      <div className="col-lg-4 col-md-6">
        <div className="service-item bg-white d-flex flex-column align-items-center text-center">
          <img className="img-fluid" src="img/service-1.jpg" alt="" />
          <div className="service-icon bg-white">
            <i className="fa fa-3x fa-building text-primary" />
          </div>
          <div className="px-4 pb-4">
            <h4 className="text-uppercase mb-3">Home Construction</h4>
          
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="service-item bg-white rounded d-flex flex-column align-items-center text-center">
          <img className="img-fluid" src="img/service-2.jpg" alt="" />
          <div className="service-icon bg-white">
            <i className="fa fa-3x fa-home text-primary" />
          </div>
          <div className="px-4 pb-4">
            <h4 className="text-uppercase mb-3">House Renovation</h4>
            
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="service-item bg-white rounded d-flex flex-column align-items-center text-center">
          <img className="img-fluid" src="img/service-3.jpg" alt="" />
          <div className="service-icon bg-white">
            <i className="fa fa-3x fa-drafting-compass text-primary" />
          </div>
          <div className="px-4 pb-4">
            <h4 className="text-uppercase mb-3">Architecture Design</h4>
            
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="service-item bg-white rounded d-flex flex-column align-items-center text-center">
          <img className="img-fluid" src="img/service-4.jpg" alt="" />
          <div className="service-icon bg-white">
            <i className="fa fa-3x fa-palette text-primary" />
          </div>
          <div className="px-4 pb-4">
            <h4 className="text-uppercase mb-3">Interior Design</h4>
           
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="service-item bg-white rounded d-flex flex-column align-items-center text-center">
          <img className="img-fluid" src="img/service-5.jpg" alt="" />
          <div className="service-icon bg-white">
            <i className="fa fa-3x fa-tools text-primary" />
          </div>
          <div className="px-4 pb-4">
            <h4 className="text-uppercase mb-3">Fixing &amp; Support</h4>
           
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="service-item bg-white rounded d-flex flex-column align-items-center text-center">
          <img className="img-fluid" src="img/service-6.jpg" alt="" />
          <div className="service-icon bg-white">
            <i className="fa fa-3x fa-paint-brush text-primary" />
          </div>
          <div className="px-4 pb-4">
            <h4 className="text-uppercase mb-3">Painting</h4>
           
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Services End */}
 
  {/* Portfolio Start */}
  
  {/* Portfolio End */}
 
 </>
  )
}

export default UserSlider
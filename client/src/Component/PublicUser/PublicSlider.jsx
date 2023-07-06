import React from 'react'

const PublicSlider = () => {
  return (
    <div><div className="container-fluid p-0">
    <div
      id="header-carousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="w-100"
            src="img\pic\imagehoempage.jpg"
            alt="Image"
            height={600}
          />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: 900 }}>
              <i className="fa fa-home fa-4x text-primary mb-4 d-none d-sm-block" />
              <h6 className="text-uppercase text-white mb-md-4">
                Build Your Dream House With Us
              </h6>
              <a
                href="login"
                className="btnsign btn-primary py-md-3 px-md-5 mt-2"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="w-100"
            src="img\pic\websiteimg.jpeg"
            alt="Image"
            height={600}
          />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: 900 }}>
              <i className="fa fa-tools fa-4x text-primary mb-4 d-none d-sm-block" />
              <h6 className="text-uppercase text-white mb-md-4">
                We Are Trusted For Your Project
              </h6>
              <a
                href="login"
                className="btnsign btn-primary py-md-3 px-md-5 mt-2"
              >
                Sign in
              </a>
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
  </div>
  )
}

export default PublicSlider
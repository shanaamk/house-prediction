import React from 'react'

const PublicUserFooter = () => {
  return (
    <div><>
    <div className="footer container-fluid position-relative bg-white bg-light-radial text-black-50 py-4 px-3">
      <div className="row g-5">
        <div className="col-lg-6 pe-lg-5">
          <a href="index.html" className="navbar-brand">
            <h6 className=" text-uppercase text-black">
              <img src="img\pic\logoimge.jpg" width="70px" />
              &nbsp;&nbsp;BuildScape
            </h6>
          </a>
          <p>We construct your dream home</p>
          <p>
            <i className="fa fa-map-marker-alt me-2" />
            123 Street, Kochi, INDIA
          </p>
          <p>
            <i className="fa fa-phone-alt me-2" />
            +012 345 67890
          </p>
          <p>
            <i className="fa fa-envelope me-2" />
            info@example.com
          </p>
          <div className="d-flex justify-content-start mt-4">
            <a
              className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2"
              href="#"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2"
              href="#"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2"
              href="#"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              className="btn btn-lg btn-primary btn-lg-square rounded-0"
              href="#"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
        <div className="col-lg-6 ps-lg-5">
          <div className="row g-5">
            <div className="col-sm-6">
              <h6 className="text-blacktext-uppercase mb-4">Quick Links</h6>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-black-50 mb-2" href="#">
                  <i className="fa fa-angle-right me-2" />
                  Home
                </a>
                <a className="text-black-50 mb-2" href="Publicuserabout">
                  <i className="fa fa-angle-right me-2" />
                  About Us
                </a>
                <a className="text-black-50 mb-2" href="#">
                  <i className="fa fa-angle-right me-2" />
                  Our Services
                </a>
                {/* <a className="text-black-50 mb-2" href="#">
                  <i className="fa fa-angle-right me-2" />
                  Meet The Team
                </a> */}
                {/* <a className="text-black-50" href="#">
                  <i className="fa fa-angle-right me-2" />
                  Contact Us
                </a> */}
              </div>
            </div>
            <div className="col-sm-6">
              <h6 className="text-blacktext-uppercase mb-4">Popular Links</h6>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-black-50 mb-2" href="#">
                  <i className="fa fa-angle-right me-2" />
                  Home
                </a>
                <a className="text-black-50 mb-2" href="#">
                  <i className="fa fa-angle-right me-2" />
                  About{" "}
                </a>
                <a className="text-black-50 mb-2" href="#">
                  <i className="fa fa-angle-right me-2" />
                  Our Services
                </a>
                {/* <a className="text-black-50 mb-2" href="#">
                  <i className="fa fa-angle-right me-2" />
                  Meet The Team
                </a> */}
                {/* <a className="text-black-50" href="#">
                  <i className="fa fa-angle-right me-2" />
                  Contact Us
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid bg-white bg-light-radial text-black border-top border-primary px-0">
      <div className="d-flex flex-column flex-md-row justify-content-between">
        <div className="py-4 px-5 text-center text-md-start">
          <p className="mb-0">
            ©{" "}
            <a className="text-primary" href="#">
              House price prediction and construction
            </a>
            . All Rights Reserved.
          </p>
        </div>
        <div className="py-4 px-5 bg-primary footer-shape position-relative text-center text-md-end">
          <p className="mb-0">
            Designed by{" "}
            <a className="text-dark" href="https://htmlcodex.com">
              HTML Codex
            </a>
          </p>
        </div>
      </div>
    </div>
  </>
  </div>
  )
}

export default PublicUserFooter
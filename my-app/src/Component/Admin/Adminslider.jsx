import React from 'react'

const Adminslider = () => {
  return (
    <>
    {/* <div className="container-fluid p-0">
    <div
      id="header-carousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="w-100"
            src="img\pic\archnew.webp"
            alt="Image"
            height={600}
          />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="w-100"
            src="img\pic\archnew.webp"
            alt="Image"
            height={600}
          />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: 900 }}>
              
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
  </div> */}
  <div className="container">
  <div className="row">
    <div className="col-md-4">
      <div className="dbox dbox--color-2">
        
        <div className="dbox__body">
        <i className="fa fa-envelope" style={{fontSize:36}}></i>
          <span className="dbox__title"></span>
        </div>
        <div className="dbox__action">
          <button className="dbox__action__btn"><a href='Quote'>Request</a></button>
        </div>
      </div>
    </div>
    
   
    <div className="col-md-4">
      <div className="dbox dbox--color-2">
        <div className="dbox__body">
        <i className="fa fa-eye" style={{fontSize:36}}></i>
          <span className="dbox__title"></span>
        </div>
        <div className="dbox__action">
          <button className="dbox__action__btn" ><a href='viewallprojucts'>All Projects</a></button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="dbox dbox--color-2">
        <div className="dbox__body">
        <i className="fa fa-user" style={{fontSize:36}}></i>
          <span className="dbox__title"></span>
        </div>
        <div className="dbox__action">
          <button className="dbox__action__btn"><a href='managepage'>Manage User</a></button>
        </div>
      </div>
    </div>
    
    <div className="col-md-4">
      <div className="dbox dbox--color-2">
        
        <div className="dbox__body">
        <i className="fa fa-hat-cowboy" style={{fontSize:36}}></i>
          <span className="dbox__title"></span>
        </div>
        <div className="dbox__action">
          <button className="dbox__action__btn"><a href='manage'>Manage PM</a></button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="dbox dbox--color-2">
        
        <div className="dbox__body">
        <i className="fa fa-pen" style={{fontSize:36}}></i>
          <span className="dbox__title"></span>
        </div>
        <div className="dbox__action">
          <button className="dbox__action__btn"><a href='arch'>manage Architecture</a></button>
        </div>
      </div>
    </div>
    
    <div className="col-md-4">
      <div className="dbox dbox--color-2">
        
        <div className="dbox__body">
        <i className="fa fa-home" style={{fontSize:36}}></i>
          <span className="dbox__title"></span>
        </div>
        <div className="dbox__action">
          <button className="dbox__action__btn"><a href='rentpage'>manage Rental</a></button>
        </div>
      </div>
    </div>
  </div>
  
</div>

</>
  )
}

export default Adminslider
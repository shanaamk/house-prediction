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
      <div className="dbox dbox--color-1">
        <div className="dbox__icon">
          <i className="glyphicon glyphicon-cloud" />
        </div>
        <div className="dbox__body">
          <span className="dbox__count">Approvel Requestes</span>
          <span className="dbox__title"></span>
        </div>
        <div className="dbox__action">
          <button className="dbox__action__btn"><a href='Quote'>Click</a></button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="dbox dbox--color-2">
        <div className="dbox__icon">
          <i className="glyphicon glyphicon-download" />
        </div>
        <div className="dbox__body">
          <span className="dbox__count">Upcoming Events</span>
          <span className="dbox__title"></span>
        </div>
        <div className="dbox__action">
          <button className="dbox__action__btn"><a href='ongoing'>Click</a></button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="dbox dbox--color-3">
        <div className="dbox__icon">
          <i className="glyphicon glyphicon-heart" />
        </div>
        <div className="dbox__body">
          <span className="dbox__count">Ongoing Events</span>
          <span className="dbox__title"></span>
        </div>
        <div className="dbox__action">
          <button className="dbox__action__btn" ><a href='upcoming'>Click</a></button>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-4">
      <div className="dbox dbox--color-1">
        <div className="dbox__icon">
          <i className="glyphicon glyphicon-cloud" />
        </div>
        <div className="dbox__body">
          <span className="dbox__count">Manage User</span>
          <span className="dbox__title"></span>
        </div>
        <div className="dbox__action">
          <button className="dbox__action__btn"><a href='managepage'>Click</a></button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="dbox dbox--color-2">
        <div className="dbox__icon">
          <i className="glyphicon glyphicon-download" />
        </div>
        <div className="dbox__body">
          <span className="dbox__count">Manage Projectmanager</span>
          <span className="dbox__title"></span>
        </div>
        <div className="dbox__action">
          <button className="dbox__action__btn"><a href='manage'>Click</a></button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="dbox dbox--color-3">
        <div className="dbox__icon">
          <i className="glyphicon glyphicon-heart" />
        </div>
        <div className="dbox__body">
          <span className="dbox__count">Manage architecture</span>
          <span className="dbox__title"></span>
        </div>
        <div className="dbox__action">
          <button className="dbox__action__btn"><a href='arch'>Click</a></button>
        </div>
      </div>
    </div>
  </div>
</div>

</>
  )
}

export default Adminslider
import React from 'react'

const Architectureslider = () => {
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
            src="img\pic\archnew.webp"
            alt="Image"
            height={600}
          />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: 900 }}>
             
            </div>
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
            <div className="p-3" style={{ maxWidth: 900 }}></div>
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

  <div className="container" style={{marginTop:100,marginBottom:100}}>
  <div className="row">
    <div className="col-lg-12">
      <center><h2>Client List</h2></center>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">UserName</th>
            <th scope="col"> Date</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>2-2-2023</td>
            <td>Waiting for Conformation</td>
            <td>View</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>12/05/2022</td>
            <td>750000</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>Thornton</td>
            <td>12/05/2022</td>
            <td>750000</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>12/05/2022</td>
            <td>750000</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>12/05/2022</td>
            <td>750000</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>Thornton</td>
            <td>12/05/2022</td>
            <td>750000</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


</>
  )
}

export default Architectureslider
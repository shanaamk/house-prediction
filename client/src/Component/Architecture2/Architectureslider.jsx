import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Architectureslider = () => {
  const architecture_id = localStorage.getItem('architecture_id');
  const [clients, setClients] = useState([]);
  console.log(clients);
  const [currentPage, setCurrentPage] = useState(1);
  const clientsPerPage = 10;

  useEffect(() => {
    fetch('http://localhost:5000/register/view-client-list-architecture')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setClients(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);
  const totalPages = Math.ceil(clients.length / clientsPerPage);
  
    const handlePageClick = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const indexOfLastClient = currentPage * clientsPerPage;
    const indexOfFirstClient = indexOfLastClient - clientsPerPage;
    const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient);
    
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
            <th scope="col">project name</th>
            <th scope="col"> Location</th>
            <th scope="col"> Date</th>
            <th scope="col">Action</th>
            {/* <th scope="col">Status</th> */}
          </tr>
        </thead>
        <tbody>
        {currentClients
  .filter(client => client.useraprvl_status !== '1' &&  client.architecture_id === architecture_id)
  .map((client, index) => (
    
    <tr key={index}>
            <th scope="row">1</th>
            <td>{client.name}</td>
             <td>{client.project_name}</td>
            <td>{client.location}</td>
            <td>{client.register_date}</td>
            {/* <td>{client.useraprvl_status}</td> */}
           
            
            <button className='btn btn-primary'><Link to={`/view/${client._id}/${client.user_id}`}>View</Link></button>
          </tr>
  ))}
        </tbody>
      </table>
    </div>
  </div>
</div>


</>
  )
}

export default Architectureslider
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Adminrentslider = () => {
  
  const navigate = useNavigate()
  const[input,setInput]=useState({})



  const inputChange= (event)=>{
  const{name,value}=event.target 
  setInput({...input,[name]:value})
  console.log(input);
  }
  
  const submit = (e)=>{
    e.preventDefault()
   
    axios.post('http://localhost:5000/register/rent',input).then((response)=>{
      navigate('')
    })
   

  }
  const [rents, setRents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rentsPerPage = 10;

  useEffect(() => {
    fetch('http://localhost:5000/register/view-rent')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setRents(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);
   const totalPages = Math.ceil(rents.length / rentsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastRent = currentPage * rentsPerPage;
  const indexOfFirstRent = indexOfLastRent - rentsPerPage;
  const currentRents = rents.slice(indexOfFirstRent, indexOfLastRent);
  

  return (
<>
<div className="container" />
<div style={{ display: "flex", width: "100%",color:'black',marginTop:20,marginBottom:20}}>
   
  <form className="formrequirement">
  <h3><center>HOUSE RENT </center></h3><br></br>
    <div style={{ width: "100%" ,}}>
      <p>Property Name</p>
      <input name='Property_name' onChange={inputChange} className="inputfield" autofocus="" />
    </div>
    <div style={{ width: "100%" }}>
      <p>Address</p>
      <input name='Address' onChange={inputChange} className="inputfield" />
    </div>
    <div style={{ width: "100%" }}>
      <p>Location</p>
      <input name='Location' onChange={inputChange} className="inputfield" />
    </div>
    <div style={{ width: "100%" }}>
      <p>Price</p>
      <input name='Price' onChange={inputChange} className="inputfield" />
    </div>
    <div style={{ width: "100%" }}>
      <p>Area</p>
      <input name='Area' onChange={inputChange} className="inputfield" />               
    </div>
    <div style={{ width: "100%" }}>
      <p>Bedrooms</p>
      <input name='Bedrooms' onChange={inputChange} className="inputfield" />
    </div>
    <div style={{ width: "100%" }}>
      <p>Bathrooms</p>
      <input name='Bathrooms' onChange={inputChange} className="inputfield" />
    </div>
    <div style={{ width: "100%" }}>
      <p>Landmark</p>
      <input name='Landmark' onChange={inputChange} className="inputfield" />
    </div>
    <div  style={{ width: "100%" }}>
        <label htmlFor="full-name">Appload rentimage</label>   
  <div className="input-group js-input-file">
    <input className="input-file" type="file" name="file_cv" id="file" />
    <label className="label--file" htmlFor="file">
      Choose file
    </label>
    <span className="input-file__info">No file chosen</span>
  </div>
  {/* <div className="label--desc">
    Upload your CV/Resume or any other relevant file. Max file size 50 MB
  </div> */}
</div>

    
<button type="button" className="btn btn-dark" onClick={submit}>
continue
</button>
<button type="button" className="btn btn-dark" style={{marginLeft:20}} onClick={submit}>
delete
</button>
  </form>
</div>

    

  
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <h4>Rent table</h4>
      <div className="table-responsive">
        <table id="mytable" className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>
               sl.no
              </th>
              <th>Property Name</th>
              <th>Address</th>
              <th>Price</th>
              <th>Location</th>
              <th>Landmark</th>
              <th>Rent Image</th>
              <th>Bedrooms</th>
              <th>Bathrooms</th>
              <th>Area</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRents.map((rent, index) => (
              <tr key={index}>
                <td>{indexOfFirstRent + index + 1}</td>
                <td>{rent.propertyname}</td>
                <td>{rent.address}</td>
                <td>{rent.price}</td>
                <td>{rent.location}</td>
                <td>{rent.landmark}</td>
                <td>{rent.rentimage}</td>
                <td>{rent.bedrooms}</td>
                <td>{rent.bathrooms}</td>
                <td>{rent.area}</td>
                <td className="text-center">
                  <div className="btn-group">
                    <button className="btn btn-success btn-sm">
                      <i className="bi bi-check-circle-fill" /> Edit
                    </button>
                    <button className="btn btn-danger btn-sm" >
                      <i className="bi bi-x-circle-fill" /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    

         
          <div className="row justify-content-center">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <a
                  className="page-link"
                  href="#"
                  aria-label="Previous"
                  onClick={() => handlePageClick(currentPage - 1)}
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index}
                  className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => handlePageClick(index + 1)}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <a
                  className="page-link"
                  href="#"
                  aria-label="Next"
                  onClick={() => handlePageClick(currentPage + 1)}
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
      </div>
     </div>
  </div>
  </div>
  </div>
</>

  )
}

export default Adminrentslider
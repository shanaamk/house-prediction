import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar';
import PublicUserFooter from '../Footer/PublicUserFooter';
import { Link } from 'react-router-dom';


const Projectrequest = () => {

    const [requests, setRequests] = useState([]);
    console.log(requests);
  const [currentPage, setCurrentPage] = useState(1);
  const requestsPerPage = 10;

    useEffect(() => {
      fetch('http://localhost:5000/register/view-project-request')
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setRequests(data.data);
          }
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
        });
    }, []);
     const totalPages = Math.ceil(requests.length / requestsPerPage);
  
    const handlePageClick = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const indexOfLastRequest = currentPage * requestsPerPage;
    const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
    const currentRequests = requests.slice(indexOfFirstRequest, indexOfLastRequest);
    
  

  return (
    <>
    <Adminnavbar/>
    <div className="container" style={{marginTop:100,marginBottom:100}}>
    <div className="row">
      <div className="col-lg-12">
        <center><h2> project Requestes</h2></center>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">project_name</th>
              <th scope="col">Location</th>
              <th scope="col">prjctstrt_drtn</th>
              <th scope="col">expctd_budget</th>
              
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>  
          {currentRequests
  .filter(request => request.approvel_status === '0')
  .map((request, index) => (
    
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{request.name}</td>
      <td>{request.project_name}</td>
      <td>{request.location}</td>
      <td>{request.prjctstrt_drtn}</td>
      <td>{request.expctd_budget}</td>
      
      <td className="text-center">
        <div className="btn-group">
          <button className="btn btn-success btn-sm">
            <Link to={`/admcontrol/${request._id}/${request.user_id}`}>control</Link>
            
          </button>
        </div>
      </td>
    </tr>
  ))}

          {/* {currentRequests.map((request, index) => (
              <tr key={index}>
                <td>{indexOfFirstRequest + index + 1}</td>
                <td>{request.project_name}</td>
                <td>{request.location}</td>
                <td>{request.prjctstrt_drtn}</td>
                <td>{request.expctd_budget}</td>
                <td>{request.confirmation}</td>
               
                <td className="text-center">
                  <div className="btn-group">
                    <button className="btn btn-success btn-sm">
                     control
                    </button>
                    <button className="btn btn-danger btn-sm" >
                      
                    </button>
                  </div>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
        <div className="row justify-content-center">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                      className="page-link"
                      aria-label="Previous"
                      onClick={() => handlePageClick(currentPage - 1)}
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </button>
                  </li>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li
                      key={index}
                      className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageClick(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                  <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                      className="page-link"
                      aria-label="Next"
                      onClick={() => handlePageClick(currentPage + 1)}
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
      </div>
    </div>
  </div>


    <PublicUserFooter/>
    </>
  )
}

export default Projectrequest
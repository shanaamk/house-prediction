import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Managearch = () => {
  const [architectures, setArchitectures] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const architecturesPerPage = 10;

  useEffect(() => {
    fetch('http://localhost:5000/register/view-architectures')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setArchitectures(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching architectures:', error);
      });
  }, []);
  const totalPages = Math.ceil(architectures.length / architecturesPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastArchitecture = currentPage * architecturesPerPage;
  const indexOfFirstArchitecture = indexOfLastArchitecture - architecturesPerPage;
  const currentArchitectures = architectures.slice(indexOfFirstArchitecture, indexOfLastArchitecture);

  const approve = (id) => {
    axios
      .get(`http://localhost:5000/register/approve/${id}`)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reject = (id) => {
    axios
      .get(`http://localhost:5000/register/reject/${id}`)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container" style={{marginLeft:350}}>
    <h3>Manage architecture</h3>
 <div className="row col-md-8 col-md-offset-2 custyle">
   <table className="table table-striped custab">
     <thead>
       <tr>
         <th>Sl no</th>
         <th>Name</th>
         <th>Email</th>
         <th>PhoneNo</th>
         <th className="text-center">Action</th>
       </tr>
     </thead>
     <tbody>
     {currentArchitectures.length > 0 ? (
     currentArchitectures.map((architecture, index) => (
              <tr key={index}>
                <td>{indexOfFirstArchitecture + index + 1}</td>
                <td>{architecture.name}</td>              
                <td>{architecture.email}</td>
                <td>{architecture.phoneno}</td>
                <td className="text-center">
                {architecture.status === '0' ? (
                   <>
                  <a className="btn btn-success btn-xs" href="#" onClick={() => {
                    approve(architecture.login_id);
                  }}>
                    <span className="glyphicon glyphicon-edit" /> Approve
                  </a>{" "}
                  <a href="#" className="btn btn-danger btn-xs"  onClick={() => {
                                reject(architecture.login_id);
                              }}>
                    <span className="glyphicon glyphicon-remove" /> Delete
                  </a>
                  </>
                   ) : (
                    <>
                    <button className="btn btn-success edit-button mr-2 flex-fill">
                              Approved
                            </button>
                          </>
                        )}
                </td>
              </tr>
              ))
              ):(
                <tr>
                <td colSpan="5">No users found</td>
              </tr>
          )}
      
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

  )
}

export default Managearch
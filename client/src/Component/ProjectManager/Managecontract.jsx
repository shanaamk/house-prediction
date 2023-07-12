import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Managecontract = () => {
  const [contracters, setContracters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const contractersPerPage = 10;


  useEffect(() => {
    fetch('http://localhost:5000/register/view-contract')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setContracters(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);
  const totalPages = Math.ceil(contracters.length / contractersPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastContracter = currentPage * contractersPerPage;
  const indexOfFirstContracter = indexOfLastContracter - contractersPerPage;
  const currentContracters = contracters.slice(indexOfFirstContracter, indexOfLastContracter);

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
    <h3>Manage Contract</h3>
 <div className="row col-md-8 col-md-offset-2 custyle">
   <table className="table table-striped custab">
     <thead>
       <tr>
         <th>Sl no</th>
         <th>Name</th>
         <th>Email</th>
         <th>PhoneNo</th>
         <th>WorkType</th>
         <th>cv</th>
        
         <th className="text-center">Action</th>
       </tr>
     </thead>
     <tbody>
     {currentContracters.length > 0 ? (
     currentContracters.map((contracter, index) => (
              <tr key={index}>
                <td>{indexOfFirstContracter + index + 1}</td>
                <td>{contracter.name}</td>              
                <td>{contracter.email}</td>
                <td>{contracter.phoneno}</td>
                <td>{contracter.worktype}</td>
                <td>{contracter.cv}</td>
                {/* cv */}
                
         <td className="text-center">
         {contracter.status === '0' ? (
                   <>
            <div className="btn-group">
                        <button className="btn btn-success btn-sm" onClick={() => {
                    approve(contracter.login_id);
                  }}>
                          <i className="bi bi-check-circle-fill" /> Approve
                        </button>
                        <button className="btn btn-danger btn-sm"  onClick={() => {
                                reject(contracter.login_id);
                              }}>
                          <i className="bi bi-x-circle-fill" /> Delete
                        </button>
                      </div>
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

export default Managecontract
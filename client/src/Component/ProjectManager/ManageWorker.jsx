import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ProjectManagernavbar from './ProjectManagernavbar';
import PublicUserFooter from '../Footer/PublicUserFooter';

const ManageWorker = () => {
  const [workers, setWorkers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const workersPerPage = 10;

  useEffect(() => {
    fetch('http://localhost:5000/register/view-workers')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setWorkers(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching workers:', error);
      });
  }, []);

  const totalPages = Math.ceil(workers.length / workersPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastWorker = currentPage * workersPerPage;
  const indexOfFirstWorker = indexOfLastWorker - workersPerPage;
  const currentWorkers = workers.slice(indexOfFirstWorker, indexOfLastWorker);

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
    <>
      <ProjectManagernavbar />
      <div className="container" style={{ marginTop: 100, marginBottom: 100 }}>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-center mb-4">Workers Management</h2>
            <table className="table table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone No</th>
                  <th scope="col">Work Type</th>
                  <th scope="col">Work Experience</th>
                  <th scope="col" className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
              {currentWorkers.length > 0 ? (
                currentWorkers.map((worker, index) => (
                  <tr key={index}>
                    <th scope="row">{indexOfFirstWorker + index + 1}</th>
                    <td>{worker.name}</td>
                    <td>{worker.email}</td>
                    <td>{worker.phoneno}</td>
                    <td>{worker.worktype}</td>
                    <td>{worker.workexperience}</td>
                    <td className="text-center">
                    {worker.status === '0' ? (
                   <>
                      <div className="btn-group">
                        <button className="btn btn-success btn-sm" onClick={() => {
                    approve(worker.login_id);
                  }}>
                          <i className="bi bi-check-circle-fill" /> Approve
                        </button>
                        <button className="btn btn-danger btn-sm"  onClick={() => {
                                reject(worker.login_id);
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
      <PublicUserFooter />
    </>
  );
};

export default ManageWorker;

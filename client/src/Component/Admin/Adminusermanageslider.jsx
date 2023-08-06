import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Adminusermanageslider = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    fetch('http://localhost:5000/register/view-users')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setUsers(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);


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
    <div className="container" style={{ marginLeft: 350 }}>
      <h2>Manage Users</h2>
      <div className="row col-md-8 col-md-offset-2 custyle">
        <table className="table table-striped custab">
          <thead>
            <tr>
              <th>Sl no</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Email</th>
              <th>PhoneNo</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
          {currentUsers.length > 0 ? (
            currentUsers.map((user, index) => (
              <tr key={index}>
                <td>{indexOfFirstUser + index + 1}</td>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>{user.phoneno}</td>
                <td className="text-center">
                {user.status === '0' ? (
                   <>
                  <a className="btn btn-success btn-xs" href="#"  onClick={() => {
                    approve(user.login_id);
                  }}>
                    <span className="glyphicon glyphicon-edit" /> Approve
                  </a>{" "}
                  <a href="#" className="btn btn-danger btn-xs"  onClick={() => {
                                reject(user.login_id);
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
  );
};

export default Adminusermanageslider;

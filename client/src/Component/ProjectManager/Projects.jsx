import React, { useEffect, useState } from 'react'
import ProjectManagernavbar from './ProjectManagernavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'
import { Link } from 'react-router-dom';
const Projects = () => {
  
  const projectmanager_id = localStorage.getItem('projectmanager_id');
 
  const [managers, setManagers] = useState([]);
  console.log(managers);
  const [currentPage, setCurrentPage] = useState(1);
  const managersPerPage = 10;

    useEffect(() => {
      fetch('http://localhost:5000/register/view-allprjcts-toprjmnger')
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setManagers(data.data);
          }
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
        });
    }, []);
     const totalPages = Math.ceil(managers.length / managersPerPage);
  
    const handlePageClick = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const indexOfLastManager = currentPage * managersPerPage;
    const indexOfFirstManager = indexOfLastManager - managersPerPage;
    const currentManagers = managers.slice(indexOfFirstManager, indexOfLastManager);
    
  
  return (
   <>
   <ProjectManagernavbar/>
   <div className="container" style={{marginTop:100,marginBottom:100}}>
    <div className="row">
      <div className="col-lg-12">
        <center><h2> All projectes</h2></center>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Mob No</th>
              <th scope="col">location</th>
              <th scope="col">projectname</th>
              <th scope="col">register_date</th>
              <th scope="col">Time_Period</th>
              <th scope="col">cost</th>
              {/* <th scope="col">Status</th> */}
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
          {currentManagers.filter(manager => manager.projectmanager_id === projectmanager_id).map((manager, index) => (
                  <tr key={index}>
                    <th scope="row">{indexOfFirstManager + index + 1}</th>
                    <td>{manager.name}</td>
                    <td>{manager.address}</td>
                    <td>{manager.phoneno}</td>
                    <td>{manager.project_name}</td>
                    <td>{manager.location}</td>
                    <td>{manager.register_date}</td>
                    <td>{manager.time_Period}</td>
                    <td>{manager.cost}</td>
                    <td className="text-center">
                  <div className="btn-group">
                    <button className="btn btn-success btn-sm">
                     
                    <Link to={`/pmcontrol/${manager._id}/${manager.user_id}`}>control</Link>
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



   <PublicUserFooter/>
   </>
  )
}
// pmcontrol
export default Projects
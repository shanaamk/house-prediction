import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'
import { Link } from 'react-router-dom';

const Viewallprojects = () => {
  const [projects, setProjects] = useState([]);
  console.log(projects);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;

    useEffect(() => {
      fetch('http://localhost:5000/register/view-choose-archtctr')
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setProjects(data.data);
          }
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
        });
    }, []);
     const totalPages = Math.ceil(projects.length / projectsPerPage);
  
    const handlePageClick = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
    
  

  return (
    <>
    <Adminnavbar/>
    <div className="container" style={{marginTop:100,marginBottom:100}}>
    <div className="row">
      <div className="col-lg-12">
        <center><h2> All projectes</h2></center>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">project_name</th>
              <th scope="col">Address</th>
              <th scope="col">Mob No</th>
              <th scope="col">Arihitecture</th>
              <th scope="col">Project Manager</th>
              <th scope="col">Date</th>
              <th scope="col">project_status</th>

              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
         
                {currentProjects.filter(request => request.approvel_status === '2').map((project, index) => (
                  <tr key={index}>
                    <th scope="row">{indexOfFirstProject + index + 1}</th>
                    <td>{project.name}</td>
                    <td>{project.project_name}</td>
                    <td>{project.address}</td>
                    <td>{project.phoneno}</td>
                    <td>{project.architecturename}</td>
                    <td>{project.projectmanagername}</td>
                    <td>{project.register_date}</td>
                    <td>{project.project_status}</td>
                    <td className="text-center">
                  <div className="btn-group">
                    <button className="btn btn-success btn-sm">
                    <Link to={`/allprjctcontrol/${project._id}/${project.user_id}`}>control</Link>
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

export default Viewallprojects
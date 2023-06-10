import React from 'react'
import ProjectManagernavbar from './ProjectManagernavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Projects = () => {
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
              <th scope="col">Arihitecture</th>
              <th scope="col">Date</th>
              <th scope="col">Deadline</th>
              <th scope="col">Estimate</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
          <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Jacob</td>
             
              
              <td>Thornton</td>
              <td>Thornton</td>
              <td>12/05/2022</td>
              <td>12/05/2022</td>
              <td>send plan</td>
              <td>
    <button class='btn btn-primary sm'>
    <a href='pmcontrol'>control</a>
    </button>
    
  </td>
            </tr>

            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Jacob</td>
             
              
              <td>Thornton</td>
              <td>Thornton</td>
              <td>12/05/2022</td>
              <td>12/05/2022</td>
              <td>send requirement</td>
              <td>
              <button class='btn btn-primary sm'>
              <a href='pmcontrol'>control</a>
    </button>
    
  </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Thornton</td>
              <td>Jacob</td>
             
              
              <td>Thornton</td>
              <td>12/05/2022</td>
              <td>12/05/2022</td>
              <td>send requirement</td>
              <td>
              <button class='btn btn-primary sm'>
              <a href='pmcontrol'>control</a>
    </button>
    
  </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Jacob</td>
             
              
              <td>Thornton</td>
              <td>Thornton</td>
              <td>12/05/2022</td>
              <td>12/05/2022</td>
              <td>send requirement</td>
              <td>
              <button class='btn btn-primary sm'>
              <a href='pmcontrol'>control</a>
    </button>
    
  </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Thornton</td>
              <td>Jacob</td>
             
              
              <td>Thornton</td>
              <td>12/05/2022</td>
              <td>12/05/2022</td>
              <td>send requirement</td>
              <td>
              <button class='btn btn-primary sm'>
              <a href='pmcontrol'>control</a>
    </button>
    
  </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Thornton</td>
              <td>Jacob</td>
             
         
              <td>Thornton</td>
              <td>12/05/2022</td>
              <td>12/05/2022</td>
              <td>send requirement</td>
              <td>
              <button class='btn btn-primary sm'>
   <a href='pmcontrol'>control</a>
    </button>
   
  </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>



   <PublicUserFooter/>
   </>
  )
}

export default Projects
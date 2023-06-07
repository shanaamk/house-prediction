import React from 'react'
import ProjectManagernavbar from './ProjectManagernavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'

const ManageWorker = () => {
  return (
    <>
    <ProjectManagernavbar/>
    <div className="container" style={{marginTop:100,marginBottom:100}}>
    <div className="row">
      <div className="col-lg-12">
        <center><h2>Workers Manage</h2></center>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Mob No</th>
              <th scope="col">Email Id</th>
              <th scope="col">Work Category</th>
              <th scope="col">Username</th>

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
              <td>12/05/2022</td>
              <td>750000</td>
              <td>
    <button class="edit-button">
      <i class="fas fa-edit"></i> Edit
    </button>
    <button class="delete-button">
      <i class="fas fa-trash"></i> Delete
    </button>
  </td>
            </tr>

            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Jacob</td>
             
              
              <td>Thornton</td>
              <td>12/05/2022</td>
              <td>750000</td>
              <td>
    <button class="edit-button">
      <i class="fas fa-edit"></i> Edit
    </button>
    <button class="delete-button">
      <i class="fas fa-trash"></i> Delete
    </button>
  </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Jacob</td>
             
              
              <td>Thornton</td>
              <td>12/05/2022</td>
              <td>750000</td>
              <td>
    <button class="edit-button">
      <i class="fas fa-edit"></i> Edit
    </button>
    <button class="delete-button">
      <i class="fas fa-trash"></i> Delete
    </button>
  </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Jacob</td>
             
              
              <td>Thornton</td>
              <td>12/05/2022</td>
              <td>750000</td>
              <td>
    <button class="edit-button">
      <i class="fas fa-edit"></i> Edit
    </button>
    <button class="delete-button">
      <i class="fas fa-trash"></i> Delete
    </button>
  </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Jacob</td>
             
              
              <td>Thornton</td>
              <td>12/05/2022</td>
              <td>750000</td>
              <td>
    <button class="edit-button">
      <i class="fas fa-edit"></i> Edit
    </button>
    <button class="delete-button">
      <i class="fas fa-trash"></i> Delete
    </button>
  </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Jacob</td>
             
              
              <td>Thornton</td>
              <td>12/05/2022</td>
              <td>750000</td>
              <td>
    <button class="edit-button">
      <i class="fas fa-edit"></i> Edit
    </button>
    <button class="delete-button">
      <i class="fas fa-trash"></i> Delete
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

export default ManageWorker
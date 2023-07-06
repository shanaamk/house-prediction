import React from 'react'
import ProjectManagernavbar from './ProjectManagernavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'

const ManageWorkcategory = () => {
  return (
    <>
    <ProjectManagernavbar/>
    <div className="container" style={{marginTop:100,marginBottom:100}}>
    <div className="row">
      <div className="col-lg-12">
        <center><h2>Work Category Manage</h2></center>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Work Category ID</th>
              <th scope="col">Work Category Name</th>
              
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
          <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
             
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

export default ManageWorkcategory
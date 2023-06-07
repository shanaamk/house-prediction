import React from 'react'

const ProjectmanagerViewProject = () => {
  return (
    <div className="container" style={{marginTop:100,marginBottom:100}}>
    <div className="row">
      <div className="col-lg-12">
        <center><h2>Project Detailes</h2></center>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">ProjectName</th>
              <th scope="col">Starting Date</th>
              <th scope="col">Duration</th>
              <th scope="col">Budget</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
          <tr>
  <th scope="row">1</th>
  <td>Mark</td>
  <td>Otto</td>
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
              <th scope="row">3</th>
              <td>Larry the Bird</td>
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
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
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
              <th scope="row">3</th>
              <td>Larry the Bird</td>
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
  
  
  )
}

export default ProjectmanagerViewProject
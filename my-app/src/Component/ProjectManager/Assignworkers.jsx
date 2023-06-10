import React from 'react'
import ProjectManagernavbar from './ProjectManagernavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Assignworkers = () => {
  return (
    <>
    <ProjectManagernavbar/>
    {/* <div className="container" style={{marginTop:100,marginBottom:100}}>
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
    </div> */}
  {/* </div> */}
  <div className='container mb-5 mt-5'>
  <div className='row'>
    <div className='col-md-4'>
        
  <form className="">
    <select name="cars" className="custom-select">
      <option selected="">Select work category</option>
      <option value="Painter">painter</option>
      <option value="Plumber">plumber</option>
      <option value="Flooring">flooring</option>
    </select>
    <br />
    <br />
    <select name="cars" className="custom-select">
      <option selected="">select worker</option>
      <option value="volvo">rajeesh</option>
      <option value="fiat">sumesh</option>
      <option value="audi">ramesh</option>
    </select>
    <br />
    <br />
    <button type="button" className="btn btn-light mr-5">
      Add
    </button>
    <button type="button" className="btn btn-light">
      Delet
    </button>
  </form>
    </div>
    <div className='col-md-4'>
        
  <form className="">
    <select name="cars" className="custom-select">
      <option selected="">Select work category</option>
      <option value="Painter">painter</option>
      <option value="Plumber">plumber</option>
      <option value="Flooring">flooring</option>
    </select>
    <br />
    <br />
    <button type="button" className="btn btn-light">
     View Team
    </button>
  </form>


    </div>



        <div className='col-md-4 justify-content-center'>
        <table classssName="table text-center" style={{color:'black',fontSize:21}}>
        <thead className="table-dark"> 
     
    <tr>
        <td>
            #
        </td>
        <td>
            Painting
        </td>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>
           1
        </td>
        <td>
            shamli
        </td>
    </tr>
    <tr>
        <td>
           2
        </td>
        <td>
           sudheepth
        </td>
    </tr>
    <tr>
        <td>
          3
        </td>
        <td>
          vishnu
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

export default Assignworkers
import React from 'react'

const ProjectReport = () => {
  return (
    <>
  <div className="container search-table">
    <div className="search-list">
      <h3>Project Report</h3>
      <table className="table" id="myTable">
        <thead>
          <tr>
            <th>title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name </td>
            <td>Fasil tk</td>
          </tr>
          <tr>
            <td>Address </td>
            <td>valappil house,parambilpeedika(p.o),malappurem</td>
          </tr>
          <tr>
            <td>Worker Order Date</td>
            <td>2-09-2024</td>
          </tr>
          <tr>
            <td>Date of Measurement</td>
            <td>3-09-2023</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>
              the work will be started on the expected dte untill the eorlers
              are assigned.Excavation in all type of soil including dense
              soil/desentegraated wethered/soft rok!
            </td>
          </tr>
          <tr>
            <td>Size in Sqaure feet</td>
            <td>2500sq</td>
          </tr>
          <tr>
            <td>Bedrooms</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Bathroom</td>
            <td>2</td>
          </tr>
          <tr>
            <td>floor</td>
            <td>2</td>
          </tr>
          <tr>
            <td>balcony</td>
            <td>2 opened</td>
          </tr>
          <tr>
            <td>Total amouunt of contract</td>
            <td>1600000</td>
          </tr>
          <tr>
            <td>Total number of days</td>
            <td>680</td>
          </tr>
          <tr>
            <td>Work Status</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  {/* 
<div class="container">
    <div class="row">
  <div class="col-md-12">
  <div style="display:flex;width:100%;">
      <form class="formrequirement">
          <select name="cars" class="custom-select">
              <option selected>Select work category</option>
              <option value="Painter">painter</option>
              <option value="Plumber">plumber</option>
              <option value="Flooring">flooring</option>
            </select>
            <br>
            <br>
            <select name="cars" class="custom-select">
              <option selected>select worker</option>
              <option value="volvo">rajeesh</option>
              <option value="fiat">sumesh</option>
              <option value="audi">ramesh</option>
            </select>
            <br>
            <br>
   
   
          <button type="button" class="btn btn-light">Reset</button>
  
         <button type="button" class="btn btn-light">Continue</button>
         
      
  </div>
  </div>
  </div>
    </div> */}
  <div className="container" style={{ marginTop: 100 }}>
    <div className="row">
      <div className="col-lg-12">
        <table className="table">
          <thead className="table" style={{ backgroundColor: "#c1c1c1" }}>
            <tr>
              <th scope="col">Fountation</th>
              <th scope="col">Rcc works</th>
              <th scope="col">Plastering</th>
              <th scope="col">Wiring</th>
              <th scope="col">plumbing</th>
              <th scope="col">Flooring</th>
              <th scope="col">Furnishing</th>
              <th scope="col">Cabinet\caboard</th>
              <th scope="col">painting\polishing</th>
              <th scope="col">Deigning</th>
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
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>12/05/2022</td>
              <td>750000</td>
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
              <td>12/05/2022</td>
              <td>750000</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>12/05/2022</td>
              <td>750000</td>
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
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>12/05/2022</td>
              <td>750000</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>12/05/2022</td>
              <td>750000</td>
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
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>12/05/2022</td>
              <td>750000</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>12/05/2022</td>
              <td>750000</td>
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
              <td>12/05/2022</td>
              <td>750000</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>12/05/2022</td>
              <td>750000</td>
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
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>12/05/2022</td>
              <td>750000</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>12/05/2022</td>
              <td>750000</td>
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
      <button type="button" className="btn btn-light">
        Continue
      </button>
    </div>
  </div>
  <div>
    <button className="reporttablink" onclick="openPage('Home', this, 'red')">
      Home
    </button>
    <button
      className="reporttablink"
      onclick="openPage('News', this, 'green')"
      id="defaultOpen"
    >
      News
    </button>
    <button className="reporttablink" onclick="openPage('Contact', this, 'blue')">
      Contact
    </button>
    <div id="Home" className="reporttabcontent">
      <form className="formrequirement">
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
        <button type="button" className="btn btn-light">
          Add
        </button>
      </form>
    </div>
    <div id="News" className="reporttabcontent">
      <form className="formrequirement">
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
        <button type="button" className="btn btn-light">
          Delete
        </button>
      </form>
    </div>
    <div id="Contact" className="reporttabcontent">
      <form className="formrequirement">
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
        <button type="button" className="btn btn-light">
          Edit
        </button>
      </form>
    </div>
  </div>
</>

  )
}

export default ProjectReport
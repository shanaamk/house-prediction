import React, {  useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import ProjectManagernavbar from './ProjectManagernavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Assignworkers = () => {

  const navigate = useNavigate()
  const [category, setCategory] = useState([]);
  const[input,setInput]=useState({})



  const inputChange= (event)=>{
  const{name,value}=event.target 
  setInput({...input,[name]:value})
  console.log(input);
  }
  
  const submit = (e)=>{
    e.preventDefault()
    console.log("data", input);
  }
  useEffect(() => {
    axios.get('http://localhost:5000/register/view-workers')
      .then((response) => {
        setCategory(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);
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
  <div className="form-wrapper">
          <label htmlFor="">work_category</label>
          <div className="form-holder select">
            <select name="work_category" className="form-control" value={input.work_category || ""} onChange={inputChange}>
            <option value="Fountation">Fountation</option>
      <option value="Rcc works">Rcc works</option>
      <option value="Plastering">Plastering</option>
      <option value="Wiring">Wiring</option>
      <option value="plumbing">plumbing</option>     
      <option value="flooring">flooring</option>
      <option value="Furnishing">Furnishing</option>
      <option value="Cabinet\caboard">Cabinet\caboard</option>
      <option value="painting\polishing">painting\polishing</option>
      <option value="Designing">Designing</option>
            </select>
          </div>
        </div>
    
    
    <br />
    <br />
    <div className="form-wrapper">
          <label htmlFor="">workers</label>
          <div className="form-holder select">
            <select name="workers" className="form-control" value={input.workers || ""} onChange={inputChange}>
            <option value="">Select worker</option>
                {category.map((data)=>(
                  <option value={data._id}>{data.name}</option>
                ))}
            </select>
          </div>
        </div>
    <br />
    <br />
    <button type="button" className="btn btn-light mr-5" onClick={submit}>
      Add
    </button>
    <button type="button" className="btn btn-light" onClick={submit}>
      Delete
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
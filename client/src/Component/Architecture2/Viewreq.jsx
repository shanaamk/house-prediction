import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Viewreq = () => {

  const navigate = useNavigate()
  const[input,setInput]=useState({})



  const inputChange= (event)=>{
  const{name,value}=event.target 
  setInput({...input,[name]:value})
  console.log(input);
  }
  
  const submit = (e)=>{
    e.preventDefault()
   
    axios.post('http://localhost:5000/register/plan',input).then((response)=>{
      navigate('')
    })
   

  }
  
  return (
    <>
    <div className="container" style={{textAlign:'center'}}>
    <div className="row">
    <div className="col-md-6" >
      <table className="table table-striped custab" style={{color:'black'}}>
        <thead>
          <tr>
          
            <th>Title</th>
            <th>Values</th>
          </tr>
        </thead>
        <tbody>
          <tr>
           
            <td style={{color:'black'}}>size(sq.ft)</td>
            <td>2500</td>
          </tr>
          <tr>
           
            <td>Balcony</td>
            <td>4</td>
          </tr>
          <tr>
            
            <td>Total Floors</td>
            <td>2</td>
          </tr>
          <tr>
           
            <td>Bedrooms</td>
            <td>5</td>
          </tr>
          <tr>
            
            <td>Bathrooms</td>
            <td>5</td>
          </tr>
          <tr>
            
            <td>kitchen</td>
            <td>1</td>
          </tr>
         
        </tbody>
      </table>
    </div>

    <div className=" col-md-6" style={{marginTop:'20px',marginBottom:'20px'}} >
    <div className="" >
    <form className="regcontform-detail" action="#" method="post" style={{marginTop:'20px',marginBottom:'20px'}}>
      <h2>Upload Plan</h2>
      <div className="regcontform1-row">
        <label htmlFor="Cost" className='costlabel'> Cost</label>
        <input
          type="text"
          name='Cost' value={input.Cost || ""} onChange={inputChange}
          className="regcontinput-text"
          placeholder=" Cost"
          required=""
        />

        </div>
        <div className="regcontform1-row">
        <label htmlFor="Time_Period"  className='costlabel'>Time_Period</label>
        <input
          type="text"
          name='Time_Period' value={input.Time_Period || ""} onChange={inputChange}
          className="regcontinput-text"
          placeholder=" Time Period"
          required=""
        />

        </div>
        <div className="regcontform1-row" >
        <label htmlFor="full-name"  className='costlabel'>Upload Plan</label>   
  <div className="input-group js-input-file" style={{color:'black'}}>
    <input className="input-file" type="file" name="file_cv" id="file" />
    
  </div>
  {/* <div className="label--desc">
    Upload your CV/Resume or any other relevant file. Max file size 50 MB
  </div> */}
</div>

<div className="regcontform-row-last">
  <input
    type="submit"
    name="register"
    onClick={submit}
    className="register2"
  />
</div>

    </form>
  </div>
</div>
</div>
    </div>



  <div className="container">
  <div className="row">
    <table className="table table-hover table-striped">
      <thead>
        <tr className="thead-dark">
          <th>S. #</th>
          <th>Demands of user</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td style={{ maxWidth: 300 }}>
            <h6>Dummy Title 01</h6>
            <em className="text-muted">
              This is some long text or discription regarding Dummy Title 01.
              Even more lenghthy description will be automatically adjusted as
              per the width specified.
            </em>
          </td>
          <td>Column data</td>
          <td>
            <a href="#" className="btn btn-warning">
              <i className="fas fa-edit" />
            </a>{" "}
            |
            <a href="#" className="btn btn-danger">
              <i className="fas fa-trash" />
            </a>
          </td>
        </tr>
        <tr>
          <td>02</td>
          <td style={{ maxWidth: 300 }}>
            <h6>Dummy Title 02</h6>
            <em className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique facere necessitatibus quo laboriosam consequuntur
            </em>
          </td>
          <td>Some Data</td>
          <td>
            <a href="#" className="btn btn-warning">
              <i className="fas fa-edit" />
            </a>{" "}
            |
            <a href="#" className="btn btn-danger">
              <i className="fas fa-trash" />
            </a>
          </td>
        </tr>
        <tr>
          <td>03</td>
          <td style={{ maxWidth: 300 }}>
            <h6>Another Title</h6>
            <em className="text-muted">
              This is some long text or discription about Another Title or else
              about.
            </em>
          </td>
          <td>This is some data</td>
          <td>
            <a href="#" className="btn btn-warning">
              <i className="fas fa-edit" />
            </a>{" "}
            |
            <a href="#" className="btn btn-danger">
              <i className="fas fa-trash" />
            </a>
          </td>
        </tr>
        <tr>
          <td>04</td>
          <td style={{ maxWidth: 300 }}>
            <h6>Yet Another Title</h6>
            <em className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi aliquam placeat odit quasi autem distinctio veritatis ex
              numquam nihil nulla tempora a dolorem omnis beatae facilis
              perspiciatis doloribus
            </em>
          </td>
          <td>Data goes here</td>
          <td>
            <a href="#" className="btn btn-warning">
              <i className="fas fa-edit" />
            </a>{" "}
            |
            <a href="#" className="btn btn-danger">
              <i className="fas fa-trash" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


</>
  )
}

export default Viewreq
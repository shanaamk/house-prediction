import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import ProjectManagernavbar from './ProjectManagernavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Projectreportform = () => {
  
  const navigate = useNavigate()
  const[input,setInput]=useState({})



  const inputChange= (event)=>{
  const{name,value}=event.target 
  setInput({...input,[name]:value})
  console.log(input);
  }
  
  const submit = (e)=>{
    e.preventDefault()
   
    axios.post('http://localhost:5000/register/projectreport',input).then((response)=>{
      navigate('')
    })
   

  }
  
  return (
    <>
    <ProjectManagernavbar/>
    <div
  className="wrapper"
 
>
  <div className="inner">
    <form action=""  style={{marginTop:'50px',color:'black'}}>
      <h3 style={{color:'black'}}>users Project report</h3>      
        <div className="form-wrapper">
        <label htmlFor="">Name </label>
        <input type="text" name='Name' value={input.Name || ""}
              onChange={inputChange} className="form-control" />
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Address </label>
        <input type="text" name='Address' value={input.Address || ""}
              onChange={inputChange} className="form-control" />
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Register_date</label>
        <input type="text" name='Register_date'  value={input.Register_date || ""}
              onChange={inputChange} className="form-control" />
      </div>
     
      <div className="form-wrapper">
        <label htmlFor="">Date of measurement</label>
        <input type="text" name='Measure_date' value={input.Measure_date || ""}  onChange={inputChange} className="form-control" />
      </div>
  
    
      {/* <div className="form-wrapper">
        <label htmlFor="">status of work</label>
        <div className="form-holder select">
          <select name="status of work"  onChange={setRegister} className="form-control">
            <option value="started">started</option>
            <option value="ongoing">ongoing</option>
            <option value="completed">completed</option>
          </select>
        </div>
      </div> */}
      <div className="form-wrapper">
          <label htmlFor="">Report</label>
          <input type="text" name="Report" value={input.Report || ""} onChange={inputChange} className="form-control" />
        </div>
      <div className="form-wrapper">
        <label htmlFor="">Size(sq.ft) </label>
        <input type="text" name="Size(sq.ft)"  onChange={inputChange} className="form-control" />
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Bedrooms</label>
        <input type="text" name="Bedrooms" value={input.Bedrooms || ""} onChange={inputChange} className="form-control" />
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Bathrooms</label>
        <input type="text" name="Bathrooms" value={input.Bathrooms || ""} onChange={inputChange} className="form-control" />
      </div>
      <div className="form-wrapper">
        <label htmlFor="">floor</label>
        <input type="text" name="floor" value={input.floor || ""} onChange={inputChange} className="form-control" />
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Balcony</label>
        <input type="text" name="Balcony" value={input.Balcony || ""} onChange={inputChange} className="form-control" />
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Contract_amnt</label>
        <input type="text" name="Contract_amnt" value={input.Contract_amnt || ""}  onChange={inputChange} className="form-control" />
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Total_days</label>
        <input type="text" name="Total_days" value={input.Total_days || ""}  onChange={inputChange} className="form-control" />
      </div>
      
      <button type='submit' className='red' onClick={submit} >Submit</button>
    </form>
  </div>
</div>
<div className='projectfooter' style={{marginTop:"20px"}}>
</div>



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
            <td> Address </td>
            <td>Fasil tk,valappil house,parambilpeedika(p.o),malappurem</td>
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
            <td>600</td>
          </tr>
          <tr>
            <td>Work Status</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
<PublicUserFooter/>
</>
 
  )
}

export default Projectreportform
import React, { useState } from 'react'

import Adminnavbar from './Adminnavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Control = () => {
  const[input,setInput]=useState({})



  const inputChange= (event)=>{
  const{name,value}=event.target 
  setInput({...input,[name]:value})
  }
  
  const submit = (e)=>{
    e.preventDefault()
    console.log(input);
  }
  return (
    <>
    <Adminnavbar/>

 <div className='container'>
    <div className='row'>
        <h1>User Name</h1>
        <div className='col-md-4'>
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
      <a href='adminstatus'>Approve Status</a>
        </div>
        <div className='col-md-4'>
        <div className="form-wrapper">
        <label htmlFor="">Architecture</label>
        <div className="form-holder select">
          <select name="choose Architecture" onChange={inputChange} className="form-control">
            <option value="Architecture1">Architecture1</option>
            <option value="Architecture2">Architecture2</option>
            <option value="Architecture3">Architecture3</option>
          </select>
        </div>
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Project Manager</label>
        <div className="form-holder select">
          <select name="choose Projectmanager" onChange={inputChange} className="form-control">
            <option value="ProjectManager1">ProjectManager1</option>
            <option value="ProjectManager2">ProjectManager2</option>
            <option value="ProjectManager3">ProjectManager3</option>
          </select>
        </div>
      </div>
      <button type="button" className="btn btn-dark" onClick={submit}>
Reset
</button>
<button type="button" className="btn btn-dark" style={{marginLeft:20}} onClick={submit}>
Continue
</button>
        </div>

        <div className='col-md-4'>
       <a href='plan'><img
                className="lib-img"
                src="img\pic\planimg.jpg"

              /></a> 
        </div>
        
        </div>
    </div>
    <div className='container'>
    <div className='row text-center'>
        <div className='col-md-12'>
        <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="mt-3">
            
             
               <span className="text2"> 50% of work completed </span>
            
            </div>
          
 
       
            </div> 
      </div>
        </div>
        

<PublicUserFooter/>
 </>
  )
}

export default Control
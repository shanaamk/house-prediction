import React from 'react'
import ProjectManagernavbar from './ProjectManagernavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Projectreportform = () => {
  return (
    <>
    <ProjectManagernavbar/>
    <div
  className="wrapper"
 
>
  <div className="inner">
    <form action="" style={{marginTop:'50px',color:'black'}}>
      <h3 style={{color:'black'}}>users Project report</h3>      
        <div className="form-wrapper">
        <label htmlFor="">Name and address of awarder</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Worker order date</label>
        <input type="password" className="form-control" />
      </div>
     
      <div className="form-wrapper">
        <label htmlFor="">Date of measurement</label>
        <input type="text" className="form-control" />
      </div>
  
    
      <div className="form-wrapper">
        <label htmlFor="">status of work</label>
        <div className="form-holder select">
          <select name="id" className="form-control">
            <option value="male">started</option>
            <option value="female">ongoing</option>
            <option value="other">completed</option>
          </select>
        </div>
      </div>
      <div className="form-wrapper">
          <label htmlFor="">Description</label>
          <input type="text" className="form-control" />
        </div>
      <div className="form-wrapper">
        <label htmlFor="">Size in squarefeet</label>
        <input type="password" className="form-control" />
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Bedrooms</label>
        <input type="password" className="form-control" />
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Bathrooms</label>
        <input type="password" className="form-control" />
      </div>
      <div className="form-wrapper">
        <label htmlFor="">floor</label>
        <input type="password" className="form-control" />
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Balcony</label>
        <input type="password" className="form-control" />
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Total amount of contract</label>
        <input type="password" className="form-control" />
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Work completion date</label>
        <input type="password" className="form-control" />
      </div>
      
      <button className='red'>Submit</button>
    </form>
  </div>
</div>
<div className='projectfooter' style={{marginTop:"20px"}}>
</div>
<PublicUserFooter/>
</>
 
  )
}

export default Projectreportform
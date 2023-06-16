import React from 'react'
import ProjectManagernavbar from './ProjectManagernavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'

const AddWorker = () => {
  return (
    <>
    <ProjectManagernavbar/>
    <div
  className="wrapper"
 
>
  <div className="inner">
    <form action="" style={{marginTop:'50px',color:'black',border: '2px solid #ccc', padding: '20px', borderRadius: '5px'}}>
      <h3 style={{color:'black'}}>Add Workers Form</h3>
    
        <div className="form-wrapper">
          <label htmlFor="">Workers Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-wrapper">
  <label htmlFor="phone">Phone number</label>
  <input type="tel" id="phone" className="form-control" />
</div>
        {/* <div className="form-wrapper">
        <label htmlFor="">Adress</label>
        <input type="text" className="form-control" />
      </div> */}
      
     
      <div className="form-wrapper">
        <label htmlFor="">Email</label>
        <input type="text" className="form-control" />
      </div>
  
    
      <div className="form-wrapper">
        <label htmlFor="">Select Work Category</label>
        <div className="form-holder select">
          <select name="id" className="form-control">
            <option value="male">Plumber</option>
            <option value="female">Electrician</option>
            <option value="other">RCC Worker</option>
          </select>
        </div>
        
      </div>
        <div className="form-wrapper">
          <label htmlFor="">Work Experience</label>
          <input type="text" className="form-control" />
        </div>
        
      <div className="form-wrapper">
          <label htmlFor="">Worker id</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-wrapper">
        <label htmlFor="">Username</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-wrapper">
          <label htmlFor="">Password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="form-wrapper">
          <label htmlFor="">Confirm Password</label>
          <input type="password" className="form-control" />
        </div>
      
      <div className="checkbox">
        <label>
          <input type="checkbox" /> I caccept the Terms of Use &amp; Privacy
          Policy.
          <span className="checkmark" />
        </label>
      </div>
      <button className='red'>Register Now</button>
    </form>
  </div>
</div>
<div className='projectfooter' style={{marginTop:"20px"}}>
<PublicUserFooter/></div>
</>
  )
}

export default AddWorker
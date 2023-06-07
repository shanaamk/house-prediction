import React from 'react'

const ProjectManager = () => {
  return (
    <div
    className="wrapper"
    
  >
    <div className="inner">
      <form action="" style={{marginTop:'50px',color:'black'}}>
        <h3 style={{color:'black'}}>Project manager Registration Form</h3>
        <div className="form-group">
          <div className="form-wrapper">
            <label htmlFor="">First Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-wrapper">
            <label htmlFor="">Last Name</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="form-wrapper">
          <label htmlFor="">Email</label>
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
        <button  className='red'>Register Now</button>
      </form>
    </div>
  </div>
  
  )
}

export default ProjectManager
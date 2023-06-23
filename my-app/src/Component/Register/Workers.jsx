import React, { useState } from 'react'


const Workers = () => {

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
    <div
    className="wrapper" 
   
  >
    <div className="inner" >
      <form action="" style={{marginTop:'50px',color:'black'}}>
        <h3 style={{color:'black'}}>workers Registration Form</h3>
        <div className="form-wrapper">
          <label htmlFor="">Name</label>
          <input type="text"  name='Name' onChange={inputChange} className="form-control" />
        </div>
        <div className="form-wrapper">
  <label htmlFor="phone">Phone number</label>
  <input type="tel" name="Phoneno" onChange={inputChange} className="form-control" />
</div>
        <div className="form-wrapper">
          <label htmlFor="">Email</label>
          <input type="text" name="Email" onChange={inputChange} className="form-control" />
        </div>
        <div className="form-wrapper">
          <label htmlFor="">Work Type</label>
          <input type="text" name="WorkType" onChange={inputChange}className="form-control" />
        </div>
        <div className="form-wrapper">
          <label htmlFor="">Work Experience</label>
          <input type="text"  name="WorkExperience" onChange={inputChange} className="form-control" />
        </div>
        <div className="form-wrapper">
        <label htmlFor="">Username</label>
        <input type="text" name="Username" onChange={inputChange} className="form-control" />
      </div>
        <div className="form-wrapper">
          <label htmlFor="">Password</label>
          <input type="password" name="Password" onChange={inputChange} className="form-control" />
        </div>
        <div className="form-wrapper">
          <label htmlFor="">Confirm Password</label>
          <input type="password" name="ConformPassword" onChange={inputChange} className="form-control" />
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" /> I caccept the Terms of Use &amp; Privacy
            Policy.
            <span className="checkmark" />
          </label>
        </div>
        <button  className='red' onClick={submit}>Register Now</button>
      </form>
    </div>
  </div>
  
  )
}

export default Workers
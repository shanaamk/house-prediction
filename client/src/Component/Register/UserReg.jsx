import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const UserReg = () => {
  const navigate = useNavigate()
const[input,setInput]=useState({})
console.log("value==>",input);



const inputChange= (event)=>{
  const name=event.target.name;
  const value=event.target.value; 
setInput({...input,[name]:value});
console.log(input);
}

const submit = (e)=>{
  e.preventDefault()
  axios.post('http://localhost:5000/register/userreg',input).then((response)=>{
    navigate('/Login')
  }).catch((error)=>{
    toast.error(error.response.data.message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    
  })
}
  


  return (
    <div className="wrapper">
      <ToastContainer/>
    <div className="inner">
      <form action="" onSubmit={submit} style={{marginTop:'50px',color:'black',  border: '2px solid #ccc', padding: '20px', borderRadius: '5px',}}>
        
      <h3 style={{ color: 'black' }}>User Registration</h3>
        
        
        <div className="form-wrapper">
          <label htmlFor="">Name</label>
          <input type="text" name='Name' value={input.Name || ""} onChange={inputChange} className="form-control" />
        </div>
        <div className="form-wrapper">
          <label htmlFor="">Gender</label>
          <div className="form-holder select">
            <select name="Gender" className="form-control" value={input.Gender || ""} onChange={inputChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="form-wrapper">
  <label htmlFor="address">Address</label>
  <input type="text" name="Address" value={input.Address || ""} onChange={inputChange} className="form-control" />
</div>
        <div className="form-wrapper">
  <label htmlFor="phone"> PhoneNo</label>
  <input type="tel" name="PhoneNo" value={input.PhoneNo || ""} onChange={inputChange}  className="form-control" />
</div>
        
        
        <div className="form-wrapper">
          <label htmlFor="">Email</label>
          <input type="text" name="Email" value={input.Email || ""} onChange={inputChange} className="form-control" />
        </div>      
        <div className="form-wrapper">
        <label htmlFor="">Username</label>
        <input type="text" name="Username" value={input.Username || ""} onChange={inputChange}className="form-control" />
      </div>
        
        <div className="form-wrapper">
          <label htmlFor="">Password</label>
          <input type="password" name="Password" value={input.Password || ""} onChange={inputChange} className="form-control" />
        </div>
        
       
        <div className="form-wrapper">
          <label htmlFor="">Confirm Password</label>
          <input type="password" name="ConformPassword" value={input.ConformPassword || ""} onChange={inputChange} className="form-control" />
        </div>
        
       
        <div className="checkbox">
          <label>
            <input type="checkbox" /> I accept the Terms of Use &amp; Privacy Policy.
            <span className="checkmark" />
          </label>
        </div>
        
       
        <button type='submit' className='red' >Register Now</button>
      </form>
    </div>
  </div>
  

  
  )
  }

export default UserReg
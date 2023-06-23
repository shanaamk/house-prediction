import React, { useState } from 'react'

const Login = () => {
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
  
  <div className="page-content">
  <div className="regcontform-v5-content">
    <form className="regcontform-detail" action="#" method="post">
      <h2 style={{marginTop:'20px'}}>Login</h2>
      <div className="regcontform-row">
        <label htmlFor="full-name">Your User Name</label>
        <input
          type="text"
          name='Username' onChange={inputChange}
          className="regcontinput-text"
          placeholder="Your User Name"
          required=""
        />
       
      </div>
      {/* <div className="regcontform-row">
        <label htmlFor="your-email">Your Email</label>
        <input
          type="text"
          name="your-email"
          id="your-email"
          className="regcontinput-text"
          placeholder="Your Email"
          required=""
          pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
        />
       
      </div> */}
      <div className="regcontform-row">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="Password" onChange={inputChange}
          className="input-text"
          placeholder="Your Password"
          required=""
        />
   
      </div>
      <p>Don't have an Account? <a href=""> Register</a></p><br></br>
        <p style={{marginTop:'-20px'}}><a href="">Forgot Password?</a></p>

      <div className="regcontform-row-last">
        <button  className="register" onClick={submit}>
       Login        
      </button>
      </div>
    </form>
    
  </div>
</div>    
    </>
  )
}

export default Login
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate= useNavigate()
  const[input,setInput]=useState({})



  const inputChange= (event)=>{
  const{name,value}=event.target 
  setInput({...input,[name]:value})
  }
  
  const submit = (e)=>{
    e.preventDefault();
    console.log(input);
   
    axios.post('http://localhost:5000/login/login', input).then((data) => {
      console.log(data);
      if(data.data.role=='1'){
        localStorage.setItem('user_id',data.data.user_id)
        localStorage.setItem('login_id',data.data.login_id)
        localStorage.setItem('role',data.data.role)
        navigate('/userhome')
      }else if(data.data.role=='2'){
        localStorage.setItem('architecture_id',data.data.architecture_id)
        localStorage.setItem('login_id',data.data.login_id)
        localStorage.setItem('role',data.data.role)
        navigate('/architecturehome')
      }else if(data.data.role=='3'){
        localStorage.setItem('projectmanager_id',data.data.projectmanager_id)
        localStorage.setItem('login_id',data.data.login_id)
        localStorage.setItem('role',data.data.role)
        navigate('/projectmanagerhome')
      }
      else if(data.data.role=='4'){
        localStorage.setItem('workers_id',data.data.workers_id)
        localStorage.setItem('login_id',data.data.login_id)
        localStorage.setItem('role',data.data.role)
        navigate('/workershome')
      }
      
      
    }).catch((error) => {

    })

  }
  return (
  <>
  
  <div className="page-content">
  <div className="regcontform-v5-content">
    <form className="regcontform-detail" action="#" method="post">
      <h2 style={{marginTop:'20px'}}>Login</h2>
      <div className="regcontform-row">
        <label htmlFor="full-name"> User Name</label>
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
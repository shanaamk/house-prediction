import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Workers = () => {

  const navigate = useNavigate()
  const[input,setInput]=useState({
    Name: '',
    Email: '',
    PhoneNo: '',
    WorkExperience: '',
    Username: '',
    Password: '',
    ConformPassword: '',
  });
  console.log("value==>",input);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


const inputChange= (event)=>{
  const { name, value } = event.target;
  setInput((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};
useEffect(() => {
  if (Object.keys(formErrors).length === 0 && isSubmit) {
    console.log(input);
  }
}, [formErrors]);

const validate = (values) => {
  const errors = {};
  const regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  const PhoneNo = /^[6-9]\d{9}$/;

  if (!values.Name) {
    errors.Name = 'Name is required!';
  }
  if (!values.Username) {
    errors.Username = 'Username is required!';
  }
  if (!values.Email) {
    errors.Email = 'Email is required!';
  } else if (!regex.test(values.Email)) {
    errors.Email = 'Invalid email format!';
  }
  if (!values.PhoneNo) {
    errors.PhoneNo = 'Contact Number is required!';
  } else if (!PhoneNo.test(values.PhoneNo)) {
    errors.PhoneNo = 'Invalid Contact Number!';
  }
  if (!values.WorkExperience) {
    errors.WorkExperience = 'WorkExperience is required!';
  } 
  if (!values.WorkType) {
    errors.WorkType = 'WorkType is required!';
  } 
  if (!values.Password) {
    errors.Password = 'Password is required';
  }
  if (!values.ConformPassword) {
    errors.ConformPassword = 'Confirmation Password is required';
  } else if (values.Password !== values.ConformPassword) {
    errors.ConformPassword = 'Passwords do not match';
  }
  return errors;
};
  
  
  // const inputChange= (event)=>{
  //   const name=event.target.name;
  //   const value=event.target.value; 
  // setInput({...input,[name]:value});
  // console.log(input);
  // }
  
  const submit = (e)=>{
    e.preventDefault()
    const errors = validate(input);
    setFormErrors(errors);
    setIsSubmit(true);
    if (Object.keys(errors).length === 0) {
    axios.post('http://localhost:5000/register/workerreg',input).then((response)=>{
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
  }}
    

  return (
    <div
    className="wrapper" 
   
  >
    <ToastContainer/>
    <div className="inner" >
      <form action="" onSubmit={submit} style={{marginTop:'50px',color:'black'}}>
        <h3 style={{color:'black'}}>workers Registration Form</h3>
        <div className="form-wrapper">
          <label htmlFor="">Name</label>
          <span className="errormsg" style={{ color: 'red' }}>
                    {formErrors.Name}
                  </span>
          <input type="text"  name='Name' value={input.Name || ""} onChange={inputChange} className="form-control" />
        </div>
        <div className="form-wrapper">
  <label htmlFor="phone">Phone number</label>
  <span className="errormsg" style={{ color: 'red' }}>
                    {formErrors.PhoneNo}
                  </span>
  <input type="tel" name="PhoneNo"  value={input.PhoneNo || ""} onChange={inputChange} className="form-control" 
   onKeyPress={(event) => {
    if (!/[0-9]/.test(event.key) || event.target.value.length >= 10) {
      event.preventDefault();
    }
  }}/>
</div>
        <div className="form-wrapper">
          <label htmlFor="">Email</label>
          <span className="errormsg" style={{ color: 'red' }}>
                    {formErrors.Email}
                  </span>
          <input type="text" name="Email"  value={input.Email || ""} onChange={inputChange} className="form-control" />
        </div>
        <div className="form-wrapper">
          <label htmlFor="">Work Type</label>
          <span className="errormsg" style={{ color: 'red' }}>
                    {formErrors.WorkType}
                  </span>
          <input type="text" name="WorkType"  value={input.WorkType || ""} onChange={inputChange}className="form-control" />
        </div>
        <div className="form-wrapper">
          <label htmlFor="">Work Experience</label>
          <span className="errormsg" style={{ color: 'red' }}>
                    {formErrors.WorkExperience}
                  </span>
          <input type="text"  name="WorkExperience" value={input.WorkExperience || ""} onChange={inputChange} className="form-control" />
        </div>
        <div className="form-wrapper">
        <label htmlFor="">Username</label>
        <span className="errormsg" style={{ color: 'red' }}>
                    {formErrors.Username}
                  </span>
        <input type="text" name="Username" value={input.Username || ""} onChange={inputChange} className="form-control" />
      </div>
        <div className="form-wrapper">
          <label htmlFor="">Password</label>
          <span className="errormsg" style={{ color: 'red' }}>
                    {formErrors.Password}
                  </span>
          <input type="password" name="Password"value={input.Password || ""} onChange={inputChange} className="form-control" />
        </div>
        <div className="form-wrapper">
          <label htmlFor="">Confirm Password</label>
          <span className="errormsg" style={{ color: 'red' }}>
                    {formErrors.ConformPassword}
                  </span>
          <input type="password" name="ConformPassword" value={input.ConformPassword || ""} onChange={inputChange} className="form-control" />
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" /> I caccept the Terms of Use &amp; Privacy
            Policy.
            <span className="checkmark" />
          </label>
        </div>
        <button type='submit' className='red' >Register Now</button>
      </form>
    </div>
  </div>
  
  )
}

export default Workers
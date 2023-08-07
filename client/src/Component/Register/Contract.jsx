import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Contract = () => {
  
  const navigate = useNavigate()
  const[input,setInput]=useState({
    Name: '',
    Email: '',
    PhoneNo: '',
    WorkType: '',
    uploadcv:'',
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
  if (!values.WorkType) {
    errors.WorkType = 'WorkType is required!';
  }
  if (!values.uploadcv) {
    errors.WorkType = 'uploadcv is required!';
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
  const [file, setFile] = useState('');
  console.log('value==>', input);
  console.log("value==>",file.name);
  console.log("value==>",file);

//   const inputChange= (event)=>{
//     const name = event.target.name;
//     const value = event.target.value;
//     setInput({ ...input, [name]: value });
//     console.log(input);
  
// }
  
  const submit = (e)=>{
    e.preventDefault()
    
    if (file) {
      const data = new FormData();
      const filename = file.name
      data.append('file', file);
      data.append('name', filename);

      // const errors = validate(input);
      // setFormErrors(errors);
      // setIsSubmit(true);
      // if (Object.keys(errors).length === 0) {
      axios.post('http://localhost:5000/register/upload', data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    axios.post('http://localhost:5000/register/contractreg1',input).then((response)=>{
      navigate('')
    })
   

  }
  return (
    <div className="page-content">
  <div className="regcontform-v5-content">
    <form className="regcontform-detail" action="#" method="post">
      <h2>Apply for job</h2>
      <div className="regcontform-row">
        <label htmlFor="full-name">Full Name</label>
        <span className="errormsg" style={{ color: 'red' }}>
                    {formErrors.Name}
                  </span>
        <input
          type="text"
          name='Name' value={input.Name || ""} onChange={inputChange}
          className="regcontinput-text"
          placeholder="Your Name"
          required=""
        />
       
      </div>
      <div className="regcontform-row">
        <label htmlFor="your-phoneno"> PhoneNo</label>
        <span className="errormsg" style={{ color: 'red' }}>
                    {formErrors.PhoneNo}
                  </span>
        <input
          type="text"
          name="PhoneNo" value={input.PhoneNo || ""} onChange={inputChange}
          className="regcontinput-text"
          placeholder="Your PhoneNo"
          required=""
          pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
        
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key) || event.target.value.length >= 10) {
              event.preventDefault();
            }
          }}/>
       
      </div>
      <div className="regcontform-row">
        <label htmlFor="your-email"> Email</label>
        <span className="errormsg" style={{ color: 'red' }}>
                    {formErrors.Email}
                  </span>
        <input
          type="text"
          name="Email" value={input.Email || ""} onChange={inputChange}
          className="regcontinput-text"
          placeholder="Your Email"
          required=""
          pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
        />
       
      </div>
      
      <div className="regcontform-row">
        <label htmlFor="WorkType">WorkType</label>
        <span className="errormsg" style={{ color: 'red' }}>
                    {formErrors.WorkType}
                  </span>
        <select name="WorkType" value={input.WorkType || ""} onChange={inputChange} className="worktype">      
       <option selected="">Select work category</option>
       <option value="Fountation">Fountation</option>
      <option value="Rcc works">Rcc works</option>
      <option value="Plastering">Plastering</option>
      <option value="Wiring">Wiring</option>
      <option value="plumbing">plumbing</option>     
      <option value="flooring">flooring</option>
      <option value="Furnishing">Furnishing</option>
      <option value="Cabinet\caboard">Cabinet\caboard</option>
      <option value="painting\polishing">painting\polishing</option>
      <option value="Designing">Designing</option>
          </select>
        </div><br></br>

        <div className="value">
        <label htmlFor="full-name">Appload C.V</label> 
        <span className="errormsg" style={{ color: 'red' }}>
                    {formErrors.uploadcv}
                  </span>
  <div className="input-group js-input-file">
    <input className="input-file" type="file" name="uploadcv" 
    onChange={(e) => {
      setFile(e.target.files[0]);
      console.log(e.target.files[0].name);
      setInput({ ...input, uploadcv: e.target.files[0].name });
    }}/>
    <label className="label--file" htmlFor="file">
      Choose file
    </label>
    {/* <span className="input-file__info">No file chosen</span> */}
  </div>
  {/* <div className="label--desc">
    Upload your CV/Resume or any other relevant file. Max file size 50 MB
  </div> */}
</div>
<div className="regcontform-row">
        <label htmlFor="full-name">Username</label>
        <span className="errormsg" style={{ color: 'red' }}>
                    {formErrors.Username}
                  </span>
        <input
          type="text"
          name='Username' value={input.Username || ""} onChange={inputChange}
          className="regcontinput-text"
          placeholder="Your Username"
          required=""
        />
       
      </div>
      <div className="regcontform-row">
        <label htmlFor="password">Password</label>
        <span className="errormsg" style={{ color: 'red' }}>
                    {formErrors.Password}
                  </span>
        <input
          type="password"
          name="Password" value={input.Password || ""} onChange={inputChange}
          className="input-text"
          placeholder="Your Password"
          required=""
        />
   
      </div>
      {/* <div className="regcontform-row">
        <label htmlFor="Conform password">Conform Password</label>
        <input
          type="password"
          name="ConformPassword" onChange={inputChange}
          className="input-text"
          placeholder="Your Conform Password"
          required=""
        />
   
      </div> */}

      <div className="regcontform-row-last">
        <button  className="register" onClick={submit}>
        submit         
          </button>
      </div>
    </form>
  </div>
</div>

  )
}

export default Contract
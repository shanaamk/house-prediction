import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Contract = () => {
  
  const navigate = useNavigate()
  const[input,setInput]=useState({})
  const [file, setFile] = useState('');
  console.log('value==>', input);
  console.log("value==>",file.name);
  console.log("value==>",file);

  const inputChange= (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setInput({ ...input, [name]: value });
    console.log(input);
  }
  
  const submit = (e)=>{
    e.preventDefault()
    if (file) {
      const data = new FormData();
      const filename = file.name
      data.append('file', file);
      data.append('name', filename);
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
        <input
          type="text"
          name="PhoneNo" value={input.PhoneNo || ""} onChange={inputChange}
          className="regcontinput-text"
          placeholder="Your PhoneNo"
          required=""
          pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
        />
       
      </div>
      <div className="regcontform-row">
        <label htmlFor="your-email"> Email</label>
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
        <select name="WorkType" value={input.WorkType || ""} onChange={inputChange} className="worktype">
       
            
            <option value="Painter">painter</option>
            <option value="Plumber">plumber</option>
            <option value="Flooring">flooring</option>
          </select>
        </div><br></br>

        <div className="value">
        <label htmlFor="full-name">Appload C.V</label>   
  <div className="input-group js-input-file">
    <input className="input-file" type="file" name="image" 
    onChange={(e) => {
      setFile(e.target.files[0]);
      console.log(e.target.files[0].name);
      setInput({ ...input, image: e.target.files[0].name });
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
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import Adminnavbar from './Adminnavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'



const Editrent = () => {
  const { id } = useParams();
  const [category, setCategory] = useState({ Location: '',});

  useEffect(() => {
    fetch(`http://localhost:5000/register/edit-rent/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCategory(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/register/edit-rent/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data.message);
          // Handle success, redirect or perform any other actions
        } else {
          console.log(data.message);
          // Handle the error case
        }
      })
      .catch((error) => {
        console.log('Error:', error);
        // Handle the error case
      });
  };

  return (
    <>
    <Adminnavbar/>
    <div className="container" />
<div style={{ display: "flex", width: "100%",color:'black',marginTop:20,marginBottom:20}}>
   
  <form className="formrequirement" onSubmit={handleSubmit}>
  <h3><center>HOUSE RENT </center></h3><br></br>
    <div style={{ width: "100%" ,}}>
      <p>Property Name</p>
      <input name='Property_name' onChange={handleInputChange} className="inputfield" autofocus="" />
    </div>
    <div style={{ width: "100%" }}>
      <p>Address</p>
      <input name='Address' onChange={handleInputChange} className="inputfield" />
    </div>
    <div style={{ width: "100%" }}>
      <p>Location</p>
      <input name='Location' onChange={handleInputChange} value={category.Location || ''}className="inputfield" />
    </div>
    <div style={{ width: "100%" }}>
      <p>Price</p>
      <input name='Price' onChange={handleInputChange} className="inputfield" />
    </div>
    <div style={{ width: "100%" }}>
      <p>Area</p>
      <input name='Area' onChange={handleInputChange} className="inputfield" />               
    </div>
    <div style={{ width: "100%" }}>
      <p>Bedrooms</p>
      <input name='Bedrooms' onChange={handleInputChange} className="inputfield" />
    </div>
    <div style={{ width: "100%" }}>
      <p>Bathrooms</p>
      <input name='Bathrooms'onChange={handleInputChange} className="inputfield" />
    </div>
    <div style={{ width: "100%" }}>
      <p>Landmark</p>
      <input name='Landmark' onChange={handleInputChange} className="inputfield" />
    </div>
    <div  style={{ width: "100%" }}>
        <label htmlFor="full-name">Appload rentimage</label>   
  <div className="input-group js-input-file">
    <input className="input-file" type="file" name="rentimage" id="file" 
    // onChange={(e) => {
    //   setFile(e.target.files[0]);
    //   console.log(e.target.files[0].name);
    //   setInput({ ...input, rentimage: e.target.files[0].name });
    // }}
    />
    <label className="label--file" htmlFor="file">
      Choose file
    </label>
    <span className="input-file__info">No file chosen</span>
  </div>
  {/* <div className="label--desc">
    Upload your CV/Resume or any other relevant file. Max file size 50 MB
  </div> */}
</div>

    
<button type="submit" className="btn btn-dark" >
continue
</button>
<button type="button" className="btn btn-dark" style={{marginLeft:20}}>
delete
</button>
  </form>
</div>

<PublicUserFooter/>
   </>
  )
}

export default Editrent
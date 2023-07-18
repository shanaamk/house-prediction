import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import Adminnavbar from './Adminnavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'



const Editrent = () => {
  const {id}=useParams()
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
   
      axios
      .post(`http://localhost:5000/register/edit-rent/${id}`, input)
      .then((response) => {
        console.log(response);
        navigate('');
      })
   

  }
  const [rents, setRents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rentsPerPage = 10;

  useEffect(() => {
    fetch('http://localhost:5000/register/view-rent')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setRents(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <>
    <Adminnavbar/>
    <div className="container" />
<div style={{ display: "flex", width: "100%",color:'black',marginTop:20,marginBottom:20}}>
   
  <form className="formrequirement">
  <h3><center>HOUSE RENT </center></h3><br></br>
    <div style={{ width: "100%" ,}}>
      <p>Property Name</p>
      <input name='Property_name' onChange={inputChange} className="inputfield" autofocus="" />
    </div>
    <div style={{ width: "100%" }}>
      <p>Address</p>
      <input name='Address' onChange={inputChange} className="inputfield" />
    </div>
    <div style={{ width: "100%" }}>
      <p>Location</p>
      <input name='Location' onChange={inputChange} className="inputfield" />
    </div>
    <div style={{ width: "100%" }}>
      <p>Price</p>
      <input name='Price' onChange={inputChange} className="inputfield" />
    </div>
    <div style={{ width: "100%" }}>
      <p>Area</p>
      <input name='Area' onChange={inputChange} className="inputfield" />               
    </div>
    <div style={{ width: "100%" }}>
      <p>Bedrooms</p>
      <input name='Bedrooms' onChange={inputChange} className="inputfield" />
    </div>
    <div style={{ width: "100%" }}>
      <p>Bathrooms</p>
      <input name='Bathrooms' onChange={inputChange} className="inputfield" />
    </div>
    <div style={{ width: "100%" }}>
      <p>Landmark</p>
      <input name='Landmark' onChange={inputChange} className="inputfield" />
    </div>
    <div  style={{ width: "100%" }}>
        <label htmlFor="full-name">Appload rentimage</label>   
  <div className="input-group js-input-file">
    <input className="input-file" type="file" name="rentimage" id="file" 
    onChange={(e) => {
      setFile(e.target.files[0]);
      console.log(e.target.files[0].name);
      setInput({ ...input, rentimage: e.target.files[0].name });
    }}/>
    <label className="label--file" htmlFor="file">
      Choose file
    </label>
    <span className="input-file__info">No file chosen</span>
  </div>
  {/* <div className="label--desc">
    Upload your CV/Resume or any other relevant file. Max file size 50 MB
  </div> */}
</div>

    
<button type="button" className="btn btn-dark" onClick={submit}>
continue
</button>
<button type="button" className="btn btn-dark" style={{marginLeft:20}} onClick={submit}>
delete
</button>
  </form>
</div>

<PublicUserFooter/>
   </>
  )
}

export default Editrent
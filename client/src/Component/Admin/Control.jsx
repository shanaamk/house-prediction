import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import Adminnavbar from './Adminnavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Control = () => {
  const {id}=useParams()
  const navigate = useNavigate()
  const [category, setCategory] = useState([]);
  const [manager, setmanager] = useState([]);

  const[input,setInput]=useState({})



  const inputChange= (event)=>{
  const{name,value}=event.target 
  setInput({...input,[name]:value})
  }
  
  const submit = (e)=>{
    e.preventDefault()
    console.log(input);
  
    // const  architecture_id=input.category;
    // const updatedInputs={...input,architecture_id};
    // const projectmanager_id=input.manager;
    // const finalInputs={...updatedInputs,projectmanager_id};
    
    // console.log(finalInputs);

    axios.post(`http://localhost:5000/register/choose-archtctr/${id}`,input).then((response)=>{
      console.log(response);
      navigate('/reqst')
    })
  }
  useEffect(() => {
    axios.get('http://localhost:5000/register/view-architectures')
      .then((response) => {
        setCategory(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/register/view-projectmanagers')
      .then((response) => {
        setmanager(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);
  return (
    <>
    <Adminnavbar/>

 <div className='container'>
    <div className='row'>
        <h1>User Name</h1>
        <div className='col-md-4'>
        <table className="table table-striped custab" style={{color:'black'}}>
        <thead>
          <tr>
          
            <th>Title</th>
            <th>Values</th>
          </tr>
        </thead>
        <tbody>
          <tr>
           
            <td style={{color:'black'}}>size(sq.ft)</td>
            <td>2500</td>
          </tr>
          <tr>
           
            <td>Balcony</td>
            <td>4</td>
          </tr>
          <tr>
            
            <td>Total Floors</td>
            <td>2</td>
          </tr>
          <tr>
           
            <td>Bedrooms</td>
            <td>5</td>
          </tr>
          <tr>
            
            <td>Bathrooms</td>
            <td>5</td>
          </tr>
          <tr>
            
            <td>kitchen</td>
            <td>1</td>
          </tr>
         
        </tbody>
      </table>
      
        </div>
        <div className='col-md-4'>
        <div className="form-wrapper">
        <label htmlFor="">Architecture</label>
        <div className="form-holder select">
          <select name="architecture_id" onChange={inputChange} className="form-control">
            
            {category.map((data)=>(
                  <option value={data._id}>{data.name}</option>
                ))}
          </select>
        </div>
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Project Manager</label>
        <div className="form-holder select">
          <select name="projectmanager_id" onChange={inputChange} className="form-control">
          {manager.map((data)=>(
                  <option value={data._id}>{data.name}</option>
                ))}
          </select>
        </div>
      </div>
      <button type="button" className="btn btn-dark" onClick={submit}>
Reset
</button>
<button type="button" className="btn btn-dark" style={{marginLeft:20}} onClick={submit}>
Continue
</button>
        </div>

        <div className='col-md-4'>
      <img
                className="lib-img"
                src="img\pic\planimg.jpg"

              />
        </div>
        
        </div>
    </div>
   
      
        

<PublicUserFooter/>
 </>
  )
}

export default Control
import React, {  useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import ProjectManagernavbar from './ProjectManagernavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Assignworkers = () => {
  const { id} = useParams();

  const navigate = useNavigate()
  const [category, setCategory] = useState([]);
 
  const[input,setInput]=useState({})
  const[input2,setInput2]=useState({})
  

  const[workers_id,setWorkers_id]=useState({})

  const inputChange= (event)=>{

  const{name,value}=event.target 
  setInput({...input,value})

  }

  const [val, setVal] = useState(""); // Initialize with an empty string

  const inputChange2 = (event) => {
    const selectedValue = event.target.value;
    setInput2({ ...input2, value: selectedValue }); // Update input2 with the selected value
    setVal(selectedValue); // Set the selected value directly to val state
  };

  console.log(id);
  console.log(val);
 
  useEffect(() => {
    axios.get('http://localhost:5000/register/projectmanager-view-workers')
      .then((response) => {
        setCategory(response.data.data);
        setWorkers_id(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  const submit = ()=>{
    
    console.log("data", input);
    console.log(workers_id,id);
    
    axios.get(`http://localhost:5000/register/update_project_workers/${id}/${val}`)
    .then((response) => {
      setWorkers_id(response.data.data);
      console.log('project id saved!');
    })
    .catch((error) => {
      console.log('Error:', error);
    });
  }


 
  

 
  return (
    <>
    <ProjectManagernavbar/>
   
  <div className='container mb-5 mt-5'>
  <div className='row'>
    <div className='col-md-4'>
    <form className="">
      <div className="form-wrapper">
        <label htmlFor="">work_category</label>
        <div className="form-holder select">
          <select name="worktype" className="form-control"  onChange={inputChange}>
            <option value="categery">categery</option>
            <option value="foundation">Foundation</option>
            <option value="Rcc worker">Rcc works</option>
            <option value="plastering">Plastering</option>
            <option value="wiring">Wiring</option>
            <option value="plumbing">Plumbing</option>
            <option value="flooring">Flooring</option>
            <option value="Furnishing">Furnishing</option>
            <option value="cabinet\caboard">Cabinet\caboard</option>
            <option value="painting">Painting\polishing</option>
            <option value="designing">Designing</option>
          </select>
          </div>
        </div>
    
    </form>
    <br />
    <br />
    <form>
    <div className="form-wrapper">
          <label htmlFor="">workers</label>
          <div className="form-holder select">
            <select name="workers" className="form-control" onChange={inputChange2}>
            <option value="">Select worker</option>
                {category.filter(category => category.worktype === input.value ).map((data)=>(
                  <option value={data._id}>{data.name}</option>
                  
                ))}
            </select>
          </div>
        </div>
    <br />
    <br />
    <button type="button" className="btn btn-light mr-5" onClick={submit}>
      Add
    </button>
    <button type="button" className="btn btn-light" >
      Delete
    </button>
  </form>
    </div>
    <div className='col-md-4'>
        
  {/* <form className="">
    <select name="cars" className="custom-select">
      <option selected="">Select work category</option>
      <option value="Painter">painter</option>
      <option value="Plumber">plumber</option>
      <option value="Flooring">flooring</option>
    </select>
    <br />
    <br />
    <button type="button" className="btn btn-light">
     View Team
    </button>
  </form> */}


    </div>



        {/* <div className='col-md-4 justify-content-center'>
        <table classssName="table text-center" style={{color:'black',fontSize:21}}>
        <thead className="table-dark"> 
     
    <tr>
        <td>
            #
        </td>
        <td>
            Painting
        </td>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>
           1
        </td>
        <td>
            shamli
        </td>
    </tr>
    <tr>
        <td>
           2
        </td>
        <td>
           sudheepth
        </td>
    </tr>
    <tr>
        <td>
          3
        </td>
        <td>
          vishnu
        </td>
    </tr>
    </tbody>
</table>
</div> */}
        </div>
        </div>

<PublicUserFooter/>
</>
  )
}

export default Assignworkers
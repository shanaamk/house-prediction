import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const WorkStatus = () => {
  
  const { id} = useParams();
  const [file, setFile] = useState('');
  
  const user_id = localStorage.getItem('user_id')
  console.log(user_id);

  const [img, setImg] = useState([]);
  const [viewworks, setViewworks] = useState([]);

  const navigate = useNavigate()
  const[inputs, setinputs]=useState([]);
  console.log("value==>",inputs);

  const setRegister=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputs({...inputs,[name]:value});
    console.log(inputs);
  }
  
  const registersubmit = (event) => {
    event.preventDefault();
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
    // Concatenate work_category and work_status
    const project_status = inputs.work_category + ' ' + inputs.work_status;
  
    // Create a new object without work_status and work_category
    const { work_status, work_category, ...updatedInputs } = inputs;
  
    // Add concatenatedValue to updatedInputs
    updatedInputs.project_status = project_status;
  
    console.log("data", updatedInputs);
    
    axios.post(`http://localhost:5000/register/work_status/${id}`, updatedInputs)
      .then((response) => {
        navigate('');
      })
      .catch((error) => {
        // Handle error
      });
  };
  

  useEffect(() => {
    fetch(`http://localhost:5000/workstatus/view_update_workstatus/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
         
          setViewworks(data.data);
         console.log(data.data);
         navigate('');
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);
 
  useEffect(() => {
    const fetchimg = async () => {
      try {
        const response = await fetch(`http://localhost:5000/workstatus/view_home_img/${id}`);
        const data = await response.json();

        if (data.success) {
          console.log(data.data);
          setImg(data.data);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchimg();
  }, []); 


  return (
    <>
    <div className="container py-5">
  <div className="row" style={{color:'black'}}>
  <h3><center>Work Updations</center></h3>
    <div className="col-md-12">

      <div id="content">
        <ul className="timeline-1 text-black">
        {viewworks.map((viewwork) => (
                        <React.Fragment key={viewwork.project_id}>
          <li className="event" data-date={viewwork.status_date}>
            <h4 className="mb-3"> {viewwork.work_status}</h4> 
            <p>
            {viewwork.status_description}
            </p>
            <a href={`/assets/upload/${viewwork.home_img}`} download target="_blank" rel="noopener noreferrer">
            View img
            </a>
          </li>
         
          </React.Fragment>
           ))}
        </ul>
      </div>
    </div>
  </div>
</div>
<div className="container mb-5">
  <div className="row">
    <div className="col-md-12">
      <div style={{ display: "flex", width: "100%" ,color:'black'}}>
        <form onSubmit={registersubmit} className="statusformrequirement">
        <div style={{ width: "100%" ,}}>
                 {/* <p>status_date</p> */}
                 <input type="date" name="status_date" value={inputs.status_date || ""}
              onChange={setRegister} className="custom-select" autofocus="" />
               </div>
               
               <div style={{ width: "100%" }}>
        {/* <p>Status_description</p> */}
        <textarea name="status_description" value={inputs.status_description || ""}
              onChange={setRegister} className="custom-select" placeholder="Status description" />
      </div>
         
               <select name="work_category" value={inputs.work_category || ""}
              onChange={setRegister} className="custom-select mb-3">
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

          <select name="work_status"  value={inputs.work_status || ""}
              onChange={setRegister} className="custom-select">
            <option selected="">Status</option>
            <option value="started">started</option>
            <option value="finished">ongoing</option>
            <option value="finished">finished</option>
           
          </select>
          <br />
          <br />
          
          <div style={{ width: "100%" }}>
        <p>home image</p>
         
  <div className="input-group js-input-file" style={{color:'black'}}>
    <input className="input-file" type="file" name="home_img" id="file"  onChange={(e) => {
      setFile(e.target.files[0]);
      console.log(e.target.files[0].name);
      setinputs({ ...inputs, home_img: e.target.files[0].name });
    }} />
    </div>
  </div>
          <button type='submit' className="btn btn-light mr-5">
            Reset
          </button>
          <button type='submit' className="btn btn-light">
            Continue
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
</>

  )
}

export default WorkStatus
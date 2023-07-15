import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const WorkStatus = () => {

  const user_id = localStorage.getItem('user_id')
  console.log(user_id);

  const navigate = useNavigate()
  const[inputs, setinputs]=useState([]);
  console.log("value==>",inputs);

  const setRegister=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputs({...inputs,[name]:value});
    console.log(inputs);
  }
  
  const registersubmit =(event)=>{
    event.preventDefault();
    console.log("data",inputs);
    axios.post(`http://localhost:5000/register/work_status/${user_id}`,inputs).then((response)=>{
      navigate('')
    })

  }

  // const [viewprojects, setViewprojects] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const viewprojectsPerPage = 10;
 
  // useEffect(() => {
  //   fetch('http://localhost:5000/register/view-project-request')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.success) {
  //         setViewprojects(data.data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching users:', error);
  //     });
  // }, []);
  // const totalPages = Math.ceil(viewprojects.length / viewprojectsPerPage);
  
  // const handlePageClick = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  // const indexOfLastViewproject= currentPage * viewprojectsPerPage;
  // const indexOfFirstViewproject = indexOfLastViewproject - viewprojectsPerPage;
  // const currentViewprojects = viewprojects.slice(indexOfFirstViewproject, indexOfLastViewproject);
  


  return (
    <>
    <div className="container py-5">
  <div className="row" style={{color:'black'}}>
  <h3><center>Work Updations</center></h3>
    <div className="col-md-12">

      <div id="content">
        <ul className="timeline-1 text-black">
          <li className="event" data-date="12:30 - 1:00pm">
            <h4 className="mb-3">Project Work Started</h4> 
            <p>
              Get here on time, it's first come first serve. Be late, get turned
              away.
            </p>
          </li>
          <li className="event" data-date="12-05-2023">
            <h4 className="mb-3 pt-3">Foundation work started</h4>
            <p>
              Get ready for an exciting event, this will kick off in amazing
              fashion with MOP &amp; Busta Rhymes as an opening show.
            </p>
          </li>
          <li className="event" data-date="22-05-2023">
            <h4 className="mb-3 pt-3">Rcc Work started</h4>
            <p>
              This is where it all goes down. You will compete head to head with
              your friends and rivals. Get ready!
            </p>
          </li>
          <li className="event" data-date="22-06-2023">
            <h4 className="mb-3 pt-3">Plastering Started</h4>
            <p className="mb-0">
              See how is the victor and who are the losers. The big stage is
              where the winners bask in their own glory.
            </p>
          </li>
          <li className="event" data-date="2-07-2023">
            <h4 className="mb-3 pt-3">Flooring Started</h4>
            <p className="mb-0">
              See how is the victor and who are the losers. The big stage is
              where the winners bask in their own glory.
            </p>
          </li>
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
                 <p>Status_date</p>
                 <input type="date" name="Status_date" value={inputs.Status_date || ""}
              onChange={setRegister} className="custom-select" autofocus="" />
               </div>
               
               <div style={{ width: "100%" }}>
        <p>Status_description</p>
        <textarea name="Status_description" value={inputs.Status_description || ""}
              onChange={setRegister} className="custom-select" placeholder="Status description" />
      </div>
               <select name="work_category" value={inputs.work_category || ""}
              onChange={setRegister} className="custom-select mb-3">
            <option selected="">Select work category</option>
            <option value="Painter">painting</option>
            <option value="Plumber">plumbing</option>
            <option value="Flooring">flooring</option>
            <option value="Painter">painting</option>
            <option value="Plumber">plumbing</option>
            <option value="Flooring">flooring</option>
            <option value="Painter">painting</option>
            <option value="Plumber">plumbing</option>
            <option value="Flooring">flooring</option>
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
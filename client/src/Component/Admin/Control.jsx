import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Adminnavbar from './Adminnavbar';
import PublicUserFooter from '../Footer/PublicUserFooter';

const Control = () => {
  const { id,user_id } = useParams();
console.log(user_id);

  const navigate = useNavigate();
  const [requirements, setRequirements] = useState([]);
  console.log(requirements);
  const [status, setStatus] = useState([]);
  const [requests, setRequests] = useState([]);
  const [category, setCategory] = useState([]);
  const [manager, setManager] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/register/view-requirement/${id}`)
      .then((response) => response.json())
      .then((data) => {
        
        if (data.success) {
          
          console.log(data.data);
          setRequirements(data.data);
          setInput({ ...input,project_id: id });
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);
  const [input, setInput] = useState({});
console.log(input);
  const inputChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const inputChange2 = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(input);

    axios.post(`http://localhost:5000/register/choose-archtctr/${id}`, input)
      .then((response) => {
        console.log(response);
        navigate('/reqst');
      });
  };

  const submit2 = (e) => {
    e.preventDefault();
    console.log(input);

    axios.post(`http://localhost:5000/register/choose-projctmnger/${id}`, input)
      .then((response) => {
        console.log(response);
        navigate('/reqst');
      });
  };

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
        setManager(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/register/view-project-request')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const filteredData = data.data.filter((item) => item._id === id);
          if (filteredData.length > 0) {
            const approvel_status = filteredData[0].approvel_status;
            setRequests(approvel_status);
            console.log(approvel_status);
          }
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);
  console.log(requests);

  useEffect(() => {
    fetch('http://localhost:5000/register/view-plan')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const filteredData = data.data.filter((item) => item.project_id === id);
          if (filteredData.length > 0) {
            const useraprvl_status = filteredData[0].useraprvl_status;
            setStatus(useraprvl_status);
            console.log(useraprvl_status);
          }
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);
  console.log(requests);

  // const [currentPage, setCurrentPage] = useState(1);
  // const requirementsPerPage = 10;

 
  // const totalPages = Math.ceil(requirements.length / requirementsPerPage);

  // const handlePageClick = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  // const indexOfLastRequirement = currentPage * requirementsPerPage;
  // const indexOfFirstRequirement = indexOfLastRequirement - requirementsPerPage;
  // const currentRequirements = requirements.slice(indexOfFirstRequirement, indexOfLastRequirement);
  return (
    <>
           <Adminnavbar />

<div className="container">
  <div className="row">
    <h1>User Name</h1>
    <div className="col-md-4">
      <table className="table table-striped custab" style={{ color: 'black' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Values</th>
          </tr>
        </thead>
        <tbody>
        {requirements.map((requirement) => (
<React.Fragment key={requirement._id}>
<tr>
  <td style={{ color: 'black' }}>size(sq.ft)</td>
  <td>{requirement.size_sqft}</td>
</tr>
<tr>
  <td>Balcony</td>
  <td>{requirement.balcony}</td>
</tr>
<tr>
  <td>Total Floors</td>
  <td>{requirement.total_floors}</td>
</tr>
<tr>
  <td>Bedrooms</td>
  <td>{requirement.bedrooms}</td>
</tr>
<tr>
  <td>Bathrooms</td>
  <td>{requirement.bathrooms}</td>
</tr>
<tr>
  <td>kitchen</td>
  <td>{requirement.kitchen}</td>
</tr>
<tr>
 <td>message</td>
 <td>{requirement.message}</td>
 </tr>
</React.Fragment>
))}
        </tbody>
      </table>
    </div>
    {requests ==='0' &&(
    <div className="col-md-4">
      <div className="form-wrapper form1">
        <label htmlFor="">Architecture</label>
        <div className="form-holder select">
          <select name="architecture_id" onChange={inputChange} className="form-control">
            {category.map((data) => (
              <option key={data._id} value={data._id}>{data.name}</option>
            ))}
          </select>
        </div>
      </div>
      {/* <div className="form-wrapper">
        <label htmlFor="">Project Manager</label>
        <div className="form-holder select">
          <select name="projectmanager_id" onChange={inputChange} className="form-control">
            {manager.map((data) => (
              <option key={data._id} value={data._id}>{data.name}</option>
            ))}
          </select>
        </div>
      </div> */}
      <button type="button" className="btn btn-dark" >
        Reset
      </button>
      <button type="button" className="btn btn-dark" style={{ marginLeft: 20 }} onClick={submit}>
        Continue
      </button>
    </div>
)}
{requests ==='1' && status ==='1' ?
    <div className="col-md-4">
      {/* <div className="form-wrapper">
        <label htmlFor="">Architecture</label>
        <div className="form-holder select">
          <select name="architecture_id" onChange={inputChange} className="form-control">
            {category.map((data) => (
              <option key={data._id} value={data._id}>{data.name}</option>
            ))}
          </select>
        </div>
      </div> */}
      <div className="form-wrapper form2">
        <label htmlFor="">Project Manager</label>
        <div className="form-holder select">
          <select name="projectmanager_id" onChange={inputChange2} className="form-control">
            {manager.map((data) => (
              <option key={data._id} value={data._id}>{data.name}</option>
            ))}
          </select>
        </div>
      </div>
      <button type="button" className="btn btn-dark" >
        Reset
      </button>
      <button type="button" className="btn btn-dark" style={{ marginLeft: 20 }} onClick={submit2}>
        Continue
      </button>
    </div>
:'User not Approved the Given Plan,Then Only Project manager can be assigned!!'}
    <div className="col-md-4">
      <img className="lib-img" src="img/pic/planimg.jpg" alt="Plan" />
    </div>
  </div>
</div>

<PublicUserFooter />
</>
);
};





export default Control;

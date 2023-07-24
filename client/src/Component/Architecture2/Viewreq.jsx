import React, { useEffect, useState } from 'react';
import axios from 'axios'

import { useNavigate, useParams } from 'react-router-dom';

const Viewreq = () => {
  
  const [demands, setDemands] = useState([]);
  const architecture_id = localStorage.getItem('architecture_id')
  console.log(architecture_id);
  const { id,user_id } = useParams();
 

  const navigate = useNavigate()
  const[input,setInput]=useState({})
  // const[plan,setPlan]=useState([])

  const [requirements, setRequirements] = useState([]);
  // console.log(plan);
  console.log(requirements);

  const [file, setFile] = useState('');

  console.log('value==>', input);
  console.log("value==>",file.name);
  console.log("value==>",file);


  const inputChange= (event)=>{
  const{name,value}=event.target 
  setInput({...input,[name]:value,architecture_id:architecture_id,project_id:id,user_id:user_id,planupload_date: new Date()})
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
   
    axios.post('http://localhost:5000/register/plan',input).then((response)=>{
      navigate('')
    })
   

  }
  

  useEffect(() => {
    fetch(`http://localhost:5000/register/view-requirement/${id}`)
      .then((response) => response.json())
      .then((data) => {
        
        if (data.success) {
          
          console.log(data.data);
          setRequirements(data.data);
          setInput({ ...input,user_id: id });
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  useEffect(() => {
      fetch(`http://localhost:5000/register/view-user_reject_msg/${id}`)
        .then((response) => response.json())
        .then((data) => {
          
          if (data.success) {
            
            console.log(data.data);
            setDemands(data.data);
          
          }
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
        });
    }, []);
 
  return (
    <>
    <div className="container" style={{textAlign:'center'}}>
    <div className="row">
    <div className="col-md-6" >
      <table className="table table-striped custab" style={{color:'black'}}>
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

    <div className=" col-md-6" style={{marginTop:'20px',marginBottom:'20px'}} >
    <div className="" >
    <form className="regcontform-detail" action="#" method="post" style={{marginTop:'20px',marginBottom:'20px'}}>
      <h2>Upload Plan</h2>
      <div className="regcontform1-row">
        <label htmlFor="Cost" className='costlabel'> Cost</label>
        <input
          type="text"
          name='Cost' value={input.Cost || ""} onChange={inputChange}
          className="regcontinput-text"
          placeholder=" Cost"
          required=""
        />

        </div>
        <div className="regcontform1-row">
        <label htmlFor="Time_Period"  className='costlabel'>Time_Period</label>
        <input
          type="text"
          name='Time_Period' value={input.Time_Period || ""} onChange={inputChange}
          className="regcontinput-text"
          placeholder=" Time Period"
          required=""
        />

        </div>
        <div className="regcontform1-row" >
        <label htmlFor="full-name"  className='costlabel'>Upload Plan</label>   
  <div className="input-group js-input-file" style={{color:'black'}}>
    <input className="input-file" type="file" name="planimage" id="file"  onChange={(e) => {
      setFile(e.target.files[0]);
      console.log(e.target.files[0].name);
      setInput({ ...input, planimage: e.target.files[0].name });
    }} />
    
  </div>
  {/* <div className="label--desc">
    Upload your CV/Resume or any other relevant file. Max file size 50 MB
  </div> */}
</div>

<div className="regcontform-row-last">
  <input
    type="submit"
    name="register"
    onClick={submit}
    className="register2"
  />
</div>

    </form>
  </div>
</div>
</div>
    </div>



  <div className="container">
  <div className="row">
    <table className="table table-hover table-striped">
      <thead>
        <tr className="thead-dark">
          <th>S. #</th>
          <th>Demands of user</th>
          <th>Date</th>
          {/* <th>Actions</th> */}
        </tr>
      </thead>
      <tbody>
        
      {demands.map((demand) => (
<React.Fragment key={demand._id}>
  <tr>
          <td>1</td>
          <td style={{ maxWidth: 300 }}>
            {/* <h6>Demands</h6> */}
            <em className="text-muted">
            {demand.reject_message}
            </em>
          </td>
          <td>{demand.reject_messagedate}</td>
          {/* <td>
            <a href="#" className="btn btn-warning">
              <i className="fas fa-edit" />
            </a>{" "}
            |
            <a href="#" className="btn btn-danger">
              <i className="fas fa-trash" />
            </a>
          </td> */}
        </tr>
        </React.Fragment>
      ))}
      </tbody>
    </table>
  </div>
</div>


</>
  )
}

export default Viewreq
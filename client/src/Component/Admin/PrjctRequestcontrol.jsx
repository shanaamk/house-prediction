import React, { useEffect, useState } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter'
import Adminnavbar from './Adminnavbar'
import { Link, useNavigate, useParams } from 'react-router-dom';
const PrjctRequestcontrol = () => {

  const { id ,user_id} = useParams();
  const [requirements, setRequirements] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:5000/register/view-requirement/${id}`)
      .then((response) => response.json())
      .then((data) => {
        
        if (data.success) {
          
          console.log(data.data);
          setRequirements(data.data);
         
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
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
      {/* <a href='adminstatus'>Approve Status</a> */}
      <Link to={`/adminstatus/${id}`}><h2 className="title">Approve Status</h2></Link>
        </div>
       
        <div className='col-md-4'>
     <Link to={`/plan/${user_id}`}><button >View plan</button></Link>  
        </div>
        
        </div>
    </div>
    <div className='container'>
    <div className='row text-center'>
        <div className='col-md-12'>
        <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="mt-3">
            
             
               <span className="text2"> 50% of work completed </span>
            
            </div>
          
 
       
            </div> 
      </div>
        </div>
        

<PublicUserFooter/>
 </>
 )
}
export default PrjctRequestcontrol
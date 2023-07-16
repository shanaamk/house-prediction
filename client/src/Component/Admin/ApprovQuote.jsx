import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ApprovQuote = () => {

  const user_id = localStorage.getItem('user_id')
  console.log(user_id);
  const [archreq, setArchreqs] = useState([]);
 
 
  useEffect(() => {
    fetch('http://localhost:5000/register/view-arch-plan-req')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setArchreqs(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);
  
  



  return (
    <div className="container mt-5" style={{marginBottom:50}}>
    <div className="d-flex justify-content-center row">
      <div className="col-md-8">
        <div className="p-3 bg-white text-center" style={{color:'black'}}>
          <div>
            <img src="" />
            <h4>Plan for Aprovel</h4>
          </div>
          <p >
            Follow some beautiful soul who&nbsp;
            <br />
            have some interests like you!
            <br />
            <br />
          </p>
          {archreq
  .filter(archreq => archreq.adminaprvl_status === '0')
  .map((archreq, index) => (
    <>
          <div className="d-flex flex-row justify-content-between align-items-center"  key={index}>
       
            <div className="d-flex flex-row align-items-center">
              <img
                className="rounded-circle"
                src="img/pic/downloadlogo.jpg"
                width={55}
              />
             
              <div className="d-flex flex-column align-items-start ml-2">
                <span className="font-weight-bold">{archreq.architecturename}</span>
                <span className="followers">{archreq.project_name}</span>
              </div>
              </div>
              <div className="d-flex flex-row align-items-center ml-2">
              
                <span className="followers">{archreq.planupload_date}</span>
              </div>
              <Link to={`/plan/${archreq.project_id}`}><button >View plan</button></Link> 
         
         
          </div>
   </>
   ))}
          

        </div>
      </div>
    </div>
  </div>
  )
}

export default ApprovQuote
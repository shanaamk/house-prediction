import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Workersslider = () => {
  
  const user_id = localStorage.getItem('workers_id')
  console.log(user_id);

  const [viewworks, setViewworks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/register/view-projects-toworkers')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setViewworks(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);
  return (
    <>
  <div className="container">
 <div className="row justify-content-center"  style={{color:'black'}}>
   <h2><center>Your Workes</center></h2>
   <div className="[ col-xs-12 col-md-6 col-sm-offset-2 col-sm-8 ]" >
     <ul className="event-list">
     {viewworks.filter(current => current.workers_id === user_id).map((current, index) => (
       <li   key={index}>
         <time dateTime="2014-07-20">
           <span className="day">4</span>
           <span className="month">Jul</span>
           <span className="year">2014</span>
           <span className="time">ALL DAY</span>
         </time>
        
         <div className="info">
           <h2 className="title">{current.project_name}</h2>
           <p className="desc">{current.location}</p>
           
           <ul>
             <li style={{ width: "50%" }}>
               <a href="#website">
                 <span /> status:
               </a>
             </li>
             <li style={{ width: "50%" }}>
               <span className="fa fa-money" />Current Work
             </li>
           </ul>
           <Link to={`/viewteam/${current._id}/${current.project_id}`}> <h6 className="desc"style={{marginLeft:200}}>View Team </h6></Link>
         </div>
         
       </li>
      ))}
     </ul>
   </div>
 </div>
</div>
  
  
   
  
</>



  )
}

export default Workersslider
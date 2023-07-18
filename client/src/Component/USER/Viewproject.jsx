import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Viewproject = () => {

  const user_id = localStorage.getItem('user_id')
  console.log(user_id);

  const [viewprojects, setViewprojects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const viewprojectsPerPage = 10;
 
  useEffect(() => {
    fetch('http://localhost:5000/register/view-project-request')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setViewprojects(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);
  const totalPages = Math.ceil(viewprojects.length / viewprojectsPerPage);
  
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastViewproject= currentPage * viewprojectsPerPage;
  const indexOfFirstViewproject = indexOfLastViewproject - viewprojectsPerPage;
  const currentViewprojects = viewprojects.slice(indexOfFirstViewproject, indexOfLastViewproject);
  
  

  return (
    <>
    
 <div className="container">
 <div className="row justify-content-center"  style={{color:'black'}}>
   <h2><center>Your Projects</center></h2>
   <div className="[ col-xs-12 col-md-6 col-sm-offset-2 col-sm-8 ]" >
  
     <ul className="event-list">
     {currentViewprojects.filter(viewproject => viewproject.user_id.toString() === user_id).map((viewproject, index) => (
       <li   key={index}>
         <time dateTime="2014-07-20">
           <span className="day">4</span>
           <span className="month">Jul</span>
           <span className="year">2014</span>
           <span className="time">ALL DAY</span>
         </time>
        
         <div className="info">
           <Link to={`/userviewplan/${viewproject._id}`}><h2 className="title">{viewproject.project_name}</h2></Link>
           
           <p className="desc">{viewproject.location}</p>
           <ul>
             <li style={{ width: "50%" }}>
               <a href="#website">
                 <span /> Estimate Cost
               </a>
             </li>
             <li style={{ width: "50%" }}>
               <span className="fa fa-money" />Rs.1476000/-
             </li>
           </ul>
           <h2 className="desc"style={{marginLeft:270}}>  <Link to={`/Status/${viewproject._id}`}><h2 className="title">View status</h2></Link> </h2>
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

export default Viewproject
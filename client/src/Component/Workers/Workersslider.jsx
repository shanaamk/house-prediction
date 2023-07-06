import React from 'react'

const Workersslider = () => {
  return (
    <>
  <div className="container">
 <div className="row justify-content-center"  style={{color:'black'}}>
   <h2><center>Your Workes</center></h2>
   <div className="[ col-xs-12 col-md-6 col-sm-offset-2 col-sm-8 ]" >
     <ul className="event-list">
       <li>
         <time dateTime="2014-07-20">
           <span className="day">4</span>
           <span className="month">Jul</span>
           <span className="year">2014</span>
           <span className="time">ALL DAY</span>
         </time>
        
         <div className="info">
           <h2 className="title">Project name</h2>
           <p className="desc">Srarting Date</p>
           <p className="desc">Dead line</p>
           {/* <p className="desc">Kalpakanchery </p> */}
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
           <h2 className="desc"style={{marginLeft:200}}><a href='viewteam'>View Team</a> </h2>
         </div>
         
       </li>
       <li>
         <time dateTime="2014-07-20 0000">
           <span className="day">8</span>
           <span className="month">Jul</span>
           <span className="year">2014</span>
           <span className="time">12:00 AM</span>
         </time>
         <div className="info">
           <h2 className="title">Project name</h2>
           <p className="desc">Tirur</p>
           <ul>
             <li style={{ width: "50%" }}>
               <a href="#website">
                 <span /> Status:
               </a>
             </li>
             <li style={{ width: "50%" }}>
               <span className="fa fa-money" /> Upcoming
             </li>
           </ul>
           <h2 className="desc"style={{marginLeft:200}}><a href='viewteam'>View Team</a> </h2>
         </div>
         
       </li>
       
      
     </ul>
   </div>
 </div>
</div>
  
  
   
  
</>



  )
}

export default Workersslider
import React from 'react'

const Viewproject = () => {
  return (
    <>
    <div className="container">
  <div className="row"  style={{color:'black'}}>
    <h2>your projects</h2>
    <div className="[ col-xs-12 col-sm-offset-2 col-sm-8 ]" >
      <ul className="event-list">
        <li>
          <time dateTime="2014-07-20">
            <span className="day">4</span>
            <span className="month">Jul</span>
            <span className="year">2014</span>
            <span className="time">ALL DAY</span>
          </time>
         
          <div className="row">
            <div className='col-md-12 text-center'>
            <h2 className="title"><a href='userreq'>Create Project </a></h2>
            </div>
          </div>
          
        </li>
      </ul>
    </div>
  </div>
</div>
 <div className="container">
 <div className="row"  style={{color:'black'}}>
   <h2>your projects</h2>
   <div className="[ col-xs-12 col-sm-offset-2 col-sm-8 ]" >
     <ul className="event-list">
       <li>
         <time dateTime="2014-07-20">
           <span className="day">4</span>
           <span className="month">Jul</span>
           <span className="year">2014</span>
           <span className="time">ALL DAY</span>
         </time>
        
         <div className="info">
           <h2 className="title"><a href='Userviewplan'>Project name</a></h2>
           <p className="desc">location </p>
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
           <h2 className="title">Project name2</h2>
           <p className="desc">location2</p>
           <ul>
             <li style={{ width: "50%" }}>
               <a href="#website">
                 <span /> text2
               </a>
             </li>
             <li style={{ width: "50%" }}>
               <span className="fa fa-money" /> $39.99
             </li>
           </ul>
         </div>
         
       </li>
       
      
     </ul>
   </div>
 </div>
</div>
</>

  )
}

export default Viewproject
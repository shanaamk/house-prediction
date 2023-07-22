import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Workersviewteam = () => {

  const { id} = useParams();
  const user_id = localStorage.getItem('user_id')
  console.log(user_id);

  const [viewteams, setViewteams] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/register/view-projects-toworkers')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setViewteams(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
  //   <section id="leadership">
  //   <div className="container">
  //   <div className="row">
  //   <div className="col-6 col-md-6 offset-lg-2 col-lg-4">
       
  //   <h3>Team With you</h3>
    
  //   </div>
  //   </div>
  //     <div className="row">
    
  //       <div className="col-12 col-md-6 offset-lg-2 col-lg-4">
            
  //         <div className="accordion" id="accordionLeaders">
  //           <div className="card">
  //             <div className="accordion-group">
  //               <div className="card-header">
  //                 <a
  //                   className="accordion-toggle"
  //                   data-toggle="collapse"
  //                   data-parent="#accordionLeaders"
  //                   href="#leader1"
  //                 >
  //                   <div className="media">
  //                     <img
  //                       src="http://bit.ly/2IirA9e"
  //                       className="mr-3 rounded-circle"
  //                       alt="..."
  //                     />
  //                     {viewteams.map((view, index) => (
        
  //                     <div className="media-body">
  //                       <h6 className="mt-2">{view.name}</h6>
  //                       <p>{view.worktype}</p>
  //                     </div>
  //                       ))}
  //                   </div>
  //                 </a>
                 
  //               </div>
              
  //               <div
  //                 id="leader1"
  //                 className="accordion-body in collapse"
  //                 style={{ height: "auto" }}
  //               >
  //                 <div className="card-body">brief</div>
  //               </div>
  //             </div>
  //           </div>
           
           
  //         </div>
  //       </div>
        
            
         
  //     </div>
  //   </div>
  // </section>
  
  <section id="leadership">
  <div className="container">
  <div className="row">
  <div className="col-6 col-md-6 offset-lg-2 col-lg-4">
     
  <h3>Team With you</h3>
  
  </div>
  </div>
    <div className="row">
  
      <div className="col-12 col-md-6 offset-lg-2 col-lg-4">
          
        <div className="accordion" id="accordionLeaders">



        {viewteams.filter(current => current._id === id).map((view, index) => (


       
          <div className="card"  key={index}>
            <div className="accordion-group">
              <div className="card-header">
                <a
                  className="accordion-toggle"
                  data-toggle="collapse"
                  data-parent="#accordionLeaders2"
                  href="#leader5"
                >
                  <div className="media">
                    <img
                      src="http://bit.ly/2IirA9e"
                      className="mr-3 rounded-circle"
                      alt="..."
                    />
                    <div className="media-body">
                      <h5 className="mt-2"> {view.name}</h5>
                      <p>{view.worktype}</p>
                    </div>
                  </div>
                </a>
              </div>
              <div
                id="leader5"
                className="accordion-body collapse"
                style={{ height: 0 }}
              >
                <div className="card-body">Brief</div>
              </div>
            </div>
          </div>
  ))}




          
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Workersviewteam
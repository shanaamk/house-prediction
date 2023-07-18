import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Projectstatus = () => {

  const { id} = useParams();

  const user_id = localStorage.getItem('user_id')
  console.log(user_id);

  const [viewworks, setViewworks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/workstatus/view_update_workstatus/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
         
          setViewworks(data.data);
         console.log(data.data);
        //  navigate('');
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);



  return (
    <div className="container py-5">
  <div className="row" style={{color:'black'}}>
  <h3><center>Work Updations</center></h3>
    <div className="col-md-12">

      <div id="content">
        <ul className="timeline-1 text-black">
        {viewworks.map((viewwork) => (
                        <React.Fragment key={viewwork.project_id}>
          <li className="event" data-date={viewwork.status_date}>
            <h4 className="mb-3"> {viewwork.work_status}</h4> 
            <p>
            {viewwork.status_description}
            </p>
          </li>
         
          </React.Fragment>
           ))}
        </ul>
      </div>
    </div>
  </div>
</div>
  )
}

export default Projectstatus
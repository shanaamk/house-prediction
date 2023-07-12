import React, { useState } from 'react'
import axios from 'axios';


const ViewPlan = () => {
  // const user_id = localStorage.getItem('user_id')
  // console.log(user_id);


  const approve = (id=1) => {
    axios
      .get(`http://localhost:5000/register/approve/${id}`)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container">
    <div className="row">
      <h4>
        Plan Detailes
        {/* So I've worked on a new project and came up with this UI. Here you can use
        it. :) Follow me on twitter:{" "} */}
        <a href="https://twitter.com/AlexMahrt/"></a>
      </h4>
    </div>
    <hr />
    <div className="row row-margin-bottom">
      <div className="col-md-12 no-padding lib-item" data-category="view">
        <div className="lib-panel">
          <div className="row box-shadow">
          </div>
        </div>
      </div>
      <div className="col-md-3" />
      <div className="col-md-12 no-padding lib-item" data-category="ui">
        <div className="lib-panel">
          <div className="row box-shadow">
            <div className="col-md-6">
              <img
                className="lib-img"
                src="img\pic\userhomepageimage.jpg"
              />
            </div>
            <div className="col-md-6">
            <img
                className="lib-img"
                src="img\pic\planimg.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='col-md-12 text-center'>
        <h1>Rs 9874512/-</h1>
    </div>
    <div className='row'>
    <div className='col-md-3'></div>
      <div className='col-md-3'>
      <button className='btn btn-success'  onClick={() => {
                    approve();
                  }}>Approve</button>
   
      </div>
      <div className='col-md-3'> 
      <button className='btn btn-danger'>Disapprove</button></div>

     
                          
                        
      
      <div className='col-md-3'></div>
    </div>
   
    
  </div>
  
  
  )
}

export default ViewPlan
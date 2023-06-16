import React from 'react'

const ViewPlan = () => {
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
      <button className='btn btn-success'>Approve</button>
   
      </div>
      <div className='col-md-3'> 
      <button className='btn btn-danger'>Disapprove</button></div>
      
      <div className='col-md-3'></div>
    </div>
   
    
  </div>
  
  
  )
}

export default ViewPlan
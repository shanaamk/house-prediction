import React from 'react'

const Viewcv = () => {
  return (
    <>
    <div className="container">
    <div className="row">
      <h4>
       cv Detailes
        {/* So I've worked on a new project and came up with this UI. Here you can use
        it. :) Follow me on twitter:{" "} */}
        <a href="https://twitter.com/AlexMahrt/"></a>
      </h4>
    </div>
    <hr />
    <div className="row row-margin-bottom justify-content-center">

            <div className="col-md-4">
              <img
                className="lib-img"
                src="img/pic/cvimage.jpg"
              />
               <button className='btn btn-success'>Accept</button>
               <button className='btn btn-danger'>Reject</button> 
            </div>
            </div>
            </div>
         
           </>
  )
}

export default Viewcv
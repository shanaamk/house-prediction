import React from 'react'
import Usernavbar from './Usernavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Viewrentdetailes = () => {
  return (
    <>
    <Usernavbar/>
       
    <div className="chatboxcontainer mb-5 ">
  <h1 className="text-center"> Rent Property</h1>
  <div className="card">
    <img
      src="img\blog-1.jpg"
      className="card-img-top"
      alt="Rental Property Image"
    />
    <div className="card-body">
      <h5 className="card-title">Beautiful House for Rent</h5>
      <p className="card-text" style={{color:'black',}}>
        Spacious 3-bedroom house located in a peaceful neighborhood.
      </p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <strong>Price:</strong> $2000/month
      </li>
      <li className="list-group-item">
        <strong>Location:</strong> City, State
      </li>
      <li className="list-group-item">
        <strong>Bedrooms:</strong> 3
      </li>
      <li className="list-group-item">
        <strong>Bathrooms:</strong> 2
      </li>
      <li className="list-group-item">
        <strong>Area:</strong> 1500 sq. ft.
      </li>
    </ul>
    <div className="card-body">
      <div className="text-center">
       <a className="btn btn-primary">
          Contact Me
        </a>
      </div>
      {/* <a href="#" class="card-link">View More</a> */}
    </div>
  </div>
</div>
<PublicUserFooter/>
 </>

  )
}

export default Viewrentdetailes
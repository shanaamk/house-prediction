import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Usernavbar from './Usernavbar';
import PublicUserFooter from '../Footer/PublicUserFooter';
import { useParams } from 'react-router-dom';

const Viewrentdetailes = () => {
  const [rental, setRental] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchRentalDetails();
  }, []);

  const fetchRentalDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/register/view-rent/${id}`);
      const { data } = response.data;
      setRental(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!rental) {
    return null; // Render loading state or handle the case when rental is not found
  }

  return (
    <>
      <Usernavbar />
      <div className="chatboxcontainer mb-5">
        <h1 className="text-center">Rent Property</h1>
        {rental.map((rental) => (
          <div className="card" key={rental._id}>
            <img src={`/assets/upload/${rental.rentimage}`} className="card-img-top" alt="Rental Property Image" />
            <div className="card-body">
              <h5 className="card-title">{rental.title}</h5>
              <p className="card-text" style={{ color: 'black' }}>
                {rental.description}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Price:</strong> {rental.price}
              </li>
              <li className="list-group-item">
                <strong>Location:</strong> {rental.location}
              </li>
              <li className="list-group-item">
                <strong>Bedrooms:</strong> {rental.bedrooms}
              </li>
              <li className="list-group-item">
                <strong>Bathrooms:</strong> {rental.bathrooms}
              </li>
              <li className="list-group-item">
                <strong>Area:</strong> {rental.area}
              </li>
              <li className="list-group-item">
                <strong>Contact us:234555555</strong> {rental.contact}
              </li>
              <li className="list-group-item">
                <strong>Email:shana@gmail.com</strong> {rental.email}
              </li>
            </ul>
          </div>
        ))}
      </div>
      <PublicUserFooter />
    </>
  );
};

export default Viewrentdetailes;

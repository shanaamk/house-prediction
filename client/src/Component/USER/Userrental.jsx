import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Userrental = () => {
  const [rentals, setRentals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRentals, setFilteredRentals] = useState([]);

  useEffect(() => {
    fetchRentals();
  }, []);

  useEffect(() => {
    filterRentals();
  }, [rentals, searchTerm]);

  const fetchRentals = async () => {
    try {
      const response = await axios.get('http://localhost:5000/register/view-rent');
      const { data } = response.data;
      setRentals(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterRentals = () => {
    const filtered = rentals.filter((rental) => {
      const title = rental.title ? rental.title.toLowerCase() : '';
      const location = rental.location ? rental.location.toLowerCase() : '';
      return title.includes(searchTerm.toLowerCase()) || location.includes(searchTerm.toLowerCase());
    });
    setFilteredRentals(filtered);
  };

  return (
    <div className="container-fluid bg-light py-6 px-5" id="Rental">
      {/* Rental properties heading */}
      <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
        <h2 className="display-5 text-uppercase mb-4">
          <i>
            Find the <span className="text-primary">Latest</span> Homes for Rent
          </i>
        </h2>
      </div>

      {/* Filter buttons */}
      <div className="row gx-5">
        <div className="col-12 text-center">
          <div className="d-inline-block bg-dark-radial text-center pt-4 px-5 mb-5">
            {/* Filter buttons */}
            <ul className="list-inline mb-0" id="portfolio-flters">
              {/* Filter button for all rentals */}
              <li className="btn btn-outline-primary bg-white p-2 active mx-2 mb-4" data-filter="*">
                <img src="img/portfolio-1.jpg" style={{ width: 150, height: 100 }} alt="" />
              </li>
              {/* Additional filter buttons */}
              {/* <li className="btn btn-outline-primary bg-white p-2 mx-2 mb-4" data-filter=".second">
                <img src="img/portfolio-3.jpg" style={{ width: 150, height: 100 }} alt="" />
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Search bar */}
      <div className="row gx-5 mb-4">
        <div className="col-12 text-center">
          <input
            type="text"
            placeholder="Search by title or location"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* Rental properties */}
      <div className="row g-5 portfolio-container">
        {filteredRentals.map((rental) => (
          <div className="col-xl-4 col-lg-6 col-md-6 portfolio-item" key={rental._id}>
            <div className="position-relative portfolio-box">
              {/* Rental property image */}
              <img className="img-fluid w-100" src={`/upload/${rental.rentimage}`} alt="" />
              {/* Rental property details */}
              <Link to={`/viewrent/${rental._id}`} className="portfolio-title shadow-sm">
                <p className="h4 text-uppercase">{rental.title}</p>
                <span className="text-body">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  {rental.location}, {rental.price}, {rental.propertyname}
                </span>
              </Link>
              {/* View more button */}
              <a className="portfolio-btn" href={rental.image} data-lightbox="portfolio">
                <i className="bi bi-plus text-white" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Userrental;

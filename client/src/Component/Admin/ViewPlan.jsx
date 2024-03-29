import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ViewPlan = () => {
  const { id } = useParams();
  const [plan, setPlan] = useState([]);
  const navigate = useNavigate();
  console.log(plan[0]?.planimage);
  
  const approve = (id) => {
    axios
      .get(`http://localhost:5000/register/approve-plan/${id}`)
      .then((response) => {
        console.log(response.data);
      
        navigate('/Quote'); 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reject = (id) => {
    axios
      .get(`http://localhost:5000/register/reject-plan/${id}`)
      .then((response) => {
        console.log(response.data);
      
        navigate('/Quote');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/register/view-plan/${id}`
        );
        const data = await response.json();

        if (data.success) {
          console.log(data.data);
          setPlan(data.data);
        }
      } catch (error) {
        console.error('Error fetching plan:', error);
      }
    };

    fetchPlan();
  }, []);

 

  return (
    <div className="container">
      <div className="row" style={{marginTop:20}}>
        <h3>
         <center> HOUSE PLAN </center>
         
        </h3>
      </div>
      <hr />
      <div className="row row-margin-bottom">
        <div className="col-md-12 no-padding lib-item" data-category="view">
          <div className="lib-panel">
            <div className="row box-shadow"></div>
          </div>
        </div>
        <div className="col-md-3" />
        <div className="col-md-6 no-padding lib-item" data-category="ui">
          <div className="lib-panel">
            <div className="row box-shadow">
              {/* <div className="col-md-6">
                <img className="lib-img" src="img/pic/userhomepageimage.jpg" alt="User Homepage" />
              </div> */}
              <div className="col-md-12">
                <img className="lib-img" src={`/assets/upload/${plan[0]?.planimage}`} alt="Plan" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 text-center">
        <h1>Rs {plan[0]?.cost}/-</h1>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
      {plan[0]?.adminaprvl_status==0?
      <>
      <div className="col-md-3">
          <button className="btn btn-success" onClick={() => approve(plan[0]?.project_id)}>
            Approve
          </button>
        </div>
        <div className="col-md-3">
          <button className="btn btn-danger" onClick={() => reject(plan[0]?.project_id)}>Disapprove</button>
        </div>
        </>
        :''

      
    }
        

        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default ViewPlan;

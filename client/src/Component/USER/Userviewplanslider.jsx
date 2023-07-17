import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Userviewplanslider = () => {
  const { id } = useParams();
  const user_id = localStorage.getItem('user_id');

  const [plan, setPlan] = useState([]);
  const [input, setInput] = useState({});
  const [requirements, setRequirements] = useState([]);
  const [showUploadForm, setShowUploadForm] = useState(false);

  const navigate = useNavigate();

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput({ ...input, [name]: value ,reject_messagedate:new Date()});
  };

  const registersubmit = (event) => {
    event.preventDefault();
    // axios.post('http://localhost:5000/register/plan', input).then((response) => {
    //   // navigate('')
    // });
  };

  const handlerejectClick = () => {
    setShowUploadForm(true);
  };

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const response = await fetch(`http://localhost:5000/register/userview-plan/${id}`);
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

  useEffect(() => {
    fetch(`http://localhost:5000/register/view-requirement/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data.data);
          setRequirements(data.data);
          // setInput({ ...input, user_id: id });
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/register/userview-plan/${user_id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.success) {
  //         console.log(data.data);
  //         setPlan(data.data);
  //         setInput({ ...input, user_id: id, });
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching users:', error);
  //     });
  // }, []);

  const userreject = (project_id) => {
    axios
      .post(`http://localhost:5000/register/user_reject_msg/${project_id}`,input)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const useraccept = (user_id) => {
    axios
      .get(`http://localhost:5000/register/useraccept-plan/${id}`)
      .then((response) => {
        console.log(response.data);
        navigate('/userview');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <h4>
            Plan Details
            {/* So I've worked on a new project and came up with this UI. Here you can use
        it. :) Follow me on twitter:{" "} */}
            <a href="https://twitter.com/AlexMahrt/"></a>
          </h4>
        </div>
        <hr />
        <div className="row row-margin-bottom">
          <div className="col-md-12 no-padding lib-item" data-category="view">
            <div className="lib-panel">
              <div className="row box-shadow"></div>
            </div>
          </div>
          <div className="col-md-4" />
          <div className="col-md-12 no-padding lib-item" data-category="ui">
            <div className="lib-panel">
              <div className="row box-shadow">
                <div className="col-md-4">
                {plan[0]?.adminaprvl_status !== undefined && plan[0]?.useraprvl_status !== '2' && (
  <img className="lib-img" src={`/assets/upload/${plan[0]?.planimage}`} />
)}

                </div>
                {/* <div className="col-md-4">
              <img
                className="lib-img"
                src="img/pic/planimg.jpg"
              />
            </div> */}

                <div className="col-md-4">
                  <table className="table table-striped custab" style={{ color: 'black' }}>
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Values</th>
                      </tr>
                    </thead>
                    <tbody>
                      {requirements.map((requirement) => (
                        <React.Fragment key={requirement._id}>
                          <tr>
                            <td style={{ color: 'black' }}>size(sq.ft)</td>
                            <td>{requirement.size_sqft}</td>
                          </tr>
                          <tr>
                            <td>Balcony</td>
                            <td>{requirement.balcony}</td>
                          </tr>
                          <tr>
                            <td>Total Floors</td>
                            <td>{requirement.total_floors}</td>
                          </tr>
                          <tr>
                            <td>Bedrooms</td>
                            <td>{requirement.bedrooms}</td>
                          </tr>
                          <tr>
                            <td>Bathrooms</td>
                            <td>{requirement.bathrooms}</td>
                          </tr>
                          <tr>
                            <td>kitchen</td>
                            <td>{requirement.kitchen}</td>
                          </tr>
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                  <div className="col-md-12 text-center">
                    <h6>
                      {plan[0]?.adminaprvl_status === undefined && plan[0]?.useraprvl_status === '0'
                        ? 'Architecture is working on your Requirements, wait till then'
                        : 'Rs:' + (plan[0]?.cost + '/-' ?? '')}

                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3"></div>
            {plan[0]?.adminaprvl_status !== undefined && plan[0]?.useraprvl_status === '0' && (
  <div className="col-md-3">
    <div className="col-md-3 text-center">
      <button className="btn btn-success" onClick={() => useraccept(plan[0]?._id)}>Accept</button>
    </div>
    <div className="col-md-3 text-center">
      <button className="btn btn-danger" onClick={handlerejectClick}>Reject</button>
    </div>
  </div>
 )}

            {/* </>
        //      :
        //      plan[0]?.status==2?
        //      <button className="btn btn-success" onClick={() => useraccept(plan[0]?._id)}>
        //     Accepted
        //    </button>:
        //     <button className="btn btn-success" onClick={() => useraccept(plan[0]?._id)}>
        //     Rejected
        //   </button>
        //  } */}
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
      {showUploadForm ? (
        <div className="formthree ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-4 col-md-4">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <form onSubmit={registersubmit} acceptCharset="UTF-8" action="" method="POST">
                      <textarea
                        className="5"
                        name="reject_message"
                        value={input.reject_message || ''}
                        onChange={setRegister}
                        placeholder="Type in your message"
                        rows={5}
                        cols={40}
                        style={{ marginBottom: 10 }}
                        defaultValue={''}
                      />
                      <button className="btn btn-info" type="submit"  onClick={()=>{userreject(plan[0]?._id)}}>
                        Reject with this Message
                      </button>
                      {/* plan[0]?.status==2? */}
        {/* <button className="btn btn-success" onClick={() => useraccept(plan[0]?.user_id)}>
        Accepted
      </button>: */}
       {/* <button className="btn btn-success" onClick={() => useraccept(plan[0]?._id)}>
       Rejected
     </button> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Userviewplanslider;

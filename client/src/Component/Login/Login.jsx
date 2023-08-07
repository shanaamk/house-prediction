import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({});
  const [error, setError] = useState('');

  const inputChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    axios
      .post('http://localhost:5000/login/login', input)
      .then((data) => {
        console.log(data);
        if (data.data.role === '1') {
          localStorage.setItem('user_id', data.data.user_id);
          localStorage.setItem('login_id', data.data.login_id);
          localStorage.setItem('role', data.data.role);
          localStorage.setItem('name', data.data.name);
          navigate('/userhome');
        } else if (data.data.role === '2') {
          localStorage.setItem('architecture_id', data.data.architecture_id);
          localStorage.setItem('login_id', data.data.login_id);
          localStorage.setItem('role', data.data.role);
          navigate('/architecturehome');
        } else if (data.data.role === '3') {
          localStorage.setItem('projectmanager_id', data.data.projectmanager_id);
          localStorage.setItem('login_id', data.data.login_id);
          localStorage.setItem('role', data.data.role);
          navigate('/projectmanagerhome');
        } else if (data.data.role === '4') {
          localStorage.setItem('workers_id', data.data.workers_id);
          localStorage.setItem('login_id', data.data.login_id);
          localStorage.setItem('role', data.data.role);
          navigate('/workershome');
        }
        else if (data.data.role === '0') {
          localStorage.setItem('login_id', data.data.login_id);
          localStorage.setItem('role', data.data.role);
          navigate('/adminhome');
        }
       
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      });
  };

  const validateForm = () => {
    if (!input.Username || !input.Password) {
      setError('Please fill in all fields.');
      return false;
    }
    return true;
  };

  return (
    <>
      <div className="page-content">
      <ToastContainer/>
        <div className="regcontform-v5-content">
          <form className="regcontform-detail" action="#" method="post">
            <h2 style={{ marginTop: '20px' }}>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="regcontform-row">
              <label htmlFor="full-name"> User Name</label>
              <input
                type="text"
                name="Username"
                onChange={inputChange}
                className="regcontinput-text"
                placeholder="Your User Name"
                required
              />
            </div>
            <div className="regcontform-row">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="Password"
                onChange={inputChange}
                className="input-text"
                placeholder="Your Password"
                required
              />
            </div>
            <p>
              Don't have an Account? <a href="/"> Register</a>
            </p>
            <br />
            {/* <p style={{ marginTop: '-20px' }}>
              <a href="">Forgot Password?</a>
            </p> */}
            <div className="regcontform-row-last">
              <button className="register" onClick={submit}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

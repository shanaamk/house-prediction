import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Usernavbar from './Usernavbar';
import PublicUserFooter from '../Footer/PublicUserFooter';

const QuestionCarousel = () => {
    const user_id = localStorage.getItem('user_id')
    const navigate = useNavigate()

const [outputs, setOutputs] = useState([]);

    const [inputs, setInputs] = useState({
      user_id:user_id
    });
    console.log("value==>",inputs);

    const setRegister = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs({ ...inputs, [name]: value });
      console.log(inputs);
    }
  
   

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);

    const questions = [
      {
        id: 1,
        question: 'Where Are You Planning To Build?',
        type: 'single',
        name: 'Location'
      },
      {
        id: 2,
        question: 'When Are You Planning To Start Construction?',
        type: 'multiple',
        options: ['Immediately', 'In 3 Months', 'In 6 Months', 'More Than 6 Months'],
        name: 'prjctstrt_drtn'
      },
      {
        id: 3,
        question: 'What is Your Budget?',
        type: 'multiple',
        options: ['Enter here','50L-1CR', '1 CR-1.5 CR', '1.5 CR-2 CR', 'ABOVE 2 CR'],
        name: 'expctd_budget'
      },
      {
        id: 4,
        question: 'Are You Sure You Want To Create A New Project?',
        type: 'single',
        name: 'confirmation'
      },
      {
        id: 5,
        question: 'Project Name:',
        type: 'single',
        name: 'project_name'
      },
    ];
    const registersubmit = (event) => {
      event.preventDefault();
      console.log("data", inputs);
      event.preventDefault()
       
      
    }
    const handleNext = () => {
      setCurrentQuestion(currentQuestion + 1);
    };

    const handlePrevious = () => {
      setCurrentQuestion(currentQuestion - 1);
    };

    const handleAnswer = (answer) => {
      const updatedAnswers = [...answers];
      updatedAnswers[currentQuestion] = answer;
      setAnswers(updatedAnswers);
    };

    const handleSubmit = () => {
      // Process the submitted answers
      console.log('Submitted answers:', answers);
    
      // Add the project_status and project_date to the inputs object
      const updatedInputs = {
        ...inputs,
        project_status: "created",
        register_date: new Date()
      };
      console.log(updatedInputs);
      axios.post('http://localhost:5000/register/add-project', updatedInputs)
        .then((response) => {
          console.log(response);
          
          navigate('/userreq/');
        })
        .catch((error) => {
          console.error(error);
          // Handle any errors that occur during the request
        });
    };
    

    const renderQuestion = () => {
      const question = questions[currentQuestion];
      const { id, question: questionText, type, options, name } = question;

      return (
        <form onSubmit={registersubmit} className="">
          <div className="qstnquestion-container" key={id}>
            <h3>{questionText}</h3>
            {type === 'multiple' ? (
              <select
                name={name}
                value={inputs[name] || ""}
                onChange={(e) => {
                  setRegister(e);
                  handleAnswer(e.target.value);
                }}
                className="qstnselect-field"
              >
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                name={name}
                value={inputs[name] || ""}
                onChange={(e) => {
                  setRegister(e);
                  handleAnswer(e.target.value);
                }}
                className="qstninput-text"
                placeholder="Enter your answer"
              />
            )}
          </div>
        </form>
      );
    };

    return (
     
      <>
        <Usernavbar />
        <div className="qstncarousel-container">
          {currentQuestion > 0 && (
            <button className="nav-button" onClick={handlePrevious}>
              Previous
            </button>
          )}

          {renderQuestion()}

          {currentQuestion < questions.length - 1 ? (
            <button className="qstnnav-button" onClick={handleNext}>
              Next
            </button>
          ) : (
            <button className="qstnsubmit-button" onClick={handleSubmit}>
              <a href=''>Submit</a>
            </button>
          )}
        </div>
        <PublicUserFooter />
      </>
    );
};

export default QuestionCarousel;

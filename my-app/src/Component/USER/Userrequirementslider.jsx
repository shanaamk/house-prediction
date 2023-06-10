
// import React from 'react'

// const Userrequirementslider = () => {
//   return (
//     <>
//    

//   <div className="container" >
//     <div className='row' style={{marginTop:20}}>
//       <div className='col-md-12 text-center'>
//       <h2>if you have a plan?</h2>
//       <button className='btn btn-success' onclick="formhide()">    
//       yes
//       </button>
      
//     <button className='btn btn-danger'onclick="formhide()">
//     no
//     </button>
    
     
    
//       </div>
//     </div>
    
    
//   </div>
//   <div id='no'>
//   
//   </div>


  

// <div id='no'>
//     
//   </>
  

//   )
// }

// export default Userrequirementslider

import React, { useState } from 'react';

const Userrequirementslider = () => {
  const [showUploadForm, setShowUploadForm] = useState(false);

  const handleYesButtonClick = () => {
    setShowUploadForm(true);
    setshowRequirementForm(false);
  };
  const [showRequirementForm, setshowRequirementForm] = useState(false);

  const handleNoButtonClick = () => {
    setshowRequirementForm(true);
    setShowUploadForm(false);
  };

  return (
    <>
      <div className="container">
     <h5>How it works</h5>
   <div className="process">
     <div className="process-row" style={{color:'black'}}>
       <div className="process-step" >
         <button
           type="button"
          className="btn btn-default btn-circle"
           disabled="disabled"
         >
          <i className="fa fa-user fa-3x" />
         </button>
         <p>Build project</p>
       </div>
       <div className="process-step">
         <button
           type="button"
           className="btn btn-default btn-circle"
         disabled="disabled"
         >
           <i className="fa fa-user fa-3x" />
         </button>
         <p>Go with a plan</p>
       </div>
       <div className="process-step">
         <button
           type="button"
                      className="btn btn-default btn-circle"
           disabled="disabled"
         >
           <i className="fa fa-thumbs-up fa-3x" />
         </button>
         <p>View work Status</p>
       </div>
       <div className="process-step">
         <button
           type="button"
           className="btn btn-success btn-circle"
           disabled="disabled"
         >
           <i className="fa fa-user fa-3x" />
         </button>
         <p>You pay after Work over</p>
       </div>
     </div>
   </div>
  
</div>
        
      

      <div className="container">
        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-md-12 text-center">
            <h2>if you have a plan?</h2>
            <button className="btn btn-success" onClick={handleYesButtonClick}>
              yes
            </button>
            <button className="btn btn-danger" onClick={handleNoButtonClick}>
              no
            </button>
          </div>
        </div>
      </div>

      {showUploadForm ? (
        <div className='row'>
             <div className='col-md-12 d-flex justify-content-center align-items-center'>
             <div className="regcontform-v5-content" style={{backgroundColor: 'whitesmoke'}}>
             <form className="regcontform-detail" method="post">
              <h2>Upload Plan</h2>
              
                <div className="value">
                <label htmlFor="full-name">Upload Plan</label>   
          <div className="input-group js-input-file">
             <input className="input-file" type="file" name="file_cv" id="file" />
             <label className="label--file" htmlFor="file">
              Choose file
            </label>
             <span className="input-file__info">No file chosen</span>
           </div>
           {/* <div className="label--desc">
        //     Upload your CV/Resume or any other relevant file. Max file size 50 MB
        //   </div> */}
         </div>
        
        
               <div className="regcontform-row-last">
                <input
                  type="submit"
                  name="register"
                  className="register"
                  defaultValue="Register"
                  
                />
              </div>
            </form>
          </div>
            </div>
          </div>
      ) : null}

      {/* Requirement collection form */}
      {showRequirementForm ? (
       <div className="container" >
           <div style={{ display: "flex", width: "100%",color:'black',marginTop:20,marginBottom:20}}>
              
             <form className="formrequirement">
             <h3>REQUIREMENT COLLECTION</h3><br></br>
               <div style={{ width: "100%" ,}}>
                 <p>size(sq.ft)</p>
                 <input name="name" className="inputfield" autofocus="" />
               </div>
               <div style={{ width: "100%" }}>
                 <p>Balcony</p>
                 <input name="id" className="inputfield" />
               </div>
               <div style={{ width: "100%" }}>
                 <p>Total Floors</p>
                 <input name="email" className="inputfield" />
               </div>
               <div style={{ width: "100%" }}>
                 <p>Bedrooms</p>
                 <input name="phone" className="inputfield" />
               </div>
               <div style={{ width: "100%" }}>
                 <p>Bathrooms</p>
                 <input name="phone" className="inputfield" />
               </div>
               <div style={{ width: "100%" }}>
                 <p>kitchen</p>
                 <input name="phone" className="inputfield" />
               </div>
               <div style={{ width: "100%" }}>
                  <textarea
            
                </div>
               
         <button type="button" className="btn btn-dark" >
           Reset
         </button>
         <button type="button" className="btn btn-dark" style={{marginLeft:20}}>
           Continue
         </button>
       
       
             </form>
           </div>
           </div>
      ) : null}
  </>
  );
};

export default Userrequirementslider;

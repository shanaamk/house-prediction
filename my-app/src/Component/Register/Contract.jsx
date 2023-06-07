import React from 'react'

const Contract = () => {
  return (
    <div className="page-content">
  <div className="regcontform-v5-content">
    <form className="regcontform-detail" action="#" method="post">
      <h2>Apply for job</h2>
      <div className="regcontform-row">
        <label htmlFor="full-name">Full Name</label>
        <input
          type="text"
          name="full-name"
          id="full-name"
          className="regcontinput-text"
          placeholder="Your Name"
          required=""
        />
       
      </div>
      <div className="regcontform-row">
        <label htmlFor="your-email">Your Email</label>
        <input
          type="text"
          name="your-email"
          id="your-email"
          className="regcontinput-text"
          placeholder="Your Email"
          required=""
          pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
        />
       
      </div>
      <div className="regcontform-row">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="input-text"
          placeholder="Your Password"
          required=""
        />
   
      </div>
      <div className="regcontform-row">
        <label htmlFor="full-name">Work Type</label>
        <select name="cars" className="worktype">
            <option selected="">Select work category</option>
            <option value="Painter">painter</option>
            <option value="Plumber">plumber</option>
            <option value="Flooring">flooring</option>
          </select>
        </div><br></br>

        <div className="value">
        <label htmlFor="full-name">Appload C.V</label>   
  <div className="input-group js-input-file">
    <input className="input-file" type="file" name="file_cv" id="file" />
    <label className="label--file" htmlFor="file">
      Choose file
    </label>
    <span className="input-file__info">No file chosen</span>
  </div>
  {/* <div className="label--desc">
    Upload your CV/Resume or any other relevant file. Max file size 50 MB
  </div> */}
</div>

      <div className="regcontform-row-last">
        <button  className="register">
        submit         
          </button>
      </div>
    </form>
  </div>
</div>

  )
}

export default Contract
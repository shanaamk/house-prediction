import React from 'react'

const WorkStatus = () => {
  return (
    <>
    <div className="container py-5">
  <div className="row" style={{color:'black'}}>
  <h3><center>Work Updations</center></h3>
    <div className="col-md-12">

      <div id="content">
        <ul className="timeline-1 text-black">
          <li className="event" data-date="12:30 - 1:00pm">
            <h4 className="mb-3">Project Work Started</h4> 
            <p>
              Get here on time, it's first come first serve. Be late, get turned
              away.
            </p>
          </li>
          <li className="event" data-date="12-05-2023">
            <h4 className="mb-3 pt-3">Foundation work started</h4>
            <p>
              Get ready for an exciting event, this will kick off in amazing
              fashion with MOP &amp; Busta Rhymes as an opening show.
            </p>
          </li>
          <li className="event" data-date="22-05-2023">
            <h4 className="mb-3 pt-3">Rcc Work started</h4>
            <p>
              This is where it all goes down. You will compete head to head with
              your friends and rivals. Get ready!
            </p>
          </li>
          <li className="event" data-date="22-06-2023">
            <h4 className="mb-3 pt-3">Plastering Started</h4>
            <p className="mb-0">
              See how is the victor and who are the losers. The big stage is
              where the winners bask in their own glory.
            </p>
          </li>
          <li className="event" data-date="2-07-2023">
            <h4 className="mb-3 pt-3">Flooring Started</h4>
            <p className="mb-0">
              See how is the victor and who are the losers. The big stage is
              where the winners bask in their own glory.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <div style={{ display: "flex", width: "100%" }}>
        <form className="statusformrequirement">
          <select name="cars" className="custom-select">
            <option selected="">Select work category</option>
            <option value="Painter">painter</option>
            <option value="Plumber">plumber</option>
            <option value="Flooring">flooring</option>
          </select>
          <br />
          <br />
          <button type="button" className="btn btn-light">
            Reset
          </button>
          <button type="button" className="btn btn-light">
            Continue
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
</>

  )
}

export default WorkStatus
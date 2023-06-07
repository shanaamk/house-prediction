import React from 'react'

const Viewreq = () => {
  return (
    <>
    <div className="container" style={{textAlign:'center',marginLeft:400}}>
    <div className="row">
    <div className="col-md-6 col-md-offset-2 custyle" >
      <table className="table table-striped custab" style={{color:'black'}}>
        <thead>
          <tr>
          
            <th>Title</th>
            <th>Values</th>
          </tr>
        </thead>
        <tbody>
          <tr>
           
            <td style={{color:'black'}}>size(sq.ft)</td>
            <td>2500</td>
          </tr>
          <tr>
           
            <td>Balcony</td>
            <td>4</td>
          </tr>
          <tr>
            
            <td>Total Floors</td>
            <td>2</td>
          </tr>
          <tr>
           
            <td>Bedrooms</td>
            <td>5</td>
          </tr>
          <tr>
            
            <td>Bathrooms</td>
            <td>5</td>
          </tr>
          <tr>
            
            <td>kitchen</td>
            <td>1</td>
          </tr>
         
        </tbody>
      </table>
    </div>
    <div col-md-6>
    <div className="" >
  <div className="regcontform-v5-content" style={{border:'2px solid black'}}>
    <form className="regcontform-detail" action="#" method="post">
      <h2>Upload Plan</h2>
      <div className="regcontform-row">
        <label htmlFor="full-name">Estimate Cost</label>
        <input
          type="text"
          name="full-name"
          id="full-name"
          className="regcontinput-text"
          placeholder="Your Name"
          required=""
        />

        </div>
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
    Upload your CV/Resume or any other relevant file. Max file size 50 MB
  </div> */}
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
    </div>
  </div>


  <div className="container">
  <div className="row">
    <table className="table table-hover table-striped">
      <thead>
        <tr className="thead-dark">
          <th>S. #</th>
          <th>Demands of user</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td style={{ maxWidth: 300 }}>
            <h6>Dummy Title 01</h6>
            <em className="text-muted">
              This is some long text or discription regarding Dummy Title 01.
              Even more lenghthy description will be automatically adjusted as
              per the width specified.
            </em>
          </td>
          <td>Column data</td>
          <td>
            <a href="#" className="btn btn-warning">
              <i className="fas fa-edit" />
            </a>{" "}
            |
            <a href="#" className="btn btn-danger">
              <i className="fas fa-trash" />
            </a>
          </td>
        </tr>
        <tr>
          <td>02</td>
          <td style={{ maxWidth: 300 }}>
            <h6>Dummy Title 02</h6>
            <em className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique facere necessitatibus quo laboriosam consequuntur
            </em>
          </td>
          <td>Some Data</td>
          <td>
            <a href="#" className="btn btn-warning">
              <i className="fas fa-edit" />
            </a>{" "}
            |
            <a href="#" className="btn btn-danger">
              <i className="fas fa-trash" />
            </a>
          </td>
        </tr>
        <tr>
          <td>03</td>
          <td style={{ maxWidth: 300 }}>
            <h6>Another Title</h6>
            <em className="text-muted">
              This is some long text or discription about Another Title or else
              about.
            </em>
          </td>
          <td>This is some data</td>
          <td>
            <a href="#" className="btn btn-warning">
              <i className="fas fa-edit" />
            </a>{" "}
            |
            <a href="#" className="btn btn-danger">
              <i className="fas fa-trash" />
            </a>
          </td>
        </tr>
        <tr>
          <td>04</td>
          <td style={{ maxWidth: 300 }}>
            <h6>Yet Another Title</h6>
            <em className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi aliquam placeat odit quasi autem distinctio veritatis ex
              numquam nihil nulla tempora a dolorem omnis beatae facilis
              perspiciatis doloribus
            </em>
          </td>
          <td>Data goes here</td>
          <td>
            <a href="#" className="btn btn-warning">
              <i className="fas fa-edit" />
            </a>{" "}
            |
            <a href="#" className="btn btn-danger">
              <i className="fas fa-trash" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


</>
  )
}

export default Viewreq
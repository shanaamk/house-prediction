import React from 'react'



const Userviewplanslider = () => {
  return (
    <>
    <div className="container">
    <div className="row">
      <h4>
        Plan Detailes
        {/* So I've worked on a new project and came up with this UI. Here you can use
        it. :) Follow me on twitter:{" "} */}
        <a href="https://twitter.com/AlexMahrt/"></a>
      </h4>
    </div>
    <hr />
    <div className="row row-margin-bottom">
      <div className="col-md-12 no-padding lib-item" data-category="view">
        <div className="lib-panel">
          <div className="row box-shadow">
          </div>
        </div>
      </div>
      <div className="col-md-3" />
      <div className="col-md-12 no-padding lib-item" data-category="ui">
        <div className="lib-panel">
          <div className="row box-shadow">
            <div className="col-md-6">
              <img
                className="lib-img"
                src="img/pic/archnew.webp"
              />
            </div>
            <div className="col-md-6">
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
          <tr >
            
            <td style={{ textAlign: 'center',fontSize:27,color:'green' }} colSpan={2}>Rs.1689500/-</td>
      
          </tr>
        </tbody>
      </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row row-margin-bottom">
      <div className="col-md-12 no-padding lib-item" data-category="view">
        <div className="lib-panel">
          <div className="row box-shadow">
          </div>
        </div>
      </div>
      <div className="col-md-3" />
      <div className="col-md-12 no-padding lib-item" data-category="ui">
        <div className="lib-panel">
          <div className="row box-shadow">
            <div className="col-md-6">
              <img
                className="lib-img"
                src="img/pic/archnew.webp"
              />
            </div>
            <div className="col-md-6">
            <img
                className="lib-img"
                src="img/pic/archnew.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   
    <div className="formthree ptb-100">
    <div className='row'>
    <div className='col-md-3'></div>
      <div className='col-md-3 text-center'>
      <button className='btn btn-success'>Accept</button>
   
      </div>
      <div className='col-md-3 text-center'> 
      <button className='btn btn-danger'>Reject</button></div>
      
      <div className='col-md-3'></div>
    </div>
    <div className="container">
  <div className="row">
    <div className="col-sm-4 col-md-4">
      <div className="panel panel-default">
        <div className="panel-body">
          <form acceptCharset="UTF-8" action="" method="POST">
            <textarea
              className="form-control counted"
              name="message"
              placeholder="Type in your message"
              rows={5}
              style={{ marginBottom: 10 }}
              defaultValue={""}
            />
            <h6 className="pull-right" id="counter">
              320 characters remaining
            </h6>
            <button className="btn btn-info" type="submit">
              Post New Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</div>




  </>
  
  )
}

export default Userviewplanslider
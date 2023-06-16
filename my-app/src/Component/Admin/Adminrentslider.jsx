import React from 'react'

const Adminrentslider = () => {
  return (
<>
<div className="container" />
<div style={{ display: "flex", width: "100%",color:'black',marginTop:20,marginBottom:20}}>
   
  <form className="formrequirement">
  <h3>Rent home</h3><br></br>
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
      <p>projectname</p>
      <input name="phone" className="inputfield" />
    </div>
    <div style={{ width: "100%" }}>
      <p>location</p>
      <input name="phone" className="inputfield" />
    </div>
    <div style={{ width: "100%" }}>
      <p>Price</p>
      <input name="phone" className="inputfield" />
    </div>
    <div  style={{ width: "100%" }}>
        <label htmlFor="full-name">Appload rentimage</label>   
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

    
<button type="button" className="btn btn-dark" >
Reset
</button>
<button type="button" className="btn btn-dark" style={{marginLeft:20}}>
Continue
</button>
  </form>
</div>

    

  
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h4>Rent table</h4>
        <div className="table-responsive">
          <table id="mytable" className="table table-bordred table-striped">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" id="checkall" />
                </th>
                <th>Name</th>
                <th>Location</th>
                <th>Price</th>              
                <th>Size(sq.ft)</th>
                <th>Balcony</th>
                <th>Total Floors</th>
                <th>Contact</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" className="checkthis" />
                </td>
                <td>Layana</td>
                <td>Mudur</td>
                <td>6000</td>
                <td>800</td>
                <td>1</td>
                <td>1</td>                            
                <td>+923335586757</td>
                <td>
                  <p data-placement="top" data-toggle="tooltip" title="Edit">
                    <button
                      className="btn btn-primary btn-xs"
                      data-title="Edit"
                      data-toggle="modal"
                      data-target="#edit"
                    >
                      <span className="glyphicon glyphicon-pencil" />
                    </button>
                  </p>
                </td>
                <td>
                  <p data-placement="top" data-toggle="tooltip" title="Delete">
                    <button
                      className="btn btn-danger btn-xs"
                      data-title="Delete"
                      data-toggle="modal"
                      data-target="#delete"
                    >
                      <span className="glyphicon glyphicon-trash" />
                    </button>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" className="checkthis" />
                </td>
                <td>Mohsin</td>
                <td>Irshad</td>
                <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>
                <td>isometric.mohsin@gmail.com</td>
                <td>+923335586757</td>
                <td>
                  <p data-placement="top" data-toggle="tooltip" title="Edit">
                    <button
                      className="btn btn-primary btn-xs"
                      data-title="Edit"
                      data-toggle="modal"
                      data-target="#edit"
                    >
                      <span className="glyphicon glyphicon-pencil" />
                    </button>
                  </p>
                </td>
                <td>
                  <p data-placement="top" data-toggle="tooltip" title="Delete">
                    <button
                      className="btn btn-danger btn-xs"
                      data-title="Delete"
                      data-toggle="modal"
                      data-target="#delete"
                    >
                      <span className="glyphicon glyphicon-trash" />
                    </button>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" className="checkthis" />
                </td>
                <td>Mohsin</td>
                <td>Irshad</td>
                <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>
                <td>isometric.mohsin@gmail.com</td>
                <td>+923335586757</td>
                <td>
                  <p data-placement="top" data-toggle="tooltip" title="Edit">
                    <button
                      className="btn btn-primary btn-xs"
                      data-title="Edit"
                      data-toggle="modal"
                      data-target="#edit"
                    >
                      <span className="glyphicon glyphicon-pencil" />
                    </button>
                  </p>
                </td>
                <td>
                  <p data-placement="top" data-toggle="tooltip" title="Delete">
                    <button
                      className="btn btn-danger btn-xs"
                      data-title="Delete"
                      data-toggle="modal"
                      data-target="#delete"
                    >
                      <span className="glyphicon glyphicon-trash" />
                    </button>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" className="checkthis" />
                </td>
                <td>Mohsin</td>
                <td>Irshad</td>
                <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>
                <td>isometric.mohsin@gmail.com</td>
                <td>+923335586757</td>
                <td>
                  <p data-placement="top" data-toggle="tooltip" title="Edit">
                    <button
                      className="btn btn-primary btn-xs"
                      data-title="Edit"
                      data-toggle="modal"
                      data-target="#edit"
                    >
                      <span className="glyphicon glyphicon-pencil" />
                    </button>
                  </p>
                </td>
                <td>
                  <p data-placement="top" data-toggle="tooltip" title="Delete">
                    <button
                      className="btn btn-danger btn-xs"
                      data-title="Delete"
                      data-toggle="modal"
                      data-target="#delete"
                    >
                      <span className="glyphicon glyphicon-trash" />
                    </button>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" className="checkthis" />
                </td>
                <td>Mohsin</td>
                <td>Irshad</td>
                <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>
                <td>isometric.mohsin@gmail.com</td>
                <td>+923335586757</td>
                <td>
                  <p data-placement="top" data-toggle="tooltip" title="Edit">
                    <button
                      className="btn btn-primary btn-xs"
                      data-title="Edit"
                      data-toggle="modal"
                      data-target="#edit"
                    >
                      <span className="glyphicon glyphicon-pencil" />
                    </button>
                  </p>
                </td>
                <td>
                  <p data-placement="top" data-toggle="tooltip" title="Delete">
                    <button
                      className="btn btn-danger btn-xs"
                      data-title="Delete"
                      data-toggle="modal"
                      data-target="#delete"
                    >
                      <span className="glyphicon glyphicon-trash" />
                    </button>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <div className="clearfix" />
          <ul className="pagination pull-right">
            <li className="disabled">
              <a href="#">
                <span className="glyphicon glyphicon-chevron-left" />
              </a>
            </li>
            <li className="active">
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">5</a>
            </li>
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-chevron-right" />
              </a>
            </li>
          </ul> */}
          <div className="row justify-content-center">
    <nav aria-label="Page navigation justify-content-center">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">«</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">»</span>
          </a>
        </li>
      </ul>
      </nav>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade"
    id="edit"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="edit"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-hidden="true"
          >
            <span className="glyphicon glyphicon-remove" aria-hidden="true" />
          </button>
          <h4 className="modal-title custom_align" id="Heading">
            Edit Your Detail
          </h4>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <input className="form-control " type="text" placeholder="Mohsin" />
          </div>
          <div className="form-group">
            <input className="form-control " type="text" placeholder="Irshad" />
          </div>
          <div className="form-group">
            <textarea 
              rows={2}
              className="form-control"
              placeholder="CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan"
              defaultValue={""}/>
          </div>
        </div>
        <div className="modal-footer ">
          <button
            type="button"
            className="btn btn-warning btn-lg"
            style={{ width: "100%" }}
          >
            <span className="glyphicon glyphicon-ok-sign" />
            &nbsp;Update
          </button>
        </div>
      </div>
      {/* /.modal-content */}
    </div>
    {/* /.modal-dialog */}
  </div>
  <div
    className="modal fade"
    id="delete"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="edit"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-hidden="true"
          >
            <span className="glyphicon glyphicon-remove" aria-hidden="true" />
          </button>
          <h4 className="modal-title custom_align" id="Heading">
            Delete this entry
          </h4>
        </div>
        <div className="modal-body">
          <div className="alert alert-danger">
            <span className="glyphicon glyphicon-warning-sign" /> Are you sure
            you want to delete this Record?
          </div>
        </div>
        <div className="modal-footer ">
          <button type="button" className="btn btn-success">
            <span className="glyphicon glyphicon-ok-sign" />
            &nbsp;Yes
          </button>
          <button
            type="button"
            className="btn btn-default"
            data-dismiss="modal"
          >
            <span className="glyphicon glyphicon-remove" />
            &nbsp;No
          </button>
        </div>
      </div>
      {/* /.modal-content */}
    </div>
    {/* /.modal-dialog */}
  </div>
  </div>
</>

  )
}

export default Adminrentslider
import React from 'react'
import Adminnavbar from './Adminnavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Editrent = () => {
  return (
    <>
    <Adminnavbar/>
    <div className="container" />
<div style={{ display: "flex", width: "100%",color:'black',marginTop:20,marginBottom:20}}>
   
  <form className="formrequirement">
  <h3>Update Rent Home</h3><br></br>
    <div style={{ width: "100%" ,}}>
      <p>size(sq.ft)</p>
      <input name="name" className="inputfield" autofocus="" />
    </div>
    <div style={{ width: "100%" }}>
      <p>Balcony</p>
      <input name="id" className="inputfield" />
    </div>
    <div style={{ width: "100%" }}>
      <p>Nearby</p>
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
<PublicUserFooter/>
   </>
  )
}

export default Editrent
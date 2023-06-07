import React from 'react'

const Architecturepredictionslider = () => {
  return (
   
<>
    <div className="container" />
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
        <>
  {/* <button type="button" className="btn btn-dark" >
    Reset
  </button> */}
  <button type="button" className="btn btn-dark" style={{marginLeft:20}}>
   Estimatecost
  </button>
</>

      </form>
    </div>
  </>
  )
}

export default Architecturepredictionslider
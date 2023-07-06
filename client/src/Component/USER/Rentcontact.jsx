import React from 'react'
import Usernavbar from './Usernavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Rentcontact = () => {
  return (<>
  <Usernavbar/>
    <div className="container">
    <div style={{ display: "flex", width: "100%",color:'black',marginTop:20,marginBottom:20}}>
       
      <form className="formrequirement">
      <h3>Contact me</h3><br></br>
        <div style={{ width: "100%" ,}}>
          <p>Name</p>
          <input name="name" className="inputfield" autofocus="" />
        </div>
       
        <div style={{ width: "100%" }}>
          <p>Email</p>
          <input name="email" className="inputfield" />
        </div>
        <div style={{ width: "100%" }}>
          <p>Phone number</p>
          <input name="phone" className="inputfield" />
        </div>
        <div style={{ width: "100%" }}>
          <p>Subject</p>
          <input name="phone" className="inputfield" />
        </div>
  

        <div style={{ width: "100%" }}>
  <p>Message</p>
  <input name="teaxtarea"
              className="inputfield"
             
              placeholder="Type in your message"
              rows={5}
              style={{ marginBottom: 10 }}
              defaultValue={""}
              />
</div>

        <>
  
  <button type="button" className="btn btn-dark" style={{marginLeft:20}}>
    Contact
  </button>
</>

      </form>
    </div>  </div>
    <PublicUserFooter/>
    </>
  )
}

export default Rentcontact
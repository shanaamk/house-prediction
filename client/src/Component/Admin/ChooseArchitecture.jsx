import React from 'react'
import PublicUserFooter from '../Footer/PublicUserFooter'
import Adminnavbar from './Adminnavbar'


const ChooseArchitecture = () => {
  return (
    <>
   <Adminnavbar/>
    <div
  className="wrapper"
 
>
  <div className="inner">
    <form action="" style={{marginTop:'50px',color:'black'}}>
      <h3 style={{color:'black'}}>Choose Architecture List</h3>
  
    
      <div className="form-wrapper">
        <label htmlFor="">Choose Users</label>
        <div className="form-holder select">
          <select name="id" className="form-control">
            <option value="User1">User1</option>
            <option value="User2">User2</option>
            <option value="User3">User3</option>
          </select>
        </div>
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Choose Architecture</label>
        <div className="form-holder select">
          <select name="id" className="form-control">
            <option value="Archi1">Archi1</option>
            <option value="Archit2">Archit2</option>
            <option value="Archite3">Archite</option>
          </select>
        </div>
      </div>
      
      
        
      <button className='red'>Submit</button>
    </form>
  </div>
</div>
<PublicUserFooter/>
</>
  )
}


export default ChooseArchitecture
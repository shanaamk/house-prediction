import React from 'react'
import PublicUserFooter from '../Footer/PublicUserFooter'
import Adminnavbar from './Adminnavbar'


const ChooseProjectmanager = () => {
  return (
    <>
   <Adminnavbar/>
    <div
  className="wrapper"
 
>
  <div className="inner">
    <form action="" style={{marginTop:'50px',color:'black'}}>
      <h3 style={{color:'black'}}>Choose Project Manager List</h3>
  
    
      <div className="form-wrapper">
        <label htmlFor="">Choose Users</label>
        <div className="form-holder select">
          <select name="id" className="form-control">
            <option value="male">User1</option>
            <option value="female">User2</option>
            <option value="other">User3</option>
          </select>
        </div>
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Choose Project Manager</label>
        <div className="form-holder select">
          <select name="id" className="form-control">
            <option value="male">ProjectManager1</option>
            <option value="female">ProjectManager2</option>
            <option value="other">ProjectManager3</option>
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


export default ChooseProjectmanager
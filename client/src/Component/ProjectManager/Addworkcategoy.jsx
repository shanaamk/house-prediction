import React from 'react'
import ProjectManagernavbar from './ProjectManagernavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Addworkcategoy = () => {
  return (
    <>
    <ProjectManagernavbar/>
    <div
  className="wrapper"
 
>
  <div className="inner">
    <form action="" style={{marginTop:'50px',color:'black'}}>
      <h3 style={{color:'black'}}>Add Work Category</h3>
    
        <div className="form-wrapper">
          <label htmlFor="">Work Category ID</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-wrapper">
          <label htmlFor="">Work Category Name</label>
          <input type="text" className="form-control" />
        </div>
      
      <button className='red'>Submit</button>
    </form>
  </div>
</div>
<PublicUserFooter/> </>
  )
}

export default Addworkcategoy
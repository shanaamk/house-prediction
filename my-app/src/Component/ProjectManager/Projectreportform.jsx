import React from 'react'
import ProjectManagernavbar from './ProjectManagernavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Projectreportform = () => {
  return (
    <>
    <ProjectManagernavbar/>
    <div
  className="wrapper"
 
>
  <div className="inner">
    <form action="" style={{marginTop:'50px',color:'black'}}>
      <h3 style={{color:'black'}}>users Project report</h3>      
        <div className="form-wrapper">
        <label htmlFor="">Name and address of awarder</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Worker order date</label>
        <input type="password" className="form-control" />
      </div>
     
      <div className="form-wrapper">
        <label htmlFor="">Date of measurement</label>
        <input type="text" className="form-control" />
      </div>
  
    
      <div className="form-wrapper">
        <label htmlFor="">status of work</label>
        <div className="form-holder select">
          <select name="id" className="form-control">
            <option value="male">started</option>
            <option value="female">ongoing</option>
            <option value="other">completed</option>
          </select>
        </div>
      </div>
      <div className="form-wrapper">
          <label htmlFor="">Description</label>
          <input type="text" className="form-control" />
        </div>
      <div className="form-wrapper">
        <label htmlFor="">Size in squarefeet</label>
        <input type="password" className="form-control" />
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Bedrooms</label>
        <input type="password" className="form-control" />
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Bathrooms</label>
        <input type="password" className="form-control" />
      </div>
      <div className="form-wrapper">
        <label htmlFor="">floor</label>
        <input type="password" className="form-control" />
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Balcony</label>
        <input type="password" className="form-control" />
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Total amount of contract</label>
        <input type="password" className="form-control" />
      </div>
      <div className="form-wrapper">
        <label htmlFor="">Work completion date</label>
        <input type="password" className="form-control" />
      </div>
      
      <button className='red'>Submit</button>
    </form>
  </div>
</div>
<div className='projectfooter' style={{marginTop:"20px"}}>
</div>



<div className="container search-table">
    <div className="search-list">
      <h3>Project Report</h3>
      <table className="table" id="myTable">
        <thead>
          <tr>
            <th>title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name and address of Awarder</td>
            <td>Fasil tk,valappil house,parambilpeedika(p.o),malappurem</td>
          </tr>
          <tr>
            <td>Worker Order Date</td>
            <td>2-09-2024</td>
          </tr>
          <tr>
            <td>Date of Measurement</td>
            <td>3-09-2023</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>
              the work will be started on the expected dte untill the eorlers
              are assigned.Excavation in all type of soil including dense
              soil/desentegraated wethered/soft rok!
            </td>
          </tr>
          <tr>
            <td>Size in Sqaure feet</td>
            <td>2500sq</td>
          </tr>
          <tr>
            <td>Bedrooms</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Bathroom</td>
            <td>2</td>
          </tr>
          <tr>
            <td>floor</td>
            <td>2</td>
          </tr>
          <tr>
            <td>balcony</td>
            <td>2 opened</td>
          </tr>
          <tr>
            <td>Total amouunt of contract</td>
            <td>1600000</td>
          </tr>
          <tr>
            <td>work completetion date</td>
            <td>10/05/2012</td>
          </tr>
          <tr>
            <td>Work Status</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
<PublicUserFooter/>
</>
 
  )
}

export default Projectreportform
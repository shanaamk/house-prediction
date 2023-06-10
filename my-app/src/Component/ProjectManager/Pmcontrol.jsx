import React from 'react'
import ProjectManagernavbar from './ProjectManagernavbar'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Pmcontrol = () => {
  return (
    <>
    <ProjectManagernavbar/>
    <div className='container justify-content-center'>
        <div className='row'>
           <center><h2 className='mb-5'>Shana-House1</h2></center> 
            <div className='col-md-6'>
                <table style={{color:'black',fontSize:35}}>
                    <tr>
                        <td>
                            Projucted Days of Work:
                        </td>
                        <td>
                            194
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Days Ballance:
                        </td>
                        <td>
                            167
                        </td>
                    </tr>
                </table>
            </div>
            <div className='col-md-6 color-2'>
                <table style={{color:'black',fontSize:35}}>
                    <tr>
                        <td>
                            Projucted Days of Work:
                        </td>
                        <td>
                            194
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Days Ballance:
                        </td>
                        <td>
                            167
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <div className='container'>

    
    <div className="row row-margin-bottom">
      <div className="col-md-12 no-padding lib-item" data-category="view">
        <div className="lib-panel">
          <div className="row box-shadow">
          </div>
        </div>
      </div>
      <div className="col-md-6" />
      <div className="col-md-12 no-padding lib-item" data-category="ui">
        <div className="lib-panel">
          <div className="row box-shadow">
            <div className="col-md-6">
              <img
                className="lib-img"
                src="img/pic/userimage5.jpg"
              />
            </div>
            <div className="col-md-6">
              <img
                className="lib-img"
                src="img/pic/planimg.jpg"
              />
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div className='container '>
            <div className='row justify-content-center'>
                <div className='col md-4'>
                    <button className='btn btn-success'><a href='projectreportform'>Project Report</a></button> 
                </div>
                <div className='col md-4'>
                <button className='btn btn-success'><a href='assign'>Manage Workers</a></button>
                </div>
                <div className='col md-4'>
                    <button className='btn btn-success'><a href='Work'>Update status</a></button> 
                </div>            
            </div>
        </div>
           
   
    <PublicUserFooter/>
    </>

  )
}

export default Pmcontrol
import React from 'react'

const Managecontract = () => {
  return (
    <div className="container" style={{marginLeft:350}}>
    <h3>Manage Contract</h3>
 <div className="row col-md-8 col-md-offset-2 custyle">
   <table className="table table-striped custab">
     <thead>
       <tr>
         <th>Sl no</th>
         <th>Username</th>
         <th>Address</th>
         <th className="text-center">Action</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td>1</td>
         <td>News</td>
         <td>News Cate</td>
         <td className="text-center">
           <a className="btn btn-info btn-xs" href="cv">
             <span className="glyphicon glyphicon-edit" /> View C.V
           </a>{" "}
           
         </td>
       </tr>
       <tr>
         <td>2</td>
         <td>Products</td>
         <td>Main Products</td>
         <td className="text-center">
           <a className="btn btn-info btn-xs" href="cv">
             <span className="glyphicon glyphicon-edit" /> View C.V
           </a>{" "}
          
         </td>
       </tr>
       <tr>
         <td>3</td>
         <td>Blogs</td>
         <td>Parent Blogs</td>
         <td className="text-center">
           <a className="btn btn-info btn-xs" href="cv">
             <span className="glyphicon glyphicon-edit" /> View C.V
           </a>{" "}
           
         </td>
       </tr>
     </tbody>
   </table>
 </div>
</div>
  )
}

export default Managecontract
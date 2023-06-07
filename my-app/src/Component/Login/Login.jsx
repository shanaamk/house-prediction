import React from 'react'

const Login = () => {
  return (
  <>
    <div id='bg'></div>
      <div className='bodylogin'>

      <form>
      
      
  <div className="form-field">
    <input type="email" placeholder="Email / Username" required="" />
  </div>
  <div className="form-field">
    <input type="password" placeholder="Password" required="" />
  </div>
  <div className="form-field">
    <button className="btnlog" type="submit">
      Log in
    </button>
  </div>
</form>

    </div>
    
    
    </>
  )
}

export default Login
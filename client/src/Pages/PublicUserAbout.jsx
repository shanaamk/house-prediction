import React from 'react'
import PublicUserNav from '../Component/Navbar/PublicUserNav'
import PublicUserFooter from '../Component/Footer/PublicUserFooter'
import PublicAbout from '../Component/PublicUser/PublicAbout'

const PublicUserAbout = () => {
  return (
    <div>
     <PublicUserNav/>
     <PublicAbout/>
     <PublicUserFooter/>   
    </div>
  )
}

export default PublicUserAbout
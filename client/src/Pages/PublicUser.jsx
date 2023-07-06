import React from 'react'
import PublicUserNav from '../Component/Navbar/PublicUserNav'
import PublicUserFooter from '../Component/Footer/PublicUserFooter'
import PublicSlider from '../Component/PublicUser/PublicSlider'
const PublicUser = () => {
  return (
    <div>
        <PublicUserNav/>
        <PublicSlider/>
        <PublicUserFooter/>
        
    </div>
  )
}

export default PublicUser
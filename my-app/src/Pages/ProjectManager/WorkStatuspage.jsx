import React from 'react'
import Workersnavbar from '../../Component/Workers/Workersnavbar'
import WorkStatus from '../../Component/ProjectManager/WorkStatus'
import PublicUserFooter from '../../Component/Footer/PublicUserFooter'
import ProjectManagernavbar from '../../Component/ProjectManager/ProjectManagernavbar'

const WorkStatuspage = () => {
  return (
    <>
    <ProjectManagernavbar/>
    <WorkStatus/>
    <PublicUserFooter/>
    </>
  )
}

export default WorkStatuspage
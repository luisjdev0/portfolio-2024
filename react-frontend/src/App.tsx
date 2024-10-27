import ContactBoxComponent from "./components/ContactBoxComponent"
import ExperienceBoxComponent from "./components/ExperienceBoxComponent"
import NavbarComponent from "./components/NavbarComponent"
import OverviewComponent from "./components/OverviewComponent"
import ProjectsBoxComponent from "./components/ProjectsBoxComponent"
import SkillBoxComponent from "./components/SkillsBoxComponent"
import TagManager from 'react-gtm-module'

import { useEffect } from "react"

function App() {
  useEffect(() => {

    const { VITE_ANALYTICS_TAG: gmtId } = import.meta.env

    TagManager.initialize({
      gtmId: gmtId
    })
  }, [])

  return (
    <main style={{
      marginBottom: '50px'
    }}>
      <NavbarComponent />
      <OverviewComponent />
      <ExperienceBoxComponent />
      <SkillBoxComponent />
      <ProjectsBoxComponent />
      <ContactBoxComponent />
    </main>
  )
}

export default App

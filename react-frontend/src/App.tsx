import ContactBoxComponent from "./components/ContactBoxComponent"
import ExperienceBoxComponent from "./components/ExperienceBoxComponent"
import NavbarComponent from "./components/NavbarComponent"
import OverviewComponent from "./components/OverviewComponent"
import ProjectsBoxComponent from "./components/ProjectsBoxComponent"
import SkillBoxComponent from "./components/SkillsBoxComponent"

function App() {
  return (
    <main style={{
      marginBottom: '50px'
    }}>
      <NavbarComponent />
      <OverviewComponent />
      <ExperienceBoxComponent/>
      <SkillBoxComponent/>
      <ProjectsBoxComponent/>
      <ContactBoxComponent/>
    </main>
  )
}

export default App

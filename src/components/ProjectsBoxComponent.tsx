import CustomBoxComponent from "./CustomBoxComponent"
import SingularExperience from "./SingularExperience"

const ProjectsBoxComponent = () => {
    return (
        <CustomBoxComponent title="Proyectos">
            <SingularExperience
                year="2021 - Presente"
                title="App de libros"
                github="oas"
                projectView="ola">
                Apicación de libros desarrollada con flutter y node
            </SingularExperience>
            <SingularExperience
                year="2021 - Presente"
                title="App de libros"
                github="oas"
                projectView="ola">
                Apicación de libros desarrollada con flutter y node
            </SingularExperience>
            <SingularExperience
                year="2021 - Presente"
                title="App de libros"
                github="oas"
                projectView="ola">
                Apicación de libros desarrollada con flutter y node
            </SingularExperience>
        </CustomBoxComponent>
    )
}

export default ProjectsBoxComponent
import { useEffect, useState } from "react"
import CustomBoxComponent from "./CustomBoxComponent"
import SingularExperience from "./SingularExperience"
import { getStrapiContent } from "../helpers"

const ProjectsBoxComponent = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        getStrapiContent('projects')
            .then(result => {
                const { data } = result.data

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                setProjects(data.map((e: { id: any; Year: any; Title: any; Summary: any; Link: any; Github: any }) => {
                    return {
                        id: e.id,
                        year: e.Year,
                        title: e.Title,
                        summary: e.Summary,
                        link: e.Link,
                        github: e.Github,
                    }
                }))
            })
    }, [])

    return (
        <CustomBoxComponent title="Proyectos">
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                projects.map((project: any) => (
                    <SingularExperience
                        key={project.id}
                        year={project.year}
                        title={project.title}
                        projectView={project.link}
                        github={project.github}>{project.summary}</SingularExperience>
                ))
            }
        </CustomBoxComponent>
    )
}

export default ProjectsBoxComponent
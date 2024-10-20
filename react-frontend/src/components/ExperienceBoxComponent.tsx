import { useEffect, useState } from "react"
import CustomBoxComponent from "./CustomBoxComponent"
import SingularExperience from "./SingularExperience"
import { getStrapiContent } from "../helpers"

const ExperienceBoxComponent = () => {

    const [experiences, setExperiences] = useState([])

    useEffect(() => {
        getStrapiContent('portfolio-experiences')
            .then(content => {
                const { data } = content.data
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                setExperiences(data.map((e: { id: any; Year: any; Title: any; Summary: any; Link: any }) => {
                    return {
                        id: e.id,
                        year: e.Year,
                        title: e.Title,
                        summary: e.Summary,
                        link: e.Link
                    }
                }))
            })
    }, [])

    return (
        <CustomBoxComponent title="Educación / Experiencia">
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                experiences.map((e: any) => {
                    return <SingularExperience year={e.year} title={e.title} key={e.id} href={e.link}>
                        {e.summary}
                    </SingularExperience>
                })
            }
        </CustomBoxComponent >
    )
}

export default ExperienceBoxComponent
import CustomBoxComponent from "./CustomBoxComponent";

import '../assets/styles/skillsBox.css'
import { useEffect, useState } from "react";
import { getStrapiContent } from "../helpers";

interface SkillProps {
    icon: string,
    title: string
}

const Skill: React.FC<SkillProps> = ({ icon, title }) => {
    return (
        <div className="skill">
            <img src={icon} />
            <h3>{title}</h3>
        </div>
    )
}

const SkillBoxComponent = () => {

    const [skills, setSkills] = useState([])

    useEffect(() => {
        getStrapiContent('portfolio-skills')
            .then(response => {
                const { data } = response.data

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                setSkills(data.map((e : any) => {
                    return {
                        Id: e.id,
                        Name: e.Name,
                        ImageUrl: e.ImageUrl
                    }
                }))
            })
    }, [])

    return (
        <CustomBoxComponent title="Tecnologías">
            <div className="skillsBox">
                {
                    skills.map((e) => {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        return <Skill icon={(e as any).ImageUrl} title={(e as any).Name} key={(e as any).Id} />
                    })
                }
            </div>
        </CustomBoxComponent>
    )
}

export default SkillBoxComponent;
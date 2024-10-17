import CustomBoxComponent from "./CustomBoxComponent";

import '../assets/styles/skillsBox.css'

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
    return (
        <CustomBoxComponent title="Tecnologías">
            <div className="skillsBox">
                <Skill icon="https://imgur.com/VHRma6P.png" title="React" />
                <Skill icon="https://imgur.com/VHRma6P.png" title="React" />
                <Skill icon="https://imgur.com/VHRma6P.png" title="React" />
                <Skill icon="https://imgur.com/VHRma6P.png" title="React" />
                <Skill icon="https://imgur.com/VHRma6P.png" title="React" />
                <Skill icon="https://imgur.com/VHRma6P.png" title="React" />
                <Skill icon="https://imgur.com/VHRma6P.png" title="React" />
            </div>
        </CustomBoxComponent>
    )
}

export default SkillBoxComponent;
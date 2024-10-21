
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/styles/experiences.css'
import { redirectUrl } from '../helpers';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

interface SingularExperienceProps {
    year: string,
    title: string,
    href?: string,
    children?: React.ReactNode,
    github?: string,
    projectView?: string
}

const SingularExperience: React.FC<SingularExperienceProps> = ({
    year,
    title,
    href,
    children,
    github,
    projectView
}) => {
    return (
        <div className={`experience-box ${href ? 'hovereable' : ''}`} onClick={() => href ? redirectUrl(href) : ''}>
            <span style={{display: "block", marginBottom: "5px"}}>{year}</span>
            <h3>{title}</h3>
            {children && <p>{children}</p>}

            {(github || projectView) &&
                <div className="project-options">
                    {github &&
                        <FontAwesomeIcon title='Ver repositorio' icon={faGithub} onClick={() => redirectUrl(github)} />}
                    {projectView &&
                        <FontAwesomeIcon title='Ver proyecto' icon={faEye} onClick={() => redirectUrl(projectView)} />}
                </div>}
        </div>
    )
}

export default SingularExperience;
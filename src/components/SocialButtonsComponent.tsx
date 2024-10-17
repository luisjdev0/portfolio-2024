import { faDiscord, faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { redirectUrl } from "../helpers"

const SocialButtonsComponent = () => {
    return (
        <div className="contact-buttons">
            <FontAwesomeIcon icon={faGithub} onClick={() => redirectUrl('https://github.com/JLTUTORIALES')} />
            <FontAwesomeIcon icon={faDiscord} onClick={() => redirectUrl('https://discord.com/users/705182790886359060')} />
            <FontAwesomeIcon icon={faWhatsapp} onClick={() => redirectUrl('https://api.whatsapp.com/send?phone=573209734130')} />
            <FontAwesomeIcon icon={faLinkedin} onClick={() => redirectUrl('https://www.linkedin.com/in/jose-luis-ortiz-sanchez-33a4a8215/')} />
            <FontAwesomeIcon icon={faEnvelope} onClick={() => redirectUrl('mailto:jortizsanchez922@gmail.com')} />
        </div>
    )
}

export default SocialButtonsComponent;
import CustomBoxComponent from "./CustomBoxComponent"
import '../assets/styles/contact.css'

const ContactBoxComponent = () => {
    return (
        <CustomBoxComponent title="Contacto">
            <form method="POST" onSubmit={(event) => event.preventDefault()} className="contact-form" autoComplete="off" aria-autocomplete="none">
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea name="message"></textarea>
                </div>
                <button type="submit">Enviar Mensaje</button>
            </form>
        </CustomBoxComponent>
    )
}

export default ContactBoxComponent
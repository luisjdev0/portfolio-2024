import axios from "axios";
import Swal, { SweetAlertIcon } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const redirectUrl = (ruta: string) => {
    window.open(ruta, '_blank');
}

export const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        const yOffset = -100; // Ajusta este valor según el espacio que quieras dejar
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

export const getStrapiContent = async (endpoint: string) => {
    return axios.get(`${import.meta.env.VITE_BACKEND_API}/api/${endpoint}`, {
        headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_BACKEND_API_TOKEN}`
        }
    })
}

export const customAlert = async (type: SweetAlertIcon, title: string, text: string) => {
    const mySwal = withReactContent(Swal)
    return await mySwal.fire({
        icon: type,
        title,
        text,
        showConfirmButton: true,
        confirmButtonText: 'Aceptar'
    });
}

export const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData.entries())

    const { VITE_EMAIL_SERVICE_HOST, VITE_EMAIL_SERVICE_TOKEN } = import.meta.env

    const bodyMessage = `
        Recibiste un mensaje de contacto con la siguiente información:<br/>
        Nombre remitente: ${data.name}<br/>
        Email remitente: ${data.email}<br/><br/>

        Mensaje:<br/>
        ${data.message}<br/><br/>
        Este mensaje fue enviado desde tu sitio web.
    `

    try {

        await axios.post(VITE_EMAIL_SERVICE_HOST, {
            data: {
                subject: 'Nuevo contacto desde el portfolio',
                to: 'jortizsanchez922@gmail.com',
                text: bodyMessage,
                html: bodyMessage
            }
        }, {
            headers: {
                'Authorization': `Bearer ${VITE_EMAIL_SERVICE_TOKEN}`
            }
        })

        customAlert('success', 'Exito!', 'Correo electrónico enviado')

    } catch {
        customAlert('error', 'Error', 'No se pudo enviar el correo electrónico')
    }


}
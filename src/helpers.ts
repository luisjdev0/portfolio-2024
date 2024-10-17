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
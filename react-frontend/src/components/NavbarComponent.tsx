
import { useState, useEffect } from 'react'
import '../assets/styles/nav.css'
import { smoothScroll } from '../helpers'

const NavbarComponent = () => {

    const [ activeElement, setActive ] = useState('overview')

    const navOptions = [
        { target: 'overview', text: 'Sobre mí' },
        { target: 'educación-experiencia', text: 'Educación / Experiencia' }, 
        { target: 'tecnologías', text: 'Tecnologías' },
        { target: 'proyectos', text: 'Proyectos' },
        //{ target: 'contacto', text: 'Contacto' }

    ]

    useEffect(() => {
        const handleScroll = () => {

          const scrollPosition = window.scrollY + 300;    
          const elements = document.querySelectorAll('[id]');

          elements.forEach((e) => {
            const elementTop = (e as HTMLElement).getBoundingClientRect().top + window.scrollY;
            const elementBottom = elementTop + (e as HTMLElement).offsetHeight + 100;
    
            if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
              setActive(e.id)
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Limpieza del event listener al desmontar el componente
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return <nav>
        <ul id="nav-options">
            {
                navOptions.map(e => {
                    return <li
                        className={`nav-item ${activeElement == e.target ? 'active' : ''}`}
                        id={`li-${e.target}`}
                        key={`li-${e.target}`}
                        onClick={() => smoothScroll(e.target)}>{e.text}</li>
                })
            }
        </ul>
    </nav>
}

export default NavbarComponent
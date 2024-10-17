import CustomBoxComponent from "./CustomBoxComponent"
import SingularExperience from "./SingularExperience"

const ExperienceBoxComponent = () => {
    return (
        <CustomBoxComponent title="Educación / Experiencia">
            <SingularExperience year="2021 - Presente" title="Institución Universitaria de Colombia">
                Ingeniería de sistemas computacionales
            </SingularExperience>
            <SingularExperience year="2021 - Presente" title="Bersoft Soluciones" href="https://bersoftsoluciones.com/web/">
                Desarrollador de software backend encargado de diseñar, mantener y dar soporte a las soluciones tecnológicas brindadas por la empresa
            </SingularExperience>
        </CustomBoxComponent>
    )
}

export default ExperienceBoxComponent
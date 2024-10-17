import './../assets/styles/overview.css'
import SocialButtonsComponent from "./SocialButtonsComponent";


const OverviewComponent = () => {
    return (
        <header className="box-content" id='overview'>
            <img
                className="image-avatar"
                src="/logo.png"
                alt="Luisjdev brand logo"
                style={{
                    width: '20%',
                    minWidth: '100px'
                }} />

            <h1>Jose Luis Ortiz</h1>
            <h2 style={{
                fontWeight: '400',
                color: 'rgb(59, 130, 246)'
            }}>Dev FullStack</h2>
            <SocialButtonsComponent />
            <section className="console-box">
                <h3>Sobre mi</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi fugit pariatur voluptatum velit repellendus, libero dicta. Officia odit voluptatibus sit eum, fugit quod similique hic quibusdam, praesentium accusantium non soluta.
                </p>
                <button style={{
                    marginTop: "25px",
                    width: "100%"
                }}>Descargar CV</button>
            </section>
        </header>
    )
}

export default OverviewComponent;
import { useEffect, useState } from 'react';
import './../assets/styles/overview.css'
import SocialButtonsComponent from "./SocialButtonsComponent";
import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';
import { getStrapiContent, redirectUrl } from '../helpers';


const OverviewComponent = () => {

    const [ summary, setSummary ] = useState<BlocksContent | null>(null)
    const [ cv, setCv ] = useState('')

    useEffect(() => {
        getStrapiContent('porfolio-overview?populate=*')
           .then(response => {
                setSummary(response.data.data.Summary)
                setCv(`${import.meta.env.VITE_BACKEND_API}${response.data.data.Curriculum.url}`)
            })
           .catch(error => {
                console.error(error);
            });
    }, [])

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
                {summary && <BlocksRenderer content={summary}/>}
                <button style={{
                    marginTop: "25px",
                    width: "100%"
                }} onClick={() => redirectUrl(cv) }>Descargar CV</button>
            </section>
        </header>
    )
}

export default OverviewComponent;
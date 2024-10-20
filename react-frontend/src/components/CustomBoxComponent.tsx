import { ReactNode } from "react";

interface CustomBoxComponentProps {
    title: string;
    children?: ReactNode; // 'ReactNode' permite cualquier tipo de nodo React
}

const CustomBoxComponent: React.FC<CustomBoxComponentProps> = ({ title, children }) => {
    return (
        <section className="box-content" id={title.replace(' ', '-').replace('/ ', '').toLowerCase()}>
            <h2 style={{
                fontSize: '20pt',
                marginBottom: '25px'
            }}>{title}</h2>
            {children}
        </section>
    )

}

export default CustomBoxComponent
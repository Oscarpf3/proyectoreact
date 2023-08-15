import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/components/pages/NovedadesPage.css';
import NovedadItem from "../componentes/novedades/NovedadItem";


const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const result = await axios.get("http://localhost:3000/api/novedades");
            setNovedades(result.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);

    return (
        <section className="holder">
            <h2>Novedades</h2>

            {loading ? (
            <p>Cargando...</p>

            ) : (
        novedades.map(item => <NovedadItem 
            key={item.id}
            titulo={item.titulo} 
            subtititulo={item.subtitulo} 
            imagen={item.imagen}
            cuerpo={item.cuerpo} 
            />)
       )}

        </section>

    );
}

export default NovedadesPage;
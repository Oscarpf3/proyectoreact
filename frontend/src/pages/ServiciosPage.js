import React from 'react';
import '../styles/components/pages/ServiciosPage.css' ;
const ServiciosPage = (props) => {
    return (
       
        <main className="holder">
        <h2>Servicios</h2>
        <div className="servicio">
            <img src="img/sevicios/casamiento.jpg" alt="item"/>
            <div className="info">
                <h4>Casamientos</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quam nulla. Ab et quibusdam alias
                    minima ullam expedita cupiditate laboriosam facere sit repellendus! Saepe modi pariatur maxime aut
                    molestiae! Repellat.</p>

            </div>
        </div>
        <div className="servicio">
            <img src="img/sevicios/cumpleaños.jpg" alt="item"/>
            <div className="info">
                <h4>Fiestas de cumpleaños</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quam nulla. Ab et quibusdam alias
                    minima ullam expedita cupiditate laboriosam facere sit repellendus! Saepe modi pariatur maxime aut
                    molestiae! Repellat.</p>

            </div>
        </div>
        <div className="servicio">
            <img src="img/sevicios/empresa.jpg" alt="item"/>
            <div className="info">
                <h4>Eventos Empresariales</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quam nulla. Ab et quibusdam alias
                    minima ullam expedita cupiditate laboriosam facere sit repellendus! Saepe modi pariatur maxime aut
                    molestiae! Repellat.</p>

            </div>
        </div>
        <div className="servicio">
            <img src="img/sevicios/remates.jpg" alt="item"/>
            <div className="info">
                <h4>Remates</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quam nulla. Ab et quibusdam alias
                    minima ullam expedita cupiditate laboriosam facere sit repellendus! Saepe modi pariatur maxime aut
                    molestiae! Repellat.</p>

            </div>
        </div>

    </main>


    );

}

export default ServiciosPage;
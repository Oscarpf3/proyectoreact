import React from 'react';
import '../styles/components/pages/HomePage.css' ;
const HomePage = (props) => {
    return (
<main className="holder">
    <div className="homeimg">
        <img src="img/logo4.jpg" width="100"/>

    </div>
    <div className="columnas">  
    <div className="bienvenidos">
        <h2>Bienvenidos</h2>
                <p>Nos enorgullece ofrecerte una experiencia culinaria sin igual para tus eventos especiales. Ya sea una
                    boda, una fiesta de cumpleaños, una reunión corporativa o cualquier otra ocasión, nuestro equipo
                    experto de catering está listo para hacer de tu evento un éxito absoluto.
                </p>
                <p>¿Qué nos distingue?</p>

                <p> 1- Menús personalizados: Entendemos que cada evento es único, por lo que creamos menús
                    personalizados
                    que se adaptan a tus gustos, preferencias y necesidades específicas. Ya sea que desees una
                    experiencia gastronómica elegante, opciones vegetarianas o platos temáticos, estamos preparados para
                    brindarte opciones creativas y deliciosas. </p>
                <p> 2- Ingredientes frescos y de calidad: Utilizo ingredientes frescos y de alta calidad en todas mis
                    preparaciones. Me esfuerzo por trabajar con proveedores locales, seleccionando cuidadosamente cada
                    ingrediente para asegurar que cada bocado sea una explosión de sabores auténticos y saludables. </p>
                <p>3-Atención al detalle: Cuido cada aspecto de la presentación de mis platos, buscando crear una
                    experiencia visualmente atractiva que complemente el deleite del paladar. Cada plato será presentado
                    con elegancia y estilo, añadiendo un toque especial a tu evento. </p>
                <p> 4- Calidez y profesionalidad: Además de mi pasión por la cocina, me enorgullece ofrecer un servicio
                    cálido y profesional. Me aseguraré de que tú y tus invitados se sientan bienvenidos, atendidos y
                    satisfechos en todo momento. Mi objetivo es superar tus expectativas y hacer de tu evento una
                    experiencia inolvidable. </p>

                <p> No dejes que la comida sea un motivo de preocupación en tu próximo evento. Permítenos encargarnos
                    de todos los detalles culinarios, para que tú puedas relajarte y disfrutar junto con tus
                    invitados.</p>

                Contáctanos hoy mismo y descubre cómo nuestro servicio de catering puede hacer de tu evento una
                experiencia gastronómica inolvidable.
    </div>
    </div>

    <div className="homeimg">
        <img src="img/home/mama_arreglo.jpeg"/>
    </div>

</main>
        
    );

    
}

export default HomePage;
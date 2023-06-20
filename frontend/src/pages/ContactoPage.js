import React from 'react';
const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
        <div>
            <h2>Formulario de contacto</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar" />
                </p>
            </form>
        </div>
        <div className="datos">
            <h2>Otras vias de comunicación</h2>
            <p>También puede contactarse con nosotros usando los siguintes medios</p>
            <ul>
                <li>Teléfono:+54 9 3773 418217</li>
                <li>Email: gracielacour@hotmail.com</li>
                <li>Facebook:</li>
                <li>Instagram: @gracielacatering</li>
                
            </ul>
        </div>
    </main>


    );

}

export default ContactoPage;
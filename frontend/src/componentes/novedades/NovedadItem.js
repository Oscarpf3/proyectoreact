import React from 'react';

const NovedadItem = (props) => {
    const {titulo, descripcion, imagen, cuerpo} = props;

    return (
        <div className = "novedad-item">
        <h1>{titulo}</h1>
        <h2>{descripcion}</h2>
        <img src={imagen} alt={titulo} />
        <div dangerouslySetInnerHTML={{ __html: cuerpo }} />
        <hr />
        </div> 
    );
}
 
export default NovedadItem; 
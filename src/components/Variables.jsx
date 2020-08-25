import React from 'react'

const Variables = () => {
    const saludo = 'Saludo desde Variables';
    const imagen = 'https://www.doogweb.es/wp-content/uploads/2016/02/Lobos-aullando.jpg';
    
    return (
        <div>
            
                <h1>{saludo}</h1>
                <img src={imagen} alt="Imagen" /> 
            
            
        </div>
    )
}

export default Variables

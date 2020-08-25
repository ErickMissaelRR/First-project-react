import React from 'react'

const Contador = () => {

    const [contador, setContador] = React.useState(0);

    // const aumentar = () => {
    //     console.log('click');
    //     setContador(contador + 1)
    // }
    return (
        <div>
            <h3>Contador</h3>
            <h3>Nuestro numero aumentado: { contador }</h3>
            <h4>
                { contador < 5 ? 'Es menor a 5' : contador >= 6 && contador < 10? 'es mayor 6' : 'NaN'}
            </h4>
            <button onClick={ () => setContador(contador + 1)}>Incrementar</button>
        </div>
    )
}

export default Contador

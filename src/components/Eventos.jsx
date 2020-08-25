import React, { useState } from 'react'





const Eventos = () => {

    const [text, setText] = useState('Texto desde estado');

    const _click = () => {
        console.log("Click");
        setText('Cambiando texto---')
    }

    return (
        <div>
            <hr/>
            <h3>{ text }</h3>
            <button onClick={ () => _click()}>Click</button>
        </div>
    )
}

export default Eventos

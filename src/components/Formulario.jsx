import React from 'react'

const Formulario = () => {

const [fruta, setFruta] = React.useState('');

const [descripcion, setDescripcion] = React.useState('');

const guardarDatos = (e)  => {
    e.preventDefault()

    if(!fruta.trim()){
        console.log("fruta vacia")
        return
    }
    if(!descripcion.trim()){
        console.log("descripcion vacia")
        return
    }

    console.log("procesando..." + fruta + descripcion)

    e.target.reset()
    setFruta('')
    setDescripcion('')
    
}

    return (
        <div>
            <h2>Formularios</h2>
            <form onSubmit={ guardarDatos }>
                <input type="text" 
                placeholder="Ingrese una fruta" 
                className="form-control mb-2"
                onChange = { (e) => setFruta(e.target.value) }/>

                <input type="text" 
                placeholder="Ingrese una descripcion" 
                className="form-control  mb-2"
                onChange = { (e) => setDescripcion(e.target.value) } />

                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </form>
        </div>
    )
}

export default Formulario

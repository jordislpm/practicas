import React from 'react';

function Boton(props){
    return (
        <>
        <button className="btn btn-dark" onClick={props.botonClick}>Stop/Start</button>
        </>
    )
}



export default Boton
import React from 'react';
import Boton from './Boton';


export default function Business (props){
return(
    <div>
    <h2>{props.name}</h2>
    <p>{props.content}</p>
    <Boton name="Call to Action!"/>
    </div>
)
}


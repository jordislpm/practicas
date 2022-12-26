import React from 'react';
import Boton from './Boton';


export default function Card (props){
return(
    <div>
        <h2>{props.name}</h2>
        <p>{props.content}</p>
        <div className=' row border border-2'>
        <Boton name="More Info!"/>
        </div>
    </div>
)
}
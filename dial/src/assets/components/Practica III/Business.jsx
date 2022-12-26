import React from 'react';
import Boton from './Boton';


function Business (props){
return(
    <div>
    <h2>{props.name}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ipsum reprehenderit labore totam tempore nesciunt est voluptatem aliquid, dolore cupiditate error consequatur qui pariatur ab incidunt quo ea quod officiis?</p>
    <Boton name="Call to Action!"/>
    </div>
)
}

export default Business;
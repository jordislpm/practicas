import React from 'react';
import Nota from './Nota';


export default function Notas (props){
return(
<ul className="list-group list-group-flush">
{props.notas.map((note,i)=>{
        return <Nota key={`${note}${i}`} nota={note.nota}
        />
    })}
  
</ul>
)
}




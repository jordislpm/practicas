
import React from 'react';
import Mes from './Mes';
function Tabla(props){

    return(<table className="table table-dark table-striped m-5 pe-5 ">
            <thead>
              <tr>
                <th scope="col">#Mes No.</th>
                <th scope="col">Cuota</th>
                <th scope="col">Capital</th>
                <th scope="col">Interes</th>
                <th scope="col">Balance</th>
              </tr>
            </thead>
            <tbody>
            {props.meses.map((me) => {
              return <Mes 
              key={`${me.key}`}
              id={me.id}
              Cuota={me.Cuota}
              Capital={me.Capital}
              Interes={me.Interes}
              Balance={me.Balance}/>
            })}
          </tbody>
          </table>
        )
    
}





export default Tabla
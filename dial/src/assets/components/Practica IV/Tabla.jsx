
import React from 'react';

function Tabla(props){

    return(<table className="table">
            <thead>
              <tr>
                <th scope="col">#No.</th>
                <th scope="col">Cuota</th>
                <th scope="col">Capital</th>
                <th scope="col">Interes</th>
                <th scope="col">Balance</th>
              </tr>
            </thead>
            <tbody>
              {props.meses.map((me) => {
                return <tr key={me.key}>
                <th>{me.id}</th>
                <td>{me.Cuota}</td>
                <td>{me.Capital}</td>
                <td>{me.Interes}</td>
                <td>{me.Balance}</td>
              </tr>
              })}
            </tbody>
          </table>
        )
    
}



function Mes (props){
  return(
  <tr>
      <th>{props.id}</th>
      <td>{props.cuota}</td>
      <td>{props.capital}</td>
      <td>{props.interes}</td>
      <td>{props.balance}</td>
    </tr>
  )
}

export default Tabla
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './assets/components/Practica IV/Form';
import Tabla from './assets/components/Practica IV/Tabla';




function AppFuntional (){

    const [monto, setMonto] = useState(0)
    
      const handleMonto = (e)=>{
        setMonto(e.target.value)
      };
    
    const [interesAnual,setInteresAnual] = useState(0)

     const handleInteresAnual = (e)=>{
        setInteresAnual(e.target.value)
      };
    
    const [cuota,setCuota] = useState(0)
    
      const handleCuota = (e)=>{
        setCuota(e.target.value)
      };

    const [meses,setMeses] = useState([]);

    const createMes = (e)=>{
      e.preventDefault()
        let V = monto;
        let N = cuota
        let I = (interesAnual/12)/100;
        let interesMensual = (V * I);
        let C = (interesMensual/ (1-(1 + I)**(N * -1))).toFixed(2)
        let capital = C - interesMensual;
        let balance = V - capital;
        let interes = (interesMensual).toFixed(2);
        const interesPorc = (interesMensual / 100).toFixed(2);
       
        
  for (let i = 0; i < N; i++) {


    const newMes ={
    id: `${i +1}`,
    key: `${i+1}`,
    Mes:`${i+1}`,
    Cuota: `${C}`,
    Capital: capital,
    Interes: interes,
    Balance: balance
     };
  console.log(newMes)
  setMeses([... meses, newMes]);

  interes = (balance * interesPorc/100).toFixed(2);
  capital = (C - interes).toFixed(2);
  balance = (balance - capital).toFixed(2);
      
      }  

console.log(meses)
    }
       

    

    return(
    <div>
      <h2>calculadora financiera de cuota de prestamos</h2>
      <div id="formulario">
        <Form 
        cuota={cuota}
        monto={monto} 
        interesAnual={interesAnual}
        createMes={createMes}
        handleMonto={handleMonto} 
        handleCuota={handleCuota}
        handleInteresAnual={handleInteresAnual}/>
      </div>
     <div>
   {meses.length >= 1 && <Tabla meses={meses}/>}
   {meses.length < 1 && <h4>calcula tu prestamo</h4>}
     </div>
      
      
  
    </div>
    )


}

export default AppFuntional
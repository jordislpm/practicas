import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './assets/components/Practica IV/Form';
import Tabla from './assets/components/Practica IV/Tabla';
import Notas from './assets/components/Practica IV/Notas';



function AppFuntional (){

    const arr = [];
    const[notas,setNotas] = useState([
      {nota:"Los resultados de esta simulación son aproximados.",
        },{
          nota:"Se consideran meses de 30 días y años de 360 días."  
        },{
          nota:"No se contempló período de gracia y el primer vencimiento es a 30 días."
        },{
          nota:"En caso de préstamos hipotecarios, la cuota mensual aumentaría producto del seguro de vida y de propiedad, no incluidos en el cálculo.",
        }
    ])

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

    const [meses,setMeses] = useState([...arr]);

    const createMes = (e)=>{
      e.preventDefault()
        let V = monto;
        let N = cuota
        let I = (interesAnual/12)/100;
        let interesMensual = (V * I);
        let C = (interesMensual/ (1-(1 + I)**(N * -1))).toFixed(2)
        let capital = (C - interesMensual).toFixed(2);
        let balance = (V - capital).toFixed(2);
        let interes = (interesMensual).toFixed(2);
        const interesPorc = (interesMensual / 100).toFixed(2);
       
        
  for (let i = 0; i < cuota; i++) {


    const newMes ={
    id: `${i +1}`,
    key: `clave${i+1}`,
    Mes:`${i+1}`,
    Cuota: `${C}`,
    Capital: capital,
    Interes: interes,
    Balance: balance
     };
  arr.push(newMes)
  

  interes = (balance * interesPorc/100).toFixed(2);
  capital = (C - interes).toFixed(2);
  balance = (balance - capital).toFixed(2);
  if(balance < 1){
    balance = 0
  }
      
      }  
      setMeses([...arr])
      setInteresAnual(0)
      setMonto(0)
      setCuota(0)
      ;
    }
       

    

    return(
    <div className="row justify-content-lg-center bg-light text-dark">
      <di>
      <h2 className="h2 text-center">Calculadora Financiera de Cuotas de prestamos</h2>
      </di>
      <div className="row px-0 mx-0">
      <div className="col my-2 mx-4 bg-dark text-white" >
      <Form 
        cuota={cuota}
        monto={monto} 
        interesAnual={interesAnual}
        createMes={createMes}
        handleMonto={handleMonto} 
        handleCuota={handleCuota}
        handleInteresAnual={handleInteresAnual}/>
      </div>
      <div className="col mx-4 bg-light text-dark">
      <Notas notas={notas}/>
      </div>
    </div>

     
     <div className="bg-dark text-white">
   {meses.length > 0 && <Tabla meses={meses}/>}
   
     </div>
      
      
  
    </div>
    )


}

export default AppFuntional
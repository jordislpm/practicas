import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './assets/components/Practica III/MenuBar';
import Secction1 from './assets/components/Practica III/Secction1';
import Secction2 from './assets/components/Practica III/Secction2';
import Secction3 from './assets/components/Practica III/Secction3';
import Footer from './assets/components/Practica III/Footer';

import Form from './assets/components/Practica IV/Form';
import Tabla from './assets/components/Practica IV/Tabla';




export default class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      cards:[
        {
          name: "Card One",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum animi blanditiis repellendus praesentium delectus! Libero a atque distinctio illum veritatis, quae quasi asperiores perspiciatis excepturi soluta harum pariatur, nesciunt odit!"
        },
        {
          name: "Card Two",
          content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, architecto. Expedita quaerat iste magnam, non praesentium totam deserunt earum sapiente placeat necessitatibus nostrum eum, odit sint culpa dignissimos natus? Quia."
        },
        {
          name: "Card Three",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, facere aliquid. Omnis ea numquam, sint vel nesciunt nemo maiores eos temporibus, officiis, accusamus odit doloribus fuga hic deserunt porro iusto."
        }

      ],

      businessData:[
        {
          name:"Business Name or Tagline",
          content: "This is a template that is great for small business. it doesn't have too much fancy. flare to it, but it makes a great use of the standard Bootstrap core components, feel free to use this template fot any proyects you want!"
        },

        {
          name:"Business other information",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsa nam voluptates dignissimos odio laudantium voluptate? Magnam nihil veniam sed quaerat illum obcaecati sequi temporibus inventore porro iusto. Molestiae, labore"
        },
        {
          name:"Business for different thinks",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nam odit odio tenetur quidem laboriosam commodi, est exercitationem cupiditate ea facilis molestiae, nihil, ratione voluptatibus vel enim aliquid unde mollitia."
        }
      ],
      img:[
        {
          url:"https://batterymachinery.in/wp-content/uploads/2020/08/900X400.jpg"
        },
        {
          url: "https://www.bgcdc.org/wordpress/wp-content/uploads/2020/08/900x400.png"
        }
      ],
      values:["hola"],
      monto:0,
      interesAnual:0,
      cuota:0
      
    }
  };


  createMes = (e,monto,interesAnual,cuota)=>{
  
    e.preventDefault();
    let V = monto;
    let N = cuota
    let I = (interesAnual/12)/100;
    let interesMensual = (V * I);
    let C = (interesMensual/ (1-(1 + I)**(N * -1))).toFixed(2)
    let porcMensual = interesMensual /100;
    let capital = C - interesMensual;
    let balance = V - capital;
    let interes = interesMensual;
    const interesPorc = interesMensual / 100;

    for (let i = 0; i < cuota; i++) {



        const mes ={
            Mes:`${i+1}`,
            Cuota: `${C}`,
            capital:`${capital}`,
            Interes:`${interes}`,
            Balance: `${balance}`
        
        };

        this.setState({values:[mes]})
        interes = (balance * interesPorc/100).toFixed(2);
        capital = (C - interes).toFixed(2);
        balance = (balance - capital).toFixed(2);
    }
   
    console.log(this.state.values)
}

  handleMonto = (e)=>{
    this.setState({monto:e.target.value})
  };


  handleInteresAnual = (e)=>{
    this.setState({interesAnual:e.target.value})
  };

  handleCuota = (e)=>{
    this.setState({cuota:e.target.value})
  };

  render(){
    return <div>
    <h2>calculadora financiera de cuota de prestamos</h2>
    <Form 
    cuota={this.state.cuota}
    monto={this.state.monto} 
    interesAnual={this.state.interesAnual}
    createMes={this.createMes}
    handleMonto={this.handleMonto} 
    handleCuota={this.handleCuota}
    handleInteresAnual={this.handleInteresAnual}
   
    />
    <Tabla meses={meses}/>
    
    </div>
  }
}








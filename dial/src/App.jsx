import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './assets/components/Practica III/MenuBar';
import Secction1 from './assets/components/Practica III/Secction1';
import Secction2 from './assets/components/Practica III/Secction2';
import Secction3 from './assets/components/Practica III/Secction3';
import Footer from './assets/components/Practica III/Footer';



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
      ]
      
    }
  }
  render(){
    return <div clasName="showtime">
    <MenuBar name="Jordis.dev"/>
    <div className='container px-8'>
    <Secction1 businessData={this.state.businessData[0]} img={this.state.img[0]}/>
    <Secction2/>
    <Secction3 cards={this.state.cards}/>
    </div>
    <Footer/>
   

    </div>
  }
}








import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './assets/components/Practica III/MenuBar';
import Boton from './assets/components/Practica III/Boton';
import Business from './assets/components/Practica III/Business';



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
      ]
    }
  }
  render(){
    return <div clasName="showtime">
    <MenuBar name="Jordis.dev"/>
    <Business />
    </div>
  }
}


function Secction1(props) {
  return(
    <div class="row">
    <div class="col">
      <Business />
    </div>
    <div class="col">
    <Business/>
    </div>
  </div>
  )
}



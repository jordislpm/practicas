import React, { startTransition } from 'react';
import Boton from './Boton';
import 'bootstrap/dist/css/bootstrap.min.css';

class ShowTime extends React.Component{
    constructor(props){
        super(props);
        this.botonClick = this.botonClick.bind(this);
        this.state ={
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),
            status: 'start'
        }
        
    }
    botonClick(){
        if(this.state.status == 'start'){
            this.state.status = 'stop'
        } else if(this.state.status == 'stop'){
            this.state.status = 'start'
        }

    }


    actualizacion(){
        if(this.state.status == 'start'){ this.setState({
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString()
        });}
       
        }
    componentDidMount() {
            this.intervalos = setInterval(() =>
            this.actualizacion(),
            1000
            );}

    componentDidUpdate(){
        this.intervalos;
    }
       
    render(){
        return <div className='container'>
            <h3>Clock:</h3>
            <p>{this.state.date}</p>
            <p>{this.state.time}</p>
            <Boton botonClick={this.botonClick}/>
        </div>
    }
}




export default ShowTime
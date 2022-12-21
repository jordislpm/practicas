import React from 'react'
import ShowTime from './assets/components/ShowTime'
import './assets/components/css/showtime.css'
import './assets/components/css/clock.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
    <div className='clock'>
  <ShowTime clasName="showtime"/>
  </div>

  ) 
}
export default App

import React from 'react'
import RestaurantSearch from './RestaurantSearch'
import config from '../config'


function Home(props) {
  // console.log(config.SERVER_URL);
  return(
    <div>
      <h1> I feel like</h1>
      <h2>{config.REACT_APP_SERVER_URL}</h2>
      <RestaurantSearch {...props}/>
     
      
    </div>
  )
}

export default Home

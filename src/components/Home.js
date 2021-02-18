import React from 'react'
import RestaurantSearch from './RestaurantSearch'


function Home(props) {
  return(
    <div>
      <h1> I feel like</h1>
      <RestaurantSearch {...props}/>
    </div>
  )
}

export default Home

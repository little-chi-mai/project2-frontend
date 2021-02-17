import React, {Component} from 'react';
import axios from 'axios';
import ButtonCreateEvent from './ButtonCreateEvent'
import { config } from './Constants'


const ALL_RESTAURANTS_URL = config.url.API_URL + '/restaurants.json'

class ShowRestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantList: []
    }
    axios.get(ALL_RESTAURANTS_URL).then((response) => {
      const restaurants = response.data.filter((restaurant) =>
        restaurant.user && restaurant.user.id === props.user.id
      );
      console.log(restaurants);
      this.setState({restaurantList: restaurants})
      console.log(this.state.restaurantList)
    })
  }


  render() {
    return(
      <div>
        {this.state.restaurantList.map(restaurant =>
          <div>
            <h3>{restaurant.name}</h3>
            <ButtonCreateEvent restaurant={restaurant}/>
            <p>Address: {restaurant.address}</p>
            <p>Website: <a href={restaurant.website}>{restaurant.website}</a></p>
            <p>Contact: {restaurant.contact}</p>
            <p>Rating: {restaurant.rating}/5</p>
            <p>Price level: {restaurant.price_level}/5</p>
            <p>Restaurant's photo coming soon</p>
          </div>
        )}
      </div>
    )
  }
}

export default ShowRestaurantList

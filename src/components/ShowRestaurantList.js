import React, {Component} from 'react';
import axios from 'axios';
import ButtonCreateEvent from './ButtonCreateEvent'

const ALL_RESTAURANTS_URL = 'http://localhost:3000/restaurants.json'

const GetRestaurantURL = (id) => {
  return `http://localhost:3000/restaurants/${id}.json`
}

class ShowRestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantList: []
    }
    this.updateList = this.updateList.bind(this)
    this.updateList();
  }

  updateList() {
    axios.get(ALL_RESTAURANTS_URL).then((response) => {
      const restaurants = response.data.filter((restaurant) =>
        restaurant.user && restaurant.user.id === this.props.user.id
      );
      this.setState({restaurantList: restaurants});
    })
  }


  render() {
    return(
      <div>
        {this.state.restaurantList.map(restaurant =>
          <div>
            <h3>{restaurant.name}</h3>
            <ButtonCreateEvent restaurant={restaurant}/>
            <ButtonRemove updateList={this.updateList} restaurant={restaurant}/>
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

function ButtonRemove(props) {

  function _handleDelete(callback) {
    const RESTAURANT_ID = GetRestaurantURL(props.restaurant.id)
    axios.delete(RESTAURANT_ID, {id: props.restaurant.id}).then((response) => {
      callback(response)
    })
  }

  return(
    <button onClick={() => {
      _handleDelete(() => {
        props.updateList()
      });
    }}>Remove from list</button>
  )
}

export default ShowRestaurantList

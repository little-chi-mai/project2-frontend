import React, {Component} from 'react'
import axios from 'axios'
import { config } from './Constants'


const ALL_RESTAURANTS_URL = 'https://agile-tor-91190.herokuapp.com/restaurants.json'

function AddToWishList(restaurant, user_id, callback) {
  console.log("AddToWishList()");
  console.log(restaurant);
  const newRestaurant = {
    name: restaurant.name,
    longitude: restaurant.geometry.location.lng,
    latitude: restaurant.geometry.location.lat,
    address: restaurant.formatted_address,
    // image: restaurant.image,
    price_level: restaurant.price_level,
    rating: restaurant.rating,
    website: restaurant.website,
    // contact: restaurant.contact
    user_id: user_id,
    place_id: restaurant.place_id,
  }

  axios.post(ALL_RESTAURANTS_URL, newRestaurant).then((response) => {
    callback(response.data.id);
  })
}

class ButtonAddToWishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaved: false,
    }

    this.getAllRestaurants = this.getAllRestaurants.bind(this)
    this.isRestaurantSaved = this.isRestaurantSaved.bind(this)

  }

  getAllRestaurants(callback) {
    axios.get(ALL_RESTAURANTS_URL).then((response) => {
      const restaurants = response.data.filter((restaurant) =>
        restaurant.user && restaurant.user.id === this.props.user.id
      );
      callback(restaurants);
    })
  }

  isRestaurantSaved() {
    this.getAllRestaurants((restaurants) => {
      if (restaurants !== []) {
        const restaurantFound = restaurants.find(restaurant => restaurant.place_id === this.props.restaurant.place_id)
        if (restaurantFound) {
          this.setState({isSaved: true});
        } else {
          this.setState({isSaved: false});
        }
      }
    });
  }

  componentDidMount() {
    // console.log('My component was rendered to the screen')
    this.isRestaurantSaved();
  }

  componentDidUpdate(prevProps) {
    // console.log('My component was just updated')
    // this.isRestaurantSaved();
    if (this.props.restaurant !== prevProps.restaurant) {
      // console.log('SETSTATE');
      this.isRestaurantSaved();
    }
  }

  renderContent() {
    return (
      <div>
      {
        this.state.isSaved
        ? <button>SAVED!</button>
        : <button onClick={() => AddToWishList(this.props.restaurant, this.props.user.id, () => {this.setState({isSaved: true})})}>Add to your Wishlist</button>
      }
      </div>
    )
  }


  render() {
    // console.log('RENDERED');
    return(
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export {AddToWishList}
export default ButtonAddToWishList

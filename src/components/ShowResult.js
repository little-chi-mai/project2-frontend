import React, {Component} from 'react';
import ButtonAddToWishList from './ButtonAddToWishList'
import ButtonAddAndCreate from './ButtonAddAndCreate'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import ImageShow from './ImageShow'

const SERVER_URL = 'http://localhost:3000'
const ALL_RESTAURANTS_URL = SERVER_URL + '/restaurants.json'

class ShowResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: props.restaurant,
      isSaved: false
    }
    
    this.getAllRestaurants = this.getAllRestaurants.bind(this)
    this.isRestaurantSaved = this.isRestaurantSaved.bind(this)
  }


  getAllRestaurants(callback) {
    axios.get(ALL_RESTAURANTS_URL).then((response) => {
      const restaurants = response.data.filter((restaurant) =>
        restaurant.user_id && restaurant.user_id === this.props.user.id
      );
      callback(restaurants);
    })
  }

  isRestaurantSaved() {
    this.getAllRestaurants((restaurants) => {
      if (this.props.restaurants.length !== 0) {
        const restaurantFound = restaurants.find(restaurant => restaurant.place_id === this.props.restaurant.place_id)
        if (restaurantFound) {
          this.setState({isSaved: true, restaurant: restaurantFound});
        } else {
          this.setState({isSaved: false});
        }
      }
    });
  }
  
  componentDidMount() {
    this.isRestaurantSaved();
    console.log("BEFORE SETSTATE", this.props.restaurant);
    this.setState({restaurant: this.props.restaurant})
  }

  componentDidUpdate(prevProps) {
    if (this.props.restaurant !== prevProps.restaurant) {
      this.isRestaurantSaved();
    }
  }

  // _handleClick() {
  //   console.log("CLICKED");
  // }

  addToWishList(restaurant, user_id, callback) {
    const newRestaurant = {
      name: restaurant.name,
      longitude: restaurant.lng,
      latitude: restaurant.lat,
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
      this.isRestaurantSaved();
    })
  }


  render() {

    return(
      <div>
        {this.props.restaurant &&
          <Card>
            <Card.Body>

              <h3>{this.props.restaurant.name}</h3>
              {this.props.restaurant.name &&
              <div>
                {
                  this.state.isSaved
                  ? <button>SAVED!</button>
                  : <button onClick={() => this.addToWishList(this.props.restaurant, this.props.user.id, () => {this.setState({isSaved: true})})}>Add to your Wishlist</button>
                }
                <ButtonAddAndCreate {...this.props} {...this.state}/>
              </div>}

              <p>{this.props.restaurant.formatted_address}</p>
              {this.props.restaurant.rating &&
                <p>Rating: {this.props.restaurant.rating}</p>
              }
              {this.props.restaurant.user_ratings_total &&
                <p>Total user rating: {this.props.restaurant.user_ratings_total}</p>
              }

              </Card.Body>
                {this.props.restaurant && this.props.restaurant.photos && <ImageShow photoreference={this.props.restaurant.place_id} />}
{/*   
                <iframe 
                  width="600" height="450" loading="lazy"
                  src={`https://maps.google.com/maps?q=${this.props.restaurant.lat},
                  ${this.props.restaurant.lng}&key=AIzaSyBvx27HoWvmHT_CPgA1oN6q5ISJtsB5YmM;output=embed`}
                >
                </iframe> */}
              </Card>
              
        }
        {!this.props.restaurant && this.props.searchButtonClicked &&
          <h3>...No such thing on Earth, dude!</h3>
        }
        

      </div>
    )
  }
}

export default ShowResult;

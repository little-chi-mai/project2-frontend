import React, {Component} from 'react'
import axios from 'axios'
import config from '../config'

const SERVER_URL = config.SERVER_URL
const ALL_RESTAURANTS_URL = SERVER_URL + '/restaurants.json'

function AddToWishList(restaurant, user_id, image_url, callback) {
  console.log("AddToWishList()");
  console.log(restaurant);
  const newRestaurant = {
    name: restaurant.name,
    longitude: restaurant.lng,
    latitude: restaurant.lat,
    address: restaurant.formatted_address,
    image: image_url,
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

  renderContent() {
    return (
      <div>
      
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

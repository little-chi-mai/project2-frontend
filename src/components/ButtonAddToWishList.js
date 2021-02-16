import React, {Component} from 'react'
import axios from 'axios'

const ALL_RESTAURANTS_URL = 'http://localhost:3000/restaurants.json'

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
    user_id: user_id
  }
  console.log(newRestaurant);
  axios.post(ALL_RESTAURANTS_URL, newRestaurant).then((response) => {
    console.log(response.data.id)
    // return response.data.id;
    callback(response.data.id);
  })
}

function ButtonAddToWishList(props) {
  console.log(props.user);
  return(
    <button onClick={() => AddToWishList(props.restaurant, props.user.id, () => {})}>
      Add to your Wishlist
    </button>
  )
}

export {AddToWishList}
export default ButtonAddToWishList

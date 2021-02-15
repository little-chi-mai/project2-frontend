import React, {Component} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';

const GetRestaurant_URL = (id) => {
  return `http://localhost:3000/restaurants/${id}`
}

const GetId = () => {
  let {id} = useParams();
  return(
    <ShowRestaurant id={parseInt(id)}/>
  )
}

class ShowRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {}
    }
    console.log(props.match.params.id);

    const restaurant_URL = GetRestaurant_URL(props.match.params.id);
    console.log(restaurant_URL);

    const fetchRestaurant = () => {
      axios.get(restaurant_URL).then((response) => {
        // console.log(response);
        this.setState({restaurant: response.data.restaurants});
        // console.log(this.state);
      })
    }

    fetchRestaurant();
    // console.log(this.state);
  }

  render() {
    return(
      <div>
        <h2>{this.state.restaurant.name}</h2>
        <p>Address: {this.state.restaurant.address}</p>
        <p>Website: <a href={this.state.restaurant.website}>{this.state.restaurant.website}</a></p>
        <p>Contact: {this.state.restaurant.contact}</p>
        <p>Rating: {this.state.restaurant.rating}/5</p>
        <p>Price level: {this.state.restaurant.price_level}/5</p>
        <p>Restaurant's photo coming soon</p>

        <button>Create event!</button>
      </div>
    )
  }
}

export default ShowRestaurant;

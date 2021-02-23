import React, {Component} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import ButtonCreateEvent from './ButtonCreateEvent';
import { config } from './Constants'


const GetRestaurant_URL = (id) => {
  return 'https://agile-tor-91190.herokuapp.com/' + `restaurants/${id}`
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

    const restaurant_URL = GetRestaurant_URL(props.match.params.id);

    const fetchRestaurant = () => {
      axios.get(restaurant_URL).then((response) => {
        this.setState({restaurant: response.data.restaurants});
      })
    }
    fetchRestaurant();
  }

  render() {
    return(
      <div>
        <h2>{this.state.restaurant.name}</h2>
        <p>Address: {this.state.restaurant.address}</p>
        {this.state.restaurant.website && <p>Website: <a href={this.state.restaurant.website}>{this.state.restaurant.website}</a></p>}
        {this.state.restaurant.contact && <p>Contact: {this.state.restaurant.contact}</p>}
        {this.state.restaurant.rating && <p>Rating: {this.state.restaurant.rating}/5</p>}
        {this.state.restaurant.price_level && <p>Price level: {this.state.restaurant.price_level}/5</p>}

        <ButtonCreateEvent restaurant={this.state.restaurant}/>
      </div>
    )
  }
}

export default ShowRestaurant;

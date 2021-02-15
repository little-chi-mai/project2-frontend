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



  // const [restaurant, setRestaurant] = useState(''); // Initial state


  render() {
    return(
      <div>
        <h2>{this.state.restaurant.name}</h2>
        <p>Address: {this.state.restaurant.address}</p>
        <a href={this.state.restaurant.website}><p>{this.state.restaurant.website}</p></a>
        <p>{this.state.restaurant.contact}</p>
        <p>{this.state.restaurant.rating}</p>
        <p>{this.state.restaurant.price_level}</p>
        <p>Restaurant's photo coming soon</p>
      </div>
    )
  }
}

export default ShowRestaurant;

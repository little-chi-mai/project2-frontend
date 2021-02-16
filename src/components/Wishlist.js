import React, {Component} from 'react';
import ShowRestaurantList from './ShowRestaurantList'

class Wishlist extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div>
        <h1>Your wishlist</h1>
        <ShowRestaurantList {...this.props} />
      </div>
    )
  }
}

export default Wishlist;

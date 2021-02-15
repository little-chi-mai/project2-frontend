import React, {Component} from 'react';

class ShowResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantObj: props.restaurantObj
    }
  }

  render() {
    return(
      <div>
        <h3>{this.props.restaurantObj.name}</h3>
        <p>{this.props.restaurantObj.formatted_address}</p>
        {this.props.restaurantObj.rating &&
          <p>Rating: {this.props.restaurantObj.rating}</p>
        }
        {this.props.restaurantObj.user_ratings_total &&
          <p>Total user rating: {this.props.restaurantObj.user_ratings_total}</p>
        }
      </div>
    )
  }
}

export default ShowResult;

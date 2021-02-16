import React, {Component} from 'react';
import ButtonAddToWishList from './ButtonAddToWishList'
import ButtonAddAndCreate from './ButtonAddAndCreate'

class ShowResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: props.restaurant
    }
  }

  render() {
    return(
      <div>
        {this.props.restaurant.name &&
          <div>
            <h3>{this.props.restaurant.name}</h3>
            <ButtonAddToWishList {...this.props} restaurant={this.props.restaurant}/>
            <ButtonAddAndCreate {...this.props} restaurant={this.props.restaurant}/>
          </div>
        }
        <p>{this.props.restaurant.formatted_address}</p>
        {this.props.restaurant.rating &&
          <p>Rating: {this.props.restaurant.rating}</p>
        }
        {this.props.restaurant.user_ratings_total &&
          <p>Total user rating: {this.props.restaurant.user_ratings_total}</p>
        }

      </div>
    )
  }
}

export default ShowResult;

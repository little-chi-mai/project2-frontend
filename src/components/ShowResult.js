import React, {Component} from 'react';
import ButtonAddToWishList from './ButtonAddToWishList'
import ButtonAddAndCreate from './ButtonAddAndCreate'
import axios from 'axios'

class ShowResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: props.restaurant
    }
    this.fetchImage = this.fetchImage.bind(this)
    this.fetchImage();
  }

  fetchImage(reference) {
    const generateURL = function(reference) {
      return [
        'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=',
        reference,
        '&key=AIzaSyDpF67gcwqJT5Lku1Aj-78unvq0OpKUNpA'
      ].join('')
    };

    axios.get(generateURL(reference)).then((response) => {
      // this.setState({
      //   image: response
      // })
      console.log(response)
    });
  }


  render() {
    return(
      <div>
        {this.props.restaurant &&
          <div>
            <h3>{this.props.restaurant.name}</h3>
            {this.props.restaurant.name &&
            <div>
              <ButtonAddToWishList {...this.props} restaurant={this.props.restaurant}/>
              <ButtonAddAndCreate {...this.props} restaurant={this.props.restaurant}/>
            </div>}

            <p>{this.props.restaurant.formatted_address}</p>
            {this.props.restaurant.rating &&
              <p>Rating: {this.props.restaurant.rating}</p>
            }
            {this.props.restaurant.user_ratings_total &&
              <p>Total user rating: {this.props.restaurant.user_ratings_total}</p>
            }
          </div>
        }
        {!this.props.restaurant && this.props.searchButtonClicked &&
          <div>
            <h3>...No such thing on Earth, dude!</h3>
          </div>
        }

        <img src="" alt="Image coming soon"/>
      </div>
    )
  }
}

export default ShowResult;

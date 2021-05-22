import React, {Component} from 'react';
import ButtonAddToWishList from './ButtonAddToWishList'
import ButtonAddAndCreate from './ButtonAddAndCreate'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import ImageShow from './ImageShow'



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
        {this.props.restaurant &&
          <Card>
            <Card.Body>

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

              </Card.Body>
                {this.props.restaurant && this.props.restaurant.photos&& <ImageShow photoreference={this.props.restaurant.place_id} />}
  
                <iframe 
                  width="600" height="450" loading="lazy"
                  src={`https://maps.google.com/maps?q=${this.props.restaurant.lat},
                  ${this.props.restaurant.lng}&key=AIzaSyBvx27HoWvmHT_CPgA1oN6q5ISJtsB5YmM;output=embed`}
                >
                </iframe>
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

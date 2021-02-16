import React, {Component} from 'react';
import SearchForm from './SearchForm';
import ShowResult from './ShowResult';
import axios from 'axios';

// const SEARCH_RAILS_URL = 'http://localhost:3000/search/'

class RestaurantSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {}
    }
    this.fetchRestaurant = this.fetchRestaurant.bind(this)
  }

  fetchRestaurant(term) {
    const generateURL = function(term) {
      return [
        'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=',
        term,
        '&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,photos,price_level,user_ratings_total,types,geometry&key=',
        'AIzaSyDpF67gcwqJT5Lku1Aj-78unvq0OpKUNpA'
      ].join('');
    }
    axios.get(generateURL(term)).then((response) => {
      this.setState({restaurant: response.data.candidates[0]})
    })
  }

  render() {
    return(
      <div>
        <SearchForm {...this.props} onSubmit={this.fetchRestaurant}/>
        <ShowResult {...this.props} restaurant={this.state.restaurant}/>
      </div>
    )
  }
}

export default RestaurantSearch

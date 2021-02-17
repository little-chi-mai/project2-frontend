import React, {Component} from 'react';
import SearchForm from './SearchForm';
import ShowResult from './ShowResult';
import axios from 'axios';
import Adventurous from './Adventurous';

// const SEARCH_RAILS_URL = 'http://localhost:3000/search/'

class RestaurantSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      randomNum: 0,
      isRequested: false
    }
    this.fetchRestaurants = this.fetchRestaurants.bind(this)
    this.fetchRandomNum = this.fetchRandomNum.bind(this)
    this.fetchRandomRestaurant = this.fetchRandomRestaurant.bind(this)
  }

  fetchRestaurants(term) {
    const generateURL = function(term) {
      return [
        'https://maps.googleapis.com/maps/api/place/textsearch/json?query=',
        term,
        '&key=AIzaSyDpF67gcwqJT5Lku1Aj-78unvq0OpKUNpA'
      ].join('');
    }
    console.log(generateURL);
    axios.get(generateURL(term)).then((response) => {
      console.log(response.data.results);
      this.setState({
        restaurants: response.data.results,
        isRequested: true
      })
      this.fetchRandomNum();
    })
    // axios.get('http://localhost:3000/search/').then((response) => {
    //   console.log(response);
    // })
  }

  fetchRandomRestaurant(term) {
    const generateURL = function(term) {
      return [
        'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=',
        term,
        '&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,photos,price_level,user_ratings_total,types,place_id,geometry&key=AIzaSyDpF67gcwqJT5Lku1Aj-78unvq0OpKUNpA'
      ].join('')
    };
    console.log(generateURL(term));
    axios.get(generateURL(term)).then((response) => {
      console.log(response.data.candidates);
      this.setState({
        restaurants: response.data.candidates,
        isRequested: true
      })
    });
  }

  fetchRandomNum() {
    console.log('fetchRandomNum()')
    const randomNum = Math.floor(Math.random() * this.state.restaurants.length);
    this.setState({randomNum: randomNum})
  }

  updateState

  render() {
    return(
      <div>
        <Adventurous onClick={this.fetchRandomRestaurant}/>
        <h3>or</h3>
        <SearchForm {...this.props} onSubmit={this.fetchRestaurants} fetchRandomNum={this.fetchRandomNum}/>
        <ShowResult {...this.props} {...this.state} restaurant={this.state.restaurants[this.state.randomNum]}/>
      </div>
    )
  }
}

export default RestaurantSearch

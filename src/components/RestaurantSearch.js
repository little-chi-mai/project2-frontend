import React, {Component} from 'react';
import SearchForm from './SearchForm';
import ShowResult from './ShowResult';
import axios from 'axios';


// const SEARCH_RAILS_URL = 'http://localhost:3000/search/'



class RestaurantSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      randomNum: 0,
      searchButtonClicked: false,
      isIncluded: false
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
    axios.get(generateURL(term)).then((response) => {
      this.setState({
        restaurants: response.data.results,
        searchButtonClicked: true,
        isIncluded: true
      })
      this.fetchRandomNum();
    })
  }

  fetchRandomRestaurant(term) {
    const generateURL = function(term) {
      return [
        'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=',
        term,
        '&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,photos,price_level,user_ratings_total,types,place_id,geometry&key=AIzaSyDpF67gcwqJT5Lku1Aj-78unvq0OpKUNpA'
      ].join('')
    };
    axios.get(generateURL(term)).then((response) => {
      this.setState({
        restaurants: response.data.candidates,
        searchButtonClicked: true,
        isIncluded: true
      })
      this.fetchRandomNum();
    });
  }

  fetchRandomNum() {
    // console.log('fetchRandomNum()')
    const randomNum = Math.floor(Math.random() * this.state.restaurants.length);
    this.setState({randomNum: randomNum})
  }

  _handleSubmit() {
    const adventurousTerms = ['cake', 'steak', 'cookies', 'ice cream', 'thai food', 'good pizza', 'vietnamese', 'korean', 'bbq'];
    const randomTerm = adventurousTerms[Math.floor(Math.random() * adventurousTerms.length)];
    console.log(randomTerm)
    this.fetchRandomRestaurant(randomTerm);
  }


  render() {
    return(
      <div>
        <button onClick={this._handleSubmit}>
          Adventurous!
        </button>
        <h3>or</h3>
        <SearchForm {...this.props} onSubmit={this.fetchRestaurants} fetchRandomNum={this.fetchRandomNum}/>
        <ShowResult {...this.props} {...this.state} restaurant={this.state.restaurants[this.state.randomNum]}/>
      </div>
    )
  }
}

export default RestaurantSearch

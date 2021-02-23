import React, {Component} from 'react';
import SearchForm from './SearchForm';
import ShowResult from './ShowResult';
import axios from 'axios';



const searchBoxStyle = {
  display: 'flex',
  justifyContent: 'center',
  margin: '20px'
}

class RestaurantSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      randomNum: 0,
      searchButtonClicked: false,
      random : true
    }
    this.fetchRestaurants = this.fetchRestaurants.bind(this)
    this.fetchRandomNum = this.fetchRandomNum.bind(this)
    this.fetchRandomRestaurant = this.fetchRandomRestaurant.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }


  fetchRestaurants(term) {
    console.log("ABOUT TO FETCH")
    const generateURL = function(term) {
      return [
        'https://maps.googleapis.com/maps/api/place/textsearch/json?query=',
        term,
        '&key=AIzaSyBTRHwGzxqChaQTIV0yYJS4e8z91KGB0Fk'
      ].join('');
    }
    axios.get(generateURL(term)).then((response) => {
      this.setState({
        restaurants: response.data.results,
        searchButtonClicked: true,
        isIncluded: true,
        random: false,
      })
      this.fetchRandomNum();
    })
  }

  fetchRandomRestaurant(term) {
    const generateURL = function(term) {
      return [
        'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=',
        term,
        '&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,photos,price_level,user_ratings_total,types,place_id,geometry&key=AIzaSyBTRHwGzxqChaQTIV0yYJS4e8z91KGB0Fk'
      ].join('')
    };
    axios.get(generateURL(term)).then((response) => {
      this.setState({
        restaurants: response.data.candidates,
        searchButtonClicked: true,
        isIncluded: true,
        random: true
      })
      this.fetchRandomNum();
    });

  }

  fetchRandomNum() {
    console.log('fetchRandomNum()')
    const randomNum = Math.floor(Math.random() * this.state.restaurants.length);
    this.setState({randomNum: randomNum})
  }

  _handleSubmit() {
    const adventurousTerms = ['cake', 'steak', 'cookies', 'ice cream', 'thai food', 'good pizza', 'vietnamese', 'korean', 'bbq'];
    const randomTerm = adventurousTerms[Math.floor(Math.random() * adventurousTerms.length)];
    console.log(randomTerm);
    this.fetchRandomRestaurant(randomTerm);
  }

  render() {
    return(
      <div>
        <div style={searchBoxStyle}>
          <SearchForm {...this.props} {...this.state} onSubmit={this.fetchRestaurants} fetchRandomNum={this.fetchRandomNum}/>
        </div>
        <div>
          <h3 style={searchBoxStyle}>or</h3>
        </div>
        <div style={searchBoxStyle}>
          <button onClick={this._handleSubmit} style={{backgroundColor: '#E85551', fontSize: '2em'}}>
            Adventurous!
          </button>
        </div>
        <ShowResult {...this.props} {...this.state} restaurant={this.state.restaurants[this.state.randomNum]}/>
      </div>
    )
  }
}

export default RestaurantSearch

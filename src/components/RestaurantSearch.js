import React, {Component} from 'react';
import SearchForm from './SearchForm';
import ShowResult from './ShowResult';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000';

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
      random : true,
      restaurant: {}
    }
    this.fetchRestaurants = this.fetchRestaurants.bind(this)
    this.fetchRandomNum = this.fetchRandomNum.bind(this)
    // this.fetchRandomRestaurant = this.fetchRandomRestaurant.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }
  generateURL (term) {
    return [
      SERVER_URL,
      '/search/',
      term
    ].join('');
  }


  fetchRestaurants(term) {
    console.log("ABOUT TO FETCH")
    
    axios.get(this.generateURL(term)).then((response) => {
      console.log(response.data);
      this.setState({
        restaurants: response.data,
        searchButtonClicked: true,
        isIncluded: true,
        random: false,
        restaurant: response.data[this.state.randomNum]
      })
    })
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
    this.fetchRestaurants(randomTerm);
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
        <ShowResult {...this.props} {...this.state} restaurant={this.state.restaurant}/>
      </div>
    )
  }
}

export default RestaurantSearch

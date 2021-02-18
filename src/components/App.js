import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './NavBar'
import Login from './Login'
import Signup from './Signup'
import ShowRestaurant from './ShowRestaurant'
import EventShow from './EventShow'
import EventCreate from './EventCreate'
import Home from './Home'
import Wishlist from './Wishlist'
import EventList from './EventList'
import { config } from './Constants'


const SERVER_URL = 'https://agile-tor-91190.herokuapp.com/' + 'logged_in'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    };
  }
  componentDidMount() {
    this.loginStatus()
  }

  // CHANGE TO MATCH RAILS SERVER port. mine is 3000
  loginStatus = () => {
    axios.get(SERVER_URL, {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.data.user
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar {...this.props} isLoggedIn={this.state.isLoggedIn}/>

          <Switch>
            <Route exact path='/' component={(props) => <Home {...props} {...this.state} isLoggedIn={this.state.isLoggedIn}/> } />
            <Route exact path='/login' component={(props) => <Login {...props} handleLogin={this.handleLogin}/> } />
            <Route exact path='/signup' component={(props) => <Signup {...props} handleLogin={this.handleLogin} /> } />

            <Route exact path='/event/:id' component = {() => <EventShow {...this.state} />} />

            <Route exact path='/restaurant/:id' component={ShowRestaurant} />
            <Route exact path='/wishlist' component={() => <Wishlist {...this.state} />} />
            <Route exact path='/events' component={() => <EventList {...this.state} />} />
            <Route exact path='/restaurant/:id/create-event' component={() => <EventCreate {...this.state} />} />


          </Switch>
        </BrowserRouter>
      </div>
    );
  }
};

export default App;

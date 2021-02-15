import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import TestingChats from './TestingChats'
import EventShow from './EventShow'

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
    axios.get('http://localhost:3000/logged_in', {withCredentials: true})
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
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={(props) => <Home {...props} isLoggedIn={this.state.isLoggedIn}/> } />
            <Route exact path='/login' component={(props) => <Login {...props} handleLogin={this.handleLogin}/> } />
            <Route exact path='/signup' component={(props) => <Signup {...props} handleLogin={this.handleLogin} /> } />

            <Route path='/event/:id'>
              <EventShow />
            </Route>
            
          </Switch>
        </BrowserRouter>
        <TestingChats />
      </div>
    );
  }
};

export default App;

import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import MyNavBar from './MyNavBar'
import Login from './Login'
import Signup from './Signup'
import ShowRestaurant from './ShowRestaurant'
import EventShow from './EventShow'
import EventCreate from './EventCreate'
import Home from './Home'
import Wishlist from './Wishlist'
import EventList from './EventList'
import Container from 'react-bootstrap/Container';
import Background from './food-pattern.jpg';
import Navbar from 'react-bootstrap/Navbar'
import Welcome from './Welcome'

var appStyle = {
  backgroundSize: '100vh',
  backgroundRepeat: 'repeat',
  backgroundImage: `url(${Background})`,
};


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
      <div style={ appStyle }>
        <MyNavBar {...this.props} isLoggedIn={this.state.isLoggedIn}/>

        <Container style={{backgroundColor: '#F7BA89', minHeight: '100vh', position: 'relative'}}>
          <BrowserRouter>

            <Switch>
              <Route exact path='/project2-frontend' component={(props) => <Home {...props} {...this.state} isLoggedIn={this.state.isLoggedIn}/> } />
              <Route exact path='/login' component={(props) => <Login {...props} handleLogin={this.handleLogin}/> } />
              <Route exact path='/signup' component={(props) => <Signup {...props} handleLogin={this.handleLogin} /> } />

              <Route exact path='/event/:id' component = {() => <EventShow {...this.state} />} />

          

              <Route exact path='/restaurant/:id' component={ShowRestaurant} />
              <Route exact path='/wishlist' component={() => <Wishlist {...this.state} />} />
              <Route exact path='/events' component={() => <EventList {...this.state} />} />
              <Route exact path='/restaurant/:id/create-event' component={() => <EventCreate {...this.state} />} />
            </Switch>
          </BrowserRouter>
        </Container>
        <Navbar className="align-right" bg="dark" variant="dark">
          <Navbar.Brand>
            Proudly brought to you by KNYM
          </Navbar.Brand>
        </Navbar>
      </div>

    );
  }
};

export default App;

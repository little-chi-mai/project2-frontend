import React, {Component} from 'react';
import axios from 'axios';
import {HashRouter, Switch, Route} from 'react-router-dom'
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
import config from '../config'

var appStyle = {
  backgroundSize: '100vh',
  backgroundRepeat: 'repeat',
  backgroundImage: `url(${Background})`,
};


// const SERVER_URL = 'https://agile-tor-91190.herokuapp.com' 
const SERVER_URL = 'http://localhost:3000' 



function Logout(props) {
  const handleClick = (props) => {
      console.log('clicked');
      axios.delete(SERVER_URL + '/logout', {withCredentials: true})
      .then(response => {
        props.handleLogout()
        props.history.push('/')
      })
    .catch(error => console.log(error))
  }
  handleClick(props);
  return(
    <p>Logging out..</p>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    };
  }

  componentDidMount() {
    // window.SERVER_URL = 'http://localhost:3000'; 
    this.loginStatus();
  }

  // CHANGE TO MATCH RAILS SERVER port. mine is 3000
  loginStatus = () => {
    axios.get(SERVER_URL + '/logged_in', {withCredentials: true})
      .then(response => {
        console.log("logged in?", response);
        if (response.data.logged_in && this.state.isLoggedIn === false) {
          console.log('HANDLELOGIN;');
          this.handleLogin(response.data.user)
        } else if (!response.data.logged_in && this.state.isLoggedIn === true) {
          console.log('handleLogout()');
          this.handleLogout();
        }
      })
    .catch(error => console.log('api errors:', error))
  }

  handleLogin = (user) => {
    console.log("Origin handleLogin()");
    this.setState({
      isLoggedIn: true,
      user: user
    })
  }

  handleLogout = () => {
    console.log("Origin handleLogout()");
    this.setState({
      isLoggedIn: false,
      user: {}
    });
  }


  render() {
    return (
      <div style={ appStyle }>

        <Container style={{backgroundColor: '#F7BA89', minHeight: '100vh', position: 'relative'}}>
          <HashRouter>
            <MyNavBar {...this.state} isLoggedIn={this.state.isLoggedIn}/>
            <Switch>

              <Route exact path='/' component={(props) => <Home {...props} {...this.state} isLoggedIn={this.state.isLoggedIn}/> } />
              <Route exact path='/login' component={(props) => <Login {...props} handleLogin={this.handleLogin}/> } />
              <Route exact path='/signup' component={(props) => <Signup {...props} handleLogin={this.handleLogin} /> } />
              <Route exact path='/logout' component={(props) => <Logout {...props} onClick={this.handleClick} handleLogout={this.handleLogout}/> } />

              <Route exact path='/event/:id' component = {(props) => <EventShow {...props} {...this.state} />} />

              <Route exact path='/restaurant/:id' component={ShowRestaurant} />
              <Route exact path='/wishlist' component={(props) => <Wishlist {...props} {...this.state} />} />
              <Route exact path='/events' component={(props) => <EventList {...props} {...this.state} />} />
              <Route exact path='/restaurant/:id/create-event' component={(props) => <EventCreate {...props} {...this.state} />} />
            </Switch>
          </HashRouter>
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

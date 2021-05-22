import React, { Component } from 'react';
import axios from 'axios'
import{ Link } from 'react-router-dom'
import { config } from './Constants'

const SERVER_URL = 'http://localhost:3000';
const LOGIN_URL = SERVER_URL + '/login'


//guide has username, we already have name in the db
class Login extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: '',
        password: '',
        errors: ''
      };
  }

  handleChange = (event) => {
    const{ name, value } = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const { name, password } = this.state
    let user = {
      name: name,
      password: password
    }

    axios.post(LOGIN_URL, {user}, { withCredentials: true })
    .then(response => {
      if (response.data.logged_in) {
        this.props.handleLogin(response.data.user)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  redirect = () => {
    this.props.history.push('/')
  }

  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map(error => { return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  };

render() {
  const { name, email, password } = this.state
  return (
    <div>
      <h1>Log In</h1>
      <p>{this.state.errors}</p>
        <form onSubmit={ this.handleSubmit }>
          <input
            placeholder='name'
            type='text'
            name='name'
            value={ name }
            onChange={ this.handleChange }
          />
          <input
            placeholder='password'
            type='password'
            name='password'
            value={ password }
            onChange={ this.handleChange }
          />
          <button placeholder='submit' type='submit'>
            Log In
          </button>
          <div>
            or <Link to='/signup'>sign up</Link>
          </div>

        </form>
    </div>
    );
  }
}
export default Login;

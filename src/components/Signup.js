import React, { Component } from 'react';
import axios from 'axios'
import { config } from './Constants'


// const SERVER_URL = 'https://agile-tor-91190.herokuapp.com/users'
const SERVER_URL = 'https://agile-tor-91190.herokuapp.com/users'

//guide calls for username, we already have name in the DB
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: []
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const { name, email, password, password_confirmation } = this.state
    let user = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
    //double check your Rails server port, mine is 3000 & React is on 3001
    axios.post(SERVER_URL, { user }, { withCredentials: true }).then(response => {
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        console.log(response.data.errors);
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  redirect = () => {
    this.props.history.push('/project2-frontend')
  }

  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map((error) => {
            return <li key={ error }>{ error }</li>
          })}
        </ul>
      </div>
    )
  };

  render() {
    const { name, email, password, password_confirmation } = this.state
    return (
      <div>
        <h1>Sign Up</h1>
        {this.handleErrors()}
        <form onSubmit={ this.handleSubmit }>
          <input
            placeholder='name'
            type='text'
            name='name'
            value={ name }
            onChange={ this.handleChange }
          />
          <input
            placeholder='email'
            type='email'
            name='email'
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            placeholder='password'
            type='password'
            name='password'
            value={ password }
            onChange={ this.handleChange }
          />
          <input
            placeholder='password confirmation'
            type='password'
            name='password_confirmation'
            value={ password_confirmation }
            onChange={ this.handleChange }
          />

          <button placeholder='submit' type='submit'>
            Sign Up
          </button>

        </form>
      </div>

    );
  }
}
export default Signup;

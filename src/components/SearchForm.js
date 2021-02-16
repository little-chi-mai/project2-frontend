import React, {Component} from 'react';
import ShowResult from './ShowResult'

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    }
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event) {
    this.setState({query: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  }

  render() {
    return(
        <form onSubmit={this._handleSubmit}>
          <input onInput={this._handleInput}/>
          <button>Search {this.state.query}</button>
        </form>
    )
  }
}

export default SearchForm

import React, {Component} from 'react';
import ShowResult from './ShowResult'

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      isQueryChanged: false
    }
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event) {
    this.setState({
      query: event.target.value,
      isQueryChanged: true
    });
  }

  _handleSubmit(event) {
    event.preventDefault();
    console.log('_handleSubmit');
    this.setState({isQueryChanged: false});
    if (this.state.isQueryChanged === true) {
      this.props.onSubmit(this.state.query);
    } else {
      this.props.fetchRandomNum();
    }
  }

  render() {
    return(
        <form onSubmit={this._handleSubmit}>
          <input onInput={this._handleInput}/>
          <button>Hmm...{this.state.query}?</button>
        </form>
    )
  }
}

export default SearchForm

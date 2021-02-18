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
    this.clearInput = this.clearInput.bind(this);
  }

  _handleInput(event) {
    this.setState({
      query: event.target.value,
      isQueryChanged: true
    });
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.setState({isQueryChanged: false});
    if (this.state.isQueryChanged === true) {
      this.props.onSubmit(this.state.query);
    } else {
      this.props.fetchRandomNum();
    }
  }

  clearInput() {
    this.setState({query: ''})
  }

  componentDidUpdate(prevProps) {
    console.log('My component was just updated')
    // this.isRestaurantSaved();
    console.log(this.props.random);
    if (this.props.random && this.props.random !== prevProps.random) {
      console.log('SETSTATE');
      this.setState({query: ''})
    }
  }

  render() {
    return(
        <form onSubmit={this._handleSubmit}>
          <input onInput={this._handleInput} value={this.state.query}/>
          <button>Hmm...{this.state.query}?</button>
        </form>
    )
  }
}

export default SearchForm

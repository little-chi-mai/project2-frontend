import React, { Component } from 'react';
import axios from 'axios';
import config from '../config'

const SERVER_URL = config.SERVER_URL;
const CHAT_URL = SERVER_URL + '/chats';

class CreateNewChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
    this._handleChange = this._handleChange.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)

  }

  _handleChange(event) {
    this.setState(
      {content: event.target.value}
    );
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    this.setState(
      {content: ''}
    );
    axios.post(CHAT_URL, {user_id: this.props.user.id, event_id: this.props.event_id, content: this.state.content}).then((response) => {
      console.log(response);
    }, (error) => {console.log('CreateChat error', error);});

  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <textarea name="" id="" cols="40" rows="5" onChange={this._handleChange} value={this.state.content} />
          <input type="submit" value="Post"/>
        </form>
      </div>
    )
  }
};

export default CreateNewChat;

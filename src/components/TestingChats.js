import React, {Component} from 'react';
import axios from 'axios'
import ChatsDisplay from './ChatsDisplay'
import { config } from './Constants'

const SERVER_URL = 'http://localhost:3000';
const CHATS_URL = SERVER_URL + '/chats.json'

class TestingChats extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.event_id,
      chats:[]
    }
    this.fetchChats = this.fetchChats.bind(this)
  }

  fetchChats() {
    axios.get(CHATS_URL).then((response) => {
      const chat = response.data.filter(chat =>
        chat.event && chat.event.id === this.state.id
      );
      this.setState({
        chats: chat
      });
      setTimeout(this.fetchChats, 4000);
    });
  }

  componentDidMount() {
    this.fetchChats();
  }

  render(){
    return(
      <div>
        <h3>Chatbox</h3>
        <ChatsDisplay chats={this.state.chats}/>
      </div>
    )
  }
}

export default TestingChats

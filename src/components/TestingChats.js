import React, {Component} from 'react';
import axios from 'axios'

import ChatsDisplay from './ChatsDisplay'

const SERVER_URL = 'http://localhost:3000/chats.json'

class TestingChats extends Component {
  constructor(){
    super();
    this.state = {chats:[]}
    const fetchChats = () => {
      axios.get(SERVER_URL).then((response) => {
        this.setState({chats: response.data})
      })
    }
    fetchChats()
  }

  render(){
    return(
      <div>
        <h2>Testing</h2>
        <ChatsDisplay chats = {this.state.chats}/>
      </div>
    )
  }
}

export default TestingChats

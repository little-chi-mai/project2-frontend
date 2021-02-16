import React, {Component} from 'react';
import axios from 'axios'

import ChatsDisplay from './ChatsDisplay'

const SERVER_URL = 'http://localhost:3000/chats.json'

class TestingChats extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.event_id,
      chats:[]
    }
    this.setState = this.setState.bind(this);

    const fetchChats = () => {
      axios.get(SERVER_URL).then((response) => {
        const chat = response.data.filter(chatInfo => chatInfo.event_id === this.state.id
        );
        console.log('Chat response', chat);
        this.setState({
          chats: chat
        })
      })
    }
    fetchChats()
  }

  render(){
    return(
      <div>
        <h2>Testing</h2>
        <ChatsDisplay chats={this.state.chats}/>
      </div>
    )
  }
}

export default TestingChats

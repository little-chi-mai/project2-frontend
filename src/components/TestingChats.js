import React, {Component} from 'react';
import axios from 'axios'
import ChatsDisplay from './ChatsDisplay'
import { config } from './Constants'


const SERVER_URL = config.url.API_URL + 'chats.json'

class TestingChats extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.event_id,
      chats:[]
    }

    const fetchChats = () => {
      axios.get(SERVER_URL).then((response) => {
        const chat = response.data.filter(chatInfo => chatInfo.event_id === this.state.id
        );
        this.setState({
          chats: chat
        });
        setTimeout(fetchChats, 4000);
      });
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

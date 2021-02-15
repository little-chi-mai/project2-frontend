import React, {Component} from 'react';
import {useParams} from "react-router-dom";
import { withRouter } from "react-router";
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/events.json'

const EventShow = () => {
  const {id} = useParams();
  return(
    <EventShowPage event_id = {parseInt(id)}/>
  )
}

class EventShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.event_id,
      title:'',
      introduction:'',
      date:''
    }

    const fetchEvent = () => {
      axios.get(SERVER_URL).then((response) => {
        const event = response.data.find(eventInfo =>
          eventInfo.id === this.state.id
        );
        console.log(event);
        this.setState({
          title:event.title,
          introduction: event.introduction,
          date: event.date
        })
      })
    }

    fetchEvent()
  }

  render(){
    return(
      <div>
        <h2>Event: {this.state.title}</h2>
        <h3>Date: {this.state.date}</h3>
        <p>Summary: {this.state.introduction}</p>
      </div>
    )
  }
}

export default EventShow

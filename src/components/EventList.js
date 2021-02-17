import React, {Component} from 'react';
import axios from 'axios';
import { config } from './Constants'


const ALL_EVENTS_URL = config.url.API_URL + 'events.json'

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: []
    }
    axios.get(ALL_EVENTS_URL).then((response) => {
      console.log(response);

      const events = response.data.filter((event) =>
        event.user && event.user.id === props.user.id
      );
      console.log(events);
      this.setState({eventList: events})
      console.log(this.state.eventList)
    })
  }


  render() {
    return(
      <div>
        <h1>Your Events</h1>
        {this.state.eventList.map(event =>
          <div>
            <h3>{event.title}</h3>
            <p>Introduction: {event.introduction}</p>
            <p>Date: {event.date}</p>
          </div>
        )}
      </div>
    )
  }
}

export default EventList

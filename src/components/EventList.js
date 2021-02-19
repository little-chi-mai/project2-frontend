import React, {Component} from 'react';
import axios from 'axios';
import { config } from './Constants'
import Card from 'react-bootstrap/Card'


const ALL_EVENTS_URL = 'http://localhost:3000/events.json'

const style = {
  margin: '5px',
  padding: '10px'
}

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: []
    }
  }
  componentDidMount() {
    axios.get(ALL_EVENTS_URL).then((response) => {
      const events = response.data.filter((event) =>
        event.user && event.user.id === this.props.user.id
      );
      this.setState({eventList: events})
    })
  }


  render() {
    return(
      <div>
        <h1>Your Events</h1>
        {this.state.eventList.map(event =>
          <Card key={event.id} style={style}>
          <div>
            <h4>{event.title}</h4>
            <h6>Venue: <strong>{event.restaurant.name}</strong></h6>
            <p>Introduction: {event.introduction}</p>
            <p>Date: {event.date}</p>
            <a href={`/event/${event.id}`}><button>Show event</button></a>
          </div>
          </Card>
        )}
      </div>
    )
  }
}

export default EventList

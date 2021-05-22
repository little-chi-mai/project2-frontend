import React, {Component} from 'react';
import{ Link } from 'react-router-dom'
import axios from 'axios';
import { config } from './Constants'
import Card from 'react-bootstrap/Card'

const SERVER_URL = 'http://localhost:3000'
const ALL_EVENTS_URL = SERVER_URL + '/events.json'

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
        {this.state.eventList && this.state.eventList.map(event =>
          <Card key={event.id} style={style}>
          <div>
            {event.title && <h4>{event.title}</h4>}
            {event.restaurant && <h6>Venue: <strong>{event.restaurant.name}</strong></h6>}
            {event.introduction && <p>Introduction: {event.introduction}</p>}
            {event.date && <p>Date: {event.date}</p>}
            <button><Link to={`/event/${event.id}`}>Show event</Link></button>
          </div>
          </Card>
        )}
      </div>
    )
  }
}

export default EventList

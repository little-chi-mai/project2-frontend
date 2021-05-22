import React, {Component} from 'react';
import axios from 'axios';

import EventCards from './EventCards';


const SERVER_URL = 'http://localhost:3000'
const ALL_EVENTS_URL = SERVER_URL + '/events.json'


class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: [],
      attendingEvents: []
    }
  }
  componentDidMount() {
    axios.get(ALL_EVENTS_URL).then((response) => {
      const events = response.data.filter((event) =>
        event.user && event.user.id === this.props.user.id
      );
      this.setState({eventList: events})
    })
    axios.get(SERVER_URL + '/attendants.json').then((response) => {
      const eventInfos = response.data.filter((info) =>
        info.user && info.user.id === this.props.user.id
      );
      eventInfos.map(eventInfo => {
        console.log(SERVER_URL + `/events/${eventInfo.event.id}.json`);
        axios.get(SERVER_URL + `/events/${eventInfo.event.id}.json`).then((response) => {
          this.setState({attendingEvents: [...this.state.attendingEvents, response.data.event]})
        })
    })
    })
  }


  render() {
    return(
      <div>
        <h1>Your Events</h1>
        <h3>--- Current events you are hosting ---</h3>
          <EventCards {...this.props} eventList={this.state.eventList}/>
        <h3>--- Current events you are attending ---</h3>
          <EventCards {...this.props} eventList={this.state.attendingEvents}/>
      </div>
    )
  }
}

export default EventList

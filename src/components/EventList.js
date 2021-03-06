import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';


import EventCards from './EventCards';
import config from '../config'

const SERVER_URL = config.SERVER_URL;
const ALL_EVENTS_URL = SERVER_URL + '/events.json';


class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: [],
      attendingEvents: [],
      expiredEvents: []
    }
  }
  componentDidMount() {
    axios.get(ALL_EVENTS_URL).then((response) => {
      const events = response.data.filter((event) =>
        event.user && event.user.id === this.props.user.id && moment().isBefore(event.date)
      );
      this.setState({eventList: events})
    })
    axios.get(SERVER_URL + '/attendants.json').then((response) => {
      console.log("GET ATTENDINGEVENT", response);
      const eventInfos = response.data.filter((info) =>
        info.user && info.user.id === this.props.user.id
      );
      if (eventInfos.length !== 0) {
        eventInfos.map(eventInfo => {
          console.log("EVENT INFO", eventInfo);
          if (eventInfo.event) {
            axios.get(SERVER_URL + `/events/${eventInfo.event.id}.json`).then((response) => {
              console.log(moment().isBefore(response.data.event.date));
              console.log(response.data.event.user.id !== this.props.user.id);
              if (moment().isBefore(response.data.event.date) && response.data.event.user.id !== this.props.user.id) {
                this.setState({attendingEvents: [...this.state.attendingEvents, response.data.event]})
              } else if (!moment().isBefore(response.data.event.date)) {
                this.setState({expiredEvents: [...this.state.expiredEvents, response.data.event]})
              }
              
            })
          }
        })
      }
    })
  }


  render() {
    return(
      <div>
        <h1>Your Events</h1>
        {this.state.eventList.length !== 0 && <h3>--- Current events you are hosting ---</h3>}
        <EventCards {...this.props} eventList={this.state.eventList}/>
        
        {this.state.attendingEvents.length !== 0 && <h3>--- Current events you are attending ---</h3>}
        <EventCards {...this.props} eventList={this.state.attendingEvents}/>

        {this.state.expiredEvents.length !== 0 && <h3>--- Historic events ---</h3>}
        <EventCards {...this.props} eventList={this.state.expiredEvents} expired={true} />
      </div>
    )
  }
}

export default EventList

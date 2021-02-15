import React, {Component} from 'react';
import {useParams} from "react-router-dom";
import { withRouter } from "react-router";
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/events.json'

class EventCreate extends Component {
  render(){
    return(
      <div>
        <h2>Create Event</h2>
        <h3>Venue:</h3>
      </div>
    )
  }
}

export default EventCreate

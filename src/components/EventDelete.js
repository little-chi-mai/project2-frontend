import React, {Component} from 'react';
import {useParams} from "react-router-dom";
import { withRouter } from "react-router";
import axios from 'axios';

const EVENT_URL = (id) => {
  return `http://localhost:3000/events/${id}`
}

const EventDelete = () => {
  const {id} = useParams();
  return(
    <EventDeleteButton event_id = {parseInt(id)}/>
  )
}

class EventDeleteButton extends Component {
  constructor(props){
    super(props);
    this._handleDelete = this._handleDelete.bind(this)
  }

  _handleDelete(){
    let deleteId = this.props.event_id;
    let deleteEvent = EVENT_URL(deleteId);
    axios.delete(deleteEvent, {params: {id: deleteId}}).then((response) => {
      console.log(response)
    })
  }

  render(){
    return(
      <div>
        <button onClick={this._handleDelete}>Delete This Event</button>
      </div>
    )
  }
}

export default EventDelete

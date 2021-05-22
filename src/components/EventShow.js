import React, {Component} from 'react';
import {useParams, Link} from "react-router-dom";
import { withRouter } from "react-router";
import axios from 'axios';
import TestingChats from './TestingChats';
import CreateNewChat from './CreateNewChat';
import { config } from './Constants'

const SERVER_URL = 'http://localhost:3000';

const GET_EVENT_URL = (id) =>{
  return SERVER_URL + `/events/${id}.json`
}

const EventShow = (props) => {
  const {id} = useParams();
  return(
    <EventShowPage {...props} event_id = {parseInt(id)}/>
  )
}

class EventShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit:false,
      id: this.props.event_id,
      event: {}
    }
    this._handleToggle =this._handleToggle.bind(this);
    this._handleEdit =this._handleEdit.bind(this);
    this._handleDelete =this._handleDelete.bind(this);
    this.renderRecord =this.renderRecord.bind(this);
    this.renderForm =this.renderForm.bind(this);
    
  }

  componentDidMount() {

    this.fetchEvent()
  } 

  fetchEvent() {
    let EVENT_URL = GET_EVENT_URL(this.props.event_id)
    axios.get(EVENT_URL).then((response) => {
      const event = response.data.event;
      console.log("event", event);
      this.setState({
        event: event
      })
    })
  }

  _handleToggle = (event) => {
    event.preventDefault();
    this.setState({
      edit: !this.state.edit
    })
  }

  _handleEdit = (event) => {
    event.preventDefault();
    let eventData = {
      title:event.target.title.value,
      date:event.target.date.value,
      introduction:event.target.introduction.value
    }
    let EVENT_URL = GET_EVENT_URL(this.state.id)

    axios.put(EVENT_URL, eventData).then((response) => {
    })
    this.setState({
      edit:false,
      title:eventData.title,
      date:eventData.date,
      introduction:eventData.introduction
    })
  }

  _handleDelete(){
    let EVENT_URL = GET_EVENT_URL(this.state.id);
    axios.delete(EVENT_URL, {params: {id: this.state.id}}).then((response) => {
      console.log(response);
      this.props.history.push('/events')
    })
    
  }
  

  renderRecord(){
    const {title, user, restaurant, date, attendants, introduction} = this.state.event;
    console.log("this.state.event", this.state.event);
    if (this.state.event) {
      return(
        <div>
          <h5>{title}</h5>
          {user && <h3> Creator: {user.name} </h3> }
          <h3>Date: {date}</h3>
          {restaurant && <h3>Venue: {restaurant.name}</h3>}
          {attendants && <h4>Attendants:{attendants.map((object) => {return object.user.name}).join(', ')}</h4>}
          {introduction && <p>Summary: {introduction}</p>}
          <button onClick = {this._handleToggle}> Edit this event</button>
          <button onClick = {this._handleDelete}> Delete this event</button>
          <TestingChats event_id={this.state.id}/>
          <CreateNewChat {...this.props} event_id={this.state.id}/>
        </div>
      )
    }
    
  }

  findAttendants(keyword, users){
    return users.filter(user => {
      const regex = new RegExp(keyword, 'gi');
      return user.name.match(regex)
    });
  }

  renderForm(){
    return(
      <div>
        <h2>Edit Event</h2>
        {this.state.restaurant && <h3>Venue:{this.state.restaurant.name}</h3>}
        <form onSubmit = {this._handleEdit}>
          <label>Title</label>
          <input name='title' defaultValue = {this.state.title} required/>
          <label>Date</label>
          <input placeholder='2020-12-31' type='date' name='date' defaultValue = {this.state.date} required/>
          <label>Summary</label>
          <textarea name='introduction' defaultValue = {this.state.introduction}/>

          <button>Update</button>

        </form>
      </div>
    )
  }

  render(){
    console.log("RENDER");
    if(this.state.edit) {
      return this.renderForm()
    } else {
      return this.renderRecord()
    }
  }
}

export default EventShow

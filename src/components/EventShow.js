import React, {Component} from 'react';
import {useParams, Link} from "react-router-dom";
import { withRouter } from "react-router";
import axios from 'axios';
import TestingChats from './TestingChats'


const GET_EVENT_URL = (id) =>{
  return `http://localhost:3000/events/${id}.json`
}

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
      edit:false,
      id: this.props.event_id,
      title:'',
      introduction:'',
      date:'',
      creator:{},
      restaurant: {},
      attendants: []
    }
    this._handleToggle =this._handleToggle.bind(this);
    this._handleEdit =this._handleEdit.bind(this);
    this._handleDelete =this._handleDelete.bind(this);
    this.renderRecord =this.renderRecord.bind(this);
    this.renderForm =this.renderForm.bind(this);

    let EVENT_URL = GET_EVENT_URL(this.props.event_id)

    const fetchEvent = () => {
      axios.get(EVENT_URL).then((response) => {
        // console.log(response.data)
        const event = response.data.event
        this.setState({
          title:event.title,
          introduction: event.introduction,
          date: event.date,
          creator: event.user,
          restaurant: event.restaurant,
          attendants: event.attendants
        })
      })
    }

    fetchEvent()
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
      console.log(response)
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
      console.log(response)
    })
  }

  renderRecord(){
    return(
      <div>
        <h2>Event: {this.state.title}</h2>
        <h3>Date: {this.state.date} || Creator: {this.state.creator.name}</h3>
        <h3>Venue: {this.state.restaurant.name}</h3>
        <h4>Attendants:{this.state.attendants.map((object) => {return object.user.name}).join(', ')}</h4>
        <p>Summary: {this.state.introduction}</p>
        <button onClick = {this._handleToggle}> Edit this event</button>
        <button onClick = {this._handleDelete}> Delete this event</button>
        <TestingChats event_id={this.state.id}/>
      </div>
    )
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
        <h3>Venue:{this.state.restaurant.name}</h3>
        <form onSubmit = {this._handleEdit}>
          <label>Title</label>
          <input name='title' defaultValue = {this.state.title} required/>
          <label>Date</label>
          <input placeholder='2020-12-31' name='date' defaultValue = {this.state.date} required/>
          <label>Summary</label>
          <textarea name='introduction' defaultValue = {this.state.introduction}/>

          <button>Update</button>

        </form>
      </div>
    )
  }

  render(){
    if(this.state.edit) {
      return this.renderForm()
    } else {
      return this.renderRecord()
    }
  }
}

export default EventShow

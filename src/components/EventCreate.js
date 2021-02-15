import React, {Component} from 'react';
import {useParams} from "react-router-dom";
import { withRouter } from "react-router";
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/events'

const EventCreate = () => {
  const {id} = useParams();
  return(
    <EventCreateForm restaurant_id = {parseInt(id)}/>
  )
}


class EventCreateForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:'',
      date:'',
      introduction:'',
      user:'',
      restaurant_id: this.props.restaurant_id
    }
    this._handleChange = this._handleChange.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleChange = (event) => {
    const {name,value} = event.target;
    this.setState ({
      [name]:value,
    })
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    const {title, date, introduction, user, restaurant_id} = this.state;
    let newEvent = {
      title:title,
      date:date,
      introduction:introduction,
      user:user,
      restaurant_id:restaurant_id
    };
    console.log(newEvent)
    axios.post(SERVER_URL, newEvent).then((response) => {
      console.log(response.data)
    })
  }

  render(){
    return(
      <div>
        <h2>Create Event</h2>
        <h3>Venue:</h3>
        <form onSubmit = {this._handleSubmit}>
          <label>Title</label>
          <input name='title' onChange = {this._handleChange}/>
          <label>Date</label>
          <input placeholder='2020-12-31' name='date' onChange = {this._handleChange}/>
          <label>Summary</label>
          <textarea name='introduction'onChange = {this._handleChange}/>

          <button>Create Event</button>
        </form>
      </div>
    )
  }
}

export default EventCreate

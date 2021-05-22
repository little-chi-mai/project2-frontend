import React, {useState} from 'react';
import {Component} from 'react';
import{ Link } from 'react-router-dom'
import {AddToWishList} from './ButtonAddToWishList'


function ButtonCreateEvent(props) {

  return(
    <button><Link to={'/restaurant/' + props.restaurant.id + '/create-event'}>Create Event</Link></button>
  )
}

export default ButtonCreateEvent;

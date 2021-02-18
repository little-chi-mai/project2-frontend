import React, {useState} from 'react';
import {Component} from 'react';
import {AddToWishList} from './ButtonAddToWishList'


function ButtonCreateEvent(props) {

  return(
    <a href={'/restaurant/' + props.restaurant.id + '/create-event'}><button>Create Event</button></a>  
  )
}

export default ButtonCreateEvent;

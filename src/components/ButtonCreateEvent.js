import React, {useState} from 'react';
import {Component} from 'react';
import {AddToWishList} from './ButtonAddToWishList'


function ButtonCreateEvent(props) {

  return(
    <button>
      <a href={'/restaurant/' + props.restaurant.id + '/create-event'}>Create Event</a>  
    </button>
  )
}

export default ButtonCreateEvent;

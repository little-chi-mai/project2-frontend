import React, {useState} from 'react';
import {Component} from 'react';
import {AddToWishList} from './ButtonAddToWishList'
import axios from 'axios';


function ButtonAddAndCreate(props) {

  function _handleClick() {
    
  }

  if (!props.isSaved) {
    return(
      <button onClick={() => {
        AddToWishList(props.restaurant, props.user.id, props.image_url, (restaurant_id) => {
          console.log(restaurant_id);
          props.history.push(`/restaurant/${restaurant_id}/create-event`)
        });
      }} >
         Add to list and create Event
      </button>
    )
  } else {
    return (
      <button onClick={() => {

          props.history.push(`/restaurant/${props.restaurant.id}/create-event`)
      }} >
         Create Event!
      </button>
    )
  }
  
}

export default ButtonAddAndCreate;

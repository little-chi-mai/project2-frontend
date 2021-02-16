import React, {useState} from 'react';
import {Component} from 'react';
import {AddToWishList} from './ButtonAddToWishList'


function ButtonAddAndCreate(props) {


  return(
    <button onClick={() => {
      AddToWishList(props.restaurant, props.user.id, (restaurant_id) => {
        console.log(restaurant_id);
        props.history.push(`/restaurant/${restaurant_id}/create-event`)
      });

    }} >
       Add to list and create Event
    </button>
  )
}

export default ButtonAddAndCreate;

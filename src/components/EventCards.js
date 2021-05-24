import {Component, useState} from 'react';
import Card from 'react-bootstrap/Card';
import{ Link } from 'react-router-dom';

const style = {
  margin: '5px',
  padding: '10px'
}

const wishlistPhoto = {
  height: '250px',
  objectFit: 'cover',
  // objectPosition: '0 50%',
}

function EventCards(props) {
  const [events, setEvents] = useState(props);
  // const {title, restaurant, introduction, date, attendants} = props.event;
  return(
    <>
      {props.eventList && props.eventList.map(event =>
      <Card key={event.id} style={style}>
        {event.title && <h4>{event.title}</h4>}
        {event.restaurant && <h6>Venue: <strong>{event.restaurant.name}</strong></h6>}
        {event.restaurant && <img style={wishlistPhoto} src={event.restaurant.image} alt={event.restaurant.name}></img>}
        {event.introduction && <p>Introduction: {event.introduction}</p>}
        {event.date && <p>Date: {event.date}</p>}

        {event.attendants && event.attendants.length !== 0 && <h4>Attendants</h4>}
        {event.attendants && event.attendants.map(attendant => <p key={attendant.user.id}>{attendant.user.name} ({attendant.user.email})</p>)}
        <h4>Created by {event.user.name}</h4>
        {/* {props.expired !== true &&  */}
          <Link to={`/event/${event.id}`}><button>Show event</button></Link>
        {/* } */}
      </Card>
    )}
    </>
    
  )
}

export default EventCards
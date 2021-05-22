import {Component} from 'react';
import Card from 'react-bootstrap/Card';
import{ Link } from 'react-router-dom';

const style = {
  margin: '5px',
  padding: '10px'
}


function EventCards(props) {
  // const {title, restaurant, introduction, date, attendants} = props.event;
  return(
    <>
      {props.eventList && props.eventList.map(event =>
      <Card key={event.id} style={style}>
      <div>
        {event.title && <h4>{event.title}</h4>}
        {event.restaurant && <h6>Venue: <strong>{event.restaurant.name}</strong></h6>}
        {event.introduction && <p>Introduction: {event.introduction}</p>}
        {event.date && <p>Date: {event.date}</p>}

        {event.attendants && event.attendants.length !== 0 && <h4>Attendants</h4>}
        {event.attendants && event.attendants.map(attendant => <p>{attendant.user.name} ({attendant.user.email})</p>)}
        <h4>Created by {props.user.name}</h4>
        <button><Link to={`/event/${event.id}`}>Show event</Link></button>
      </div>
      </Card>
    )}
    </>
    
  )
}

export default EventCards
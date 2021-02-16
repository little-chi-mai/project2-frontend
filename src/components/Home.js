import React from 'react';
import{ Link } from 'react-router-dom'
import RestaurantSearch from './RestaurantSearch'

const Home = (props) => {
  return (
    <div>
      <nav>
        {!props.isLoggedIn && <Link to='/login'>Log In</Link>}
        {!props.isLoggedIn && <Link to='/signup'>Sign Up</Link>}
        {props.isLoggedIn && <Link to='/logout'>Log Out {props.isLoggedIn.name}</Link> }
      </nav>
      <h1> I feel like</h1>
      <RestaurantSearch {...props}/>
    </div>
  );
};
export default Home;

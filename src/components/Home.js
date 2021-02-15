import React from 'react';
import{ Link } from 'react-router-dom'
import RestaurantSearch from './RestaurantSearch'

const Home = () => {
  return (
    <div>
      <Link to='/login'>Log In</Link>
      <br/>
      <Link to='/signup'>Sign Up</Link>
      <br/>
      <RestaurantSearch/>
    </div>
  );
};
export default Home;

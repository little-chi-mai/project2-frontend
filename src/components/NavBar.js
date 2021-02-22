import React from 'react';
import{ Link } from 'react-router-dom'


const NavBar = (props) => {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>

        {props.isLoggedIn &&
          <span>
            <Link to='/wishlist'>Your List</Link>
            <Link to='/events'>Your Events</Link>
            <Link to='/logout'>Log Out {props.isLoggedIn.name}</Link>
          </span>
        }
        {!props.isLoggedIn &&
          <span>
            <Link to='/login'>Log In</Link>
            <Link to='/signup'>Sign Up</Link>
          </span>}
      </nav>

    </div>
  );
};
export default NavBar;

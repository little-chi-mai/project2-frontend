import React from 'react';
import{ Link } from 'react-router-dom'


const NavBar = (props) => {
  return (
    <div>
      <nav>
        <Link to='/project2-frontend/'>Home</Link>

        {props.isLoggedIn &&
          <span>
            <Link to='/project2-frontend/wishlist'>Your List</Link>
            <Link to='/project2-frontend/events'>Your Events</Link>
            <Link to='/project2-frontend/logout'>Log Out {props.isLoggedIn.name}</Link>
          </span>
        }
        {!props.isLoggedIn &&
          <span>
            <Link to='/project2-frontend/login'>Log In</Link>
            <Link to='/project2-frontend/signup'>Sign Up</Link>
          </span>}
      </nav>

    </div>
  );
};
export default NavBar;

import React from 'react';
import{ Link } from 'react-router-dom'


const NavBar = (props) => {
  return (
    <div>
      <nav>
        {!props.isLoggedIn && <Link to='/login'>Log In</Link>}
        {!props.isLoggedIn && <Link to='/signup'>Sign Up</Link>}
        {props.isLoggedIn && <Link to='/logout'>Log Out {props.isLoggedIn.name}</Link> }
      </nav>

    </div>
  );
};
export default NavBar;

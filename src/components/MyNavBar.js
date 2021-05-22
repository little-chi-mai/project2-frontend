import React from 'react';
import{ Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import { IoFastFoodOutline } from "react-icons/io5";
import axios from 'axios';

const MyNavBar = (props) => {

  return (
    <Navbar sticky="top"  bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/">
          <IoFastFoodOutline /> Home
        </Link>

      </Navbar.Brand>

      {props.isLoggedIn &&
        <span>
          <Navbar.Brand>
            <Link to="/wishlist">
              Your List
            </Link>
          </Navbar.Brand>

          <Navbar.Brand>
           <Link to="/events" >
              Your Events
            </Link>
          </Navbar.Brand>

          {props.user &&
            <Navbar.Brand>
              <Link to="/logout" >
                Log Out {props.user.name}
              </Link>
            </Navbar.Brand>
          }


        </span>
      }
      {!props.isLoggedIn &&
        <span>
          <Navbar.Brand>
            <Link to="/login">
              Log In
            </Link>
          </Navbar.Brand>

          <Navbar.Brand>
            <Link to="/signup" >
              Sign Up
            </Link>
          </Navbar.Brand>
        </span>}

    </Navbar>
  );
};
export default MyNavBar;

import React from 'react';
import{ Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import { IoFastFoodOutline } from "react-icons/io5";


const MyNavBar = (props) => {
  return (
    <Navbar sticky="top"  bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <IoFastFoodOutline /> Home
      </Navbar.Brand>

      {props.isLoggedIn &&
        <span>
          <Navbar.Brand href="/wishlist">
            Your List
          </Navbar.Brand>

          <Navbar.Brand href="/events">
            Your Events
          </Navbar.Brand>

          <Navbar.Brand href="/logout">
            Log Out
          </Navbar.Brand>
        </span>
      }
      {!props.isLoggedIn &&
        <span>
          <Navbar.Brand href="/login">
            Log In
          </Navbar.Brand>

          <Navbar.Brand href="/signup">
            Sign Up
          </Navbar.Brand>
        </span>}

    </Navbar>
  );
};
export default MyNavBar;

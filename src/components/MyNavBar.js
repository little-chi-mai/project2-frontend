import React from 'react';
import{ Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import { IoFastFoodOutline } from "react-icons/io5";
import axios from 'axios';


const SERVER_URL = 'http://localhost:3000/' + 'logout';

const MyNavBar = (props) => {
  const handleClick = () => {
    axios.delete(SERVER_URL, {withCredentials: true}).then(response => {
      props.history.push('/')
    })
    .catch(error => console.log(error))
  }

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

          <Link to="/logout" onClick={handleClick}>
            Log Out
          </Link>
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

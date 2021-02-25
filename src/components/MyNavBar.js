import React from 'react';
import{ Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import { IoFastFoodOutline } from "react-icons/io5";
import axios from 'axios';




const SERVER_URL = 'https://agile-tor-91190.herokuapp.com/' + 'logout';

const MyNavBar = (props) => {

  return (
    <Navbar sticky="top"  bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/project2-frontend">
          <IoFastFoodOutline /> Home
        </Link>

      </Navbar.Brand>

      {props.isLoggedIn &&
        <span>
          <Navbar.Brand>
            <Link to="/project2-frontend/wishlist">
              Your List
            </Link>
          </Navbar.Brand>

          <Navbar.Brand>
           <Link to="/project2-frontend/events" >
              Your Events
            </Link>
          </Navbar.Brand>

          {props.user &&
            <Navbar.Brand>
              <Link to="/project2-frontend/logout" >
                Log Out {props.user.name}
              </Link>
            </Navbar.Brand>
          }


        </span>
      }
      {!props.isLoggedIn &&
        <span>
          <Navbar.Brand>
            <Link to="/project2-frontend/login">
              Log In
            </Link>
          </Navbar.Brand>

          <Navbar.Brand>
            <Link to="/project2-frontend/signup" >
              Sign Up
            </Link>
          </Navbar.Brand>
        </span>}

    </Navbar>
  );
};
export default MyNavBar;

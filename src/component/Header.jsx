import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css"
export default function Header({match,users}) {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/star-wars">Star War Users</Link>
        </li>
        <li>
          <Link to="/sign-out">Sign Out</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign In</Link>
        </li>
      </ul>
    );
  }
  
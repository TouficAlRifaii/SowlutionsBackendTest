import React from "react";
import "../styles/style.css"
import "../styles/materialize.css"
const Navbar = ({ user, logout, users, chat }) => {
  return (
    <>
      <nav className="blue lighten-3">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">
            Chat
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#">{user.username}</a>
            </li>
            <li>
              <a href="#" onClick={logout}>
                <i className="material-icons">power_settings_new</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;

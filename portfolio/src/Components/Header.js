import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";

class Header extends Component {
    render(){
        return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Yasmim Sampaio</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navlinks-right" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link"
                    to="/Home">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"
                    to="/Portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"
                    to="/Contact">Contact</Link> 
                </li>
              </ul>
            </div>
        </nav>

        )
    }
}
export default Header;
import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";

class Contact extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Yasmim Sampaio</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navlinks-right" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {/* <a className="nav-link" href="index.html">About</a> */}
                                <Link className="nav-link"
                                    to="/Home">About</Link>
                            </li>
                            <li className="nav-item">
                            {/* <a className="nav-link" href="portfolio.html">Portfolio</a> */}
                            <Link className="nav-link"
                                to="/Portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="contact.html">Contact</a> */}
                                <Link className="nav-link"
                                    to="/Contact">Contact</Link>
  
                            </li>
                        </ul>
                    </div>
                </nav>
                <section className="box">
                    <h1>
                    Contact
                    </h1>
                    <hr/>
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Name</label>
                            <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Name"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"></input>
                        </div>  
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-info btn-lg">Submit</button>
                    </form>
                </section>
                {/* <div style={{backgroundImage: url('beach-2179624.jpg')}}></div>   */}
            </div>    
        )
    }
}
export default Contact;
import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";

class Portfolio extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Yasmim Sampaio</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navlinks-right" id="navbarNav">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
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
                    Portfolio
                    </h1>
                    <hr/>
                        <p>
                            <a href="https://mitchreid14.github.io/project1group5/">
                            <img id="myimage" src="./Images/PortfolioPictures/Project1.png" className="img-thumbnail"></img>
                            </a>
                            <a href="https://notetaker-ys.herokuapp.com/">
                            <img id="myimage" src="./Images/PortfolioPictures/NoteTaker.png" className="img-thumbnail"></img>
                            </a>
                            <a href="https://burger-ys.herokuapp.com/">
                            <img id="myimage" src="./Images/PortfolioPictures/Burger.png" className="img-thumbnail"></img>
                            </a>
                            <br/>
                            <a href="https://social-underground-bc.herokuapp.com/signup.html">
                            <img id="myimage" src="./Images/PortfolioPictures/Project2Signup.png" className="img-thumbnail"></img>
                            </a>
                            <a href="https://social-underground-bc.herokuapp.com/">
                            <img id="myimage" src="./Images/PortfolioPictures/Project2Login.png" className="img-thumbnail"></img>
                            </a>
                        </p>
                </section>
                {/* <div style={{backgroundImage: url('beach-2179624.jpg')}}></div>   */}
            </div>
        )
    }
}
export default Portfolio;
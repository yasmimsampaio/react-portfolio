import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";


class Home extends Component {
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
                About Me
                </h1>
            <hr/>
            <img alt="yasmim on a cliff" id="myimage" src={require("./Images/IndexPictures/yasmim.jpg")}></img>
            <p>My name is Yasmim Sampaio and I am an avid dreamer. I was born in Brazil but have been living in the US ever since I was a child. I’m currently in school pursuing a graphic design degree but taking a year off to try something new with this class. I’ve always had an interest for computers and what goes on behind the scenes of the internet so I’m hoping this class opens up a new opportunity for me to grow in new areas. <br/>
            <br/>
            I have a passion for traveling and photography. Any chance I get, I hop on a plane or road trip across the country. I also have a passion for music. I sing and play the piano and going to concerts is my favorite thing to do. On my spare time you can find me hanging out with my friends, with my camera taking shots of people, or on my couch binging five different shows at the same time. I’d like to think of my interests as eclectic, I’m always doing something and trying new things.   </p>
            </section>
             {/* <div style={{backgroundImage: url('beach-2179624.jpg')}}></div>   */}
         </div>
    
        )
    }
}
export default Home;

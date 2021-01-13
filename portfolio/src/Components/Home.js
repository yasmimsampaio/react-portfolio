import React, { Component } from "react";

class Home extends Component {
    render(){
        return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Yasmim Sampaio</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse navlinks-right" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="index.html">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="portfolio.html">Portfolio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contact</a> 
                </li>
              </ul>
            </div>
          </nav>
            <section class="box">
                <h1>
                About Me
                </h1>
            <hr/>
            {/* <img id="myimage" src={require("./Images/IndexPictures/IMG_2582.jpg")}/> */}
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
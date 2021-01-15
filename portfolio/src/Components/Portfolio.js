import React, { Component } from "react";
import Project from "./Project";

class Portfolio extends Component {
    render(){
        return(
            <div>
                <section className="box">
                    <h1>
                    Portfolio
                    </h1>
                    <hr/>
                        <p>
                            <Project
                                atag="https://mitchreid14.github.io/project1group5/"
                                imageSrc="./Images/PortfolioPictures/Project1.png"
                                alttag="Homepage of Artist's Top Songs"
                            />
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
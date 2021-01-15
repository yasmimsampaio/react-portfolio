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
                            <Project
                                atag="https://notetaker-ys.herokuapp.com/"
                                imageSrc="./Images/PortfolioPictures/NoteTaker.png"
                                alttag="Homepage for Note Taker"
                            />
                            <Project
                                atag="https://burger-ys.herokuapp.com/"
                                imageSrc="./Images/PortfolioPictures/Burger.png"
                                alttag="Homepage for Burger App"
                            />
                            <br/>
                            <Project
                                atag="https://social-underground-bc.herokuapp.com/signup.html"
                                imageSrc="./Images/PortfolioPictures/Project2Signup.png"
                                alttag="Homepage for the Sign Up page"
                            />
                            <Project
                                atag="https://social-underground-bc.herokuapp.com/"
                                imageSrc="./Images/PortfolioPictures/Project2Login.png"
                                alttag="Homepage for the Login page"
                            />
                        </p>
                </section>
                {/* <div style={{backgroundImage: url('beach-2179624.jpg')}}></div>   */}
            </div>
        )
    }
}
export default Portfolio;
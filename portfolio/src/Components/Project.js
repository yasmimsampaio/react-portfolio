import React, { Component } from "react";

class Project extends Component {
    render(){
        return(
            <a href={this.props.atag}>
            <img id="myimage" src={this.props.imageSrc} alt={this.props.alttag} className="img-thumbnail"></img>
            </a>
        )
    }
}
export default Project;
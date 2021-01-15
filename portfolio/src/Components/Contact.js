import React, { Component } from "react";

class Contact extends Component {
    render(){
        return(
            <div>
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
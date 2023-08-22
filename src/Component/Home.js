import React, {Component} from "react";
import logo from "../../src/logo.svg"
class Home extends Component{
    constructor(){
        super();
        this.state={
            fname: "react",
            lname: "js",
        }
        }
        imageClick(){
             window.open("https://www.bridgelabz.com","_blank");
        }
        inputChange=(event) => {
            console.log(event);
            this.setState({fname: event.target.value});
    };
    render(){
        return(
            <div>
                Home
                <h2>{this.state.fname}</h2>
                <h1>{this.state.lname}</h1>
                <input type = "text" onChange={this.inputChange} />
                <img src={logo} alt="" onClick={this.imageClick} />
                
                </div>
        );
    }
}
export default Home;
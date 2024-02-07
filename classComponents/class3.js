import React from "react";
import "./class3.css";

class Klaus extends React.Component{
    constructor(){
        super()
        console.log(this)
    }
    render(){
        return(
            <div>
                <h1>This is Class 3</h1>
                <h2 className="h2Container">My name is {this.props.name} and Age is {this.props.age} and My salary is {this.props.salary}</h2>
            </div>
        )
    }
}
export default Klaus;
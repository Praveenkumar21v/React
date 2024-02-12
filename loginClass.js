import React from "react";

class LoginClass extends React.Component {
  constructor() {
    super();
    this.state = {
      emaiText: "",
      password: "",
      errormsg: "",
    };
    // this.handleEmail=this.handleEmail.bind(this);
    // this.handlePassword=this.handlePassword.bind(this)

  }
//bind - The bind() is an inbuilt method in React that is used to pass the data as an argument to the function of a class based component.The connection between the data to be displayed in the view and the component's logic is called data binding in ReactJS.Arrow function binds the dtat 
//   handleEmail() {
//     console.log('input Change');
//     console.log(this);
//   }

// handleEmail=(event)=> {
//     console.log('input Change',event.target.value);
//     console.log(this);
//   }

//   handlePassword=(event)=>{
//     console.log('password',event.target.value);
//     console.log(this);
//   }

handleEmail=(event)=>{
    this.setState({
        emaiText: event.target.value
    })
}

handlePassword=(event)=>{
    this.setState({
        password: event.target.value
    })
}

handleSubmit=(event)=>{
event.preventDefault();

const {emaiText,password}=this.state;

if(emaiText==="" || password==="" ){
    this.setState({
        errormsg : "Please provide both Email and Password",
    })
}
else{
    this.setState({
        errormsg:`username:${emaiText} and password: ${password}`,
    })
}
}
  render() {
    return (
      <div>
        <form className="formContainer" onSubmit={this.handleSubmit}>
          <div className="form-group ">
            <label htmlFor="emailText">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailText"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={this.state.emaiText}
              onChange={this.handleEmail}
            //   onChange={this.handleEmail.bind(this)}

            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePassword}
            //   onChange={this.handlePassword.bind(this)}
 />
          </div>
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
          {this.state.errormsg && <h1>{this.state.errormsg}</h1>}
        </form>
      </div>
    );
  }
}
export default LoginClass;

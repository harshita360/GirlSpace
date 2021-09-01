import React from "react";
import axios from "axios";
//import bluebg from "../bluebg.png";
//import { Link } from "react-router-dom";
import equal3 from "../equal3.jpg";
import { Link } from "react-router-dom";
import "./SignUp.css";
import eq2 from "../eq2.png";

import history from "../history";

class SignUp extends React.Component {
  state: {
    email: "",
    password: "",
  };

  handleSignUp = () => {
    if (this.state.email && this.state.password) {
      axios
        .post("first/auth/signup", {
          email: this.state.email,
          password: this.state.password,
        })
        .then(function (res) {
          console.log(res.data.auth);

          if (res.data.auth) {
            history.push("/dashboard");
          } else {
            history.push("/signup");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <div className="back" style={{ backgroundColor: "#002D62" }}>
        <div className="ui container">
          <h1
            style={{
              textAlign: "center",
              fontWeight: "900",

              fontSize: "70px",
            }}
          >
            Sign Up
          </h1>
          <div style={{ float: "right", marginRight: "30vw" }}>
            <img
              alt="pic"
              className="imageSn"
              src={equal3}
              style={{
                height: "250px",
                width: "350px",
                position: "absolute",
                right: "5%",
                top: "20%",
              }}
            />
          </div>
          <br />

          <br />
          <div className="ui form">
            <div className="six wide field">
              <label style={{color:"yellow",fontSize:"22px"}}>Email</label>
              <input
                type="text"
                placeholder="abc@gmail.com"
                id="email"
                name="email"
                autoComplete="email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <br/>
            </div>
            <div className="six wide field">
            <br/>
              <label style={{color:"yellow",fontSize:"22px"}}>Password</label>
              <input
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
              <br/>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input type="checkbox" tabIndex="0" className="hidden" />
                <label style={{color:"white"}}>I agree to the Terms and Conditions</label>
              </div>
            </div>
            <br/>
            <button
              className="large ui active button"
              variant="contained"
              onClick={this.handleSignUp}
            >
              <i className="icon user"></i>
              Sign Up
            </button>
          </div>
          <br/>
          <h3 style={{color:"white"}}> Already have an account? </h3>
          <button
            className="large ui active button"
            variant="contained"

          >

            <Link to ="/signin">Sign In</Link>
          </button>

        </div>
      </div>
    );
  }
}
export default SignUp;

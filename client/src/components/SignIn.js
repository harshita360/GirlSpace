import React from "react";
import axios from "axios";
//import equal6 from "../equal6.jpg";
//import AuthApi from "../utils/AuthApi";
import history from "../history";
//import equal10 from "../equal10.jpg";
import bg1 from "../bg1.jpg";
import "./SignUp.css";

class SignIn extends React.Component {
  state: {
    email: "", //empty string as as boolean falase
    password: "",
  };
  //  const classes = useStyles();//

  handleSignIn = () => {
    if (this.state.email && this.state.password) {
      axios
        .post("first/auth/signin", {
          email: this.state.email,
          password: this.state.password,
        })
        .then(function (res) {
          console.log(res.data.auth);
          //history.push("/dashboard");
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
      <div className="back" style={{ backgroundImage: `url(${bg1})` }}>
        <div className="container">
          <h1
            style={{
              textAlign: "center",
              fontWeight: "900",

              fontSize: "70px",
            }}
          >
            Sign In
          </h1>
          <div style={{ float: "right", marginRight: "30vw" }}>
            <img
              alt="pic"
              className="imageSn"
              src={bg1}
              style={{
                height: "45vh",
                width: "35vw",
                position: "absolute",
                right: "5%",
                top: "20%",
              }}
            />
          </div>
          <br />

          <br />

          <div className="ui form">
            <div className="six wide ui field">
              <label>
                <h2 style={{ fontWeight: "700" }}>Email</h2>
              </label>

              <input
                variant="outlined"
                margin="normal"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <label>
              <h2 style={{ fontWeight: "700" }}>Password</h2>
            </label>

            <div className="six wide ui field">
              <input
                variant="outlined"
                margin="normal"
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>

            <button
              className="large ui black button"
              variant="contained"
              color="primary"
              onClick={this.handleSignIn}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;

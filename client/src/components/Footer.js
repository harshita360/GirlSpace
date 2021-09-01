import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundColor: "black" }}>
      <h2
        style={{ textAlign: "left", paddingTop: "30px", paddingLeft: "20px" }}
      >
        Start a free <br />
        account today
      </h2>

      <hr />
      <br />

      <ul id="menu">
        <li>SCIENCE</li>
        <li>ENGINNERING</li>
        <li>TECHNOLOGY</li>
        <li>COMMUNITY</li>
      </ul>
      <br />

      <center>
        <button className="ui circular facebook icon button">
          <i className="facebook icon" style={{ color: "white" }}></i>
        </button>
        &nbsp;&nbsp;
        <button className="ui circular twitter icon button">
          <i className="twitter icon" style={{ color: "white" }}></i>
        </button>
        &nbsp;&nbsp;
        <button className="ui circular linkedin icon button">
          <i className="linkedin icon" style={{ color: "white" }}></i>
        </button>
        &nbsp;&nbsp;
        <button className="ui circular google plus icon button">
          <i className="google plus icon" style={{ color: "white" }}></i>
        </button>
      </center>
    </div>
  );
};

export default Footer;

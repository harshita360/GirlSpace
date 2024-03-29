import React from "react";
import Footer from "./Footer.js";
//import AuthApi from "../utils/AuthApi";
import "./DashBoard.css";
import bck from "../bgn.jpg"
import pic1 from "../pic1.png";
import pic2 from "../pic2.jpg";
import pic3 from "../pic3.png";
//import pic4 from "../pic4.png";
import pic5 from "../pic5.png";
//import pic6 from "../pic6.png";
//import pic7 from "../pic7.png";
import pic8 from "../pic8.jpeg";
import pic9 from "../pic9.png";
//import pic10 from "../pic10.jpeg";
import { Link } from "react-router-dom";

class DashBoard extends React.Component {
  render() {
    return (
      <div style={{backgroundColor:"#696969"}}>
        <div class="ui clearing segment" style={{backgroundColor:"black"}}>
          <Link to="/email" >  <h3 class="ui right floated header" style={{color:"white"}}>Contact Me</h3></Link>
          <h3 class="ui left floated header" style={{color:"white",fontSize:"5vh"}}>Girlspace</h3>
        </div>




        <div
            className="image"
            style={{ backgroundImage: `url(${bck})`,padding:"20px"}}

          >
          <br/>
          <br/>
          <br />
          <br />


          <br />

          <h1 style={{ fontSize: "80px", fontWeight: "800" }}>GIRLSPACE</h1>
          <p style={{color:"black",fontSize:"25px"}}>
          <span>  Let's grow together and build a community we are proud of.</span>
          </p>
          <br />

            <Link to="/getupdates" className="big ui button primary">
              See Latest!
            </Link>
            <br/>
            <br/>

        </div>
        <br />

        <br/>

        <div className="ui container">
          <div class="ui three column grid">
            <div class="column">
              <div class="ui fluid card" style={{boxShadow:" 10px 10px 7px black"}}>
                <div class="image">
                  <img src={pic9} alt="pic" />
                </div>
                <div class="content">
                  <a href="/#" class="header">
                    WOMEN TECHMAKERS
                  </a>
                  <div class="description">
                    Women Techmakers runs a variety of events every year from
                    Google summits and conferences, including International
                    Women’s Day and I/O, to Hackathons, to local,
                    community-hosted meetups, all designed to build expertise
                    and community.
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="ui fluid card" style={{boxShadow:" 10px 10px 7px black"}}>
                <div class="image">
                  <img src={pic1} alt="pic" />
                </div>
                <div class="content">
                  <a href="/#" class="header">
                    GOOGLE
                  </a>
                  <div class="description">
                    It is an coding comeptiton by Google specially for women.
                    The top 150 on the scoreboard will receive a ticket and
                    reimbursement to offset travel expenses to Google I/O.
                    It is an coding comeptiton by Google specially for women.

                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="ui fluid card" style={{boxShadow:" 10px 10px 7px black"}}>
                <div class="image">
                  <img src={pic2} alt="pic" />
                </div>
                <div class="content">
                  <a href="/#" class="header">
                    GEEKS FOR GEEKS
                  </a>
                  <div class="description">
                    Coderita is a 1-Day online coding contest which is designed
                    only for the female coders to appreciate their programming
                    skills. It will be a single round contest which consists of
                    2 Coding Questions that you have to solve within a duration
                    of 60 minutes.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ui three column grid">
            <div class="column">
              <div class="ui fluid card" style={{boxShadow:" 10px 10px 7px black"}}>
                <div class="image">
                  <img src={pic3} alt="pic" />
                </div>
                <div class="content">
                  <a href="/#" class="header">
                    GIRLS WHO CODE
                  </a>
                  <div class="description">
                    It is a US based non profit organisation that is expanded to
                    India.The programme provides an environment for girls to
                    engage in fun online coding tutorials, build community
                    through interactive activities, learn about inspiring role
                    models in tech, and work together to design solutions to
                    real-world problems.
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="ui fluid card" style={{boxShadow:" 10px 10px 7px black"}}>
                <div class="image">
                  <img src={pic5} alt="pic" />
                </div>
                <div class="content">
                  <a href="/#" class="header">
                    AMAZON WIT
                  </a>
                  <div class="description">
                    AmazeWIT- Amazon Women in Technology is a unique conference
                    launched by Amazon. It is a platform for women aspiring to
                    be in technology or for women already in the field looking
                    to accelerate their growth. Another initiative of amazon is
                    AmazonWOW which aims to provide internship opportunities to
                    women.
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="ui fluid card" style={{boxShadow:" 10px 10px 7px black"}}>
                <div class="image" >
                  <img src={pic8} alt="pic" />
                </div>
                <div class="content">
                  <a href="/#" class="header">
                    MICROSOFT CODESS
                  </a>
                  <div class="description">
                    Codess is a community for female coders initiated by
                    Microsoft and was established to explore ways to promote
                    gender diversity in the engineering field. It is a three
                    step process- an online coding round, followed by a
                    hackathon and finally offering of an internship in Microsoft
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <Footer></Footer>
      </div>

    );

  }
}

export default DashBoard;

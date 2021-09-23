import React from "react";
import "./SignUp.css";

class Email extends React.Component{

  render() {

      return (
        <div style={{backgroundColor:"#DAF7A6",height:"100vh",width:"100%"}} className="ui container">

        <div className="ui centered grid" >

        <div className="six wide column">
        <h1 style={{fontSize:"50px"}}> GET IN TOUCH!!</h1>
        <br/>
        <br/>


        <center>
            <i
              className="fas fa-hand-holding-usd fa-5x"
              style={{ color: "yellow" }}
            ></i>
          </center>
        <label> <h3>Let's get your email Id!</h3></label>
        <br/>

          <div class="ui large right labeled input">
  <input type="text" placeholder="Find domain"/>
  <div class="ui dropdown label">
    <div class="text">.com</div>
    <i class="dropdown icon"></i>
    <div class="menu">
      <div class="item">.com</div>
      <div class="item">.net</div>
      <div class="item">.org</div>
    </div>
  </div>
</div>
<br/>
<br/>

<div class="ui right labeled left icon input">
  <i class="tags icon"></i>
  <input type="text" placeholder="Enter tags"/>
  <a class="ui tag label">
    Add Tag
  </a>
</div>

<br/>
<br/>
<div class="ui form">
  <div class="field">
    <label><h3>Your Message here!</h3></label>
    <textarea></textarea>
  </div>

</div>
<br/>
<br/>
<div class="ui buttons">
  <button class="ui button">Cancel</button>
  <div class="or"></div>
  <button class="ui positive button">Send!</button>
</div>




        </div>

        </div>
        </div>
      )
    }
  }
  export default Email;

import React from "react";

import { Router, Route } from "react-router-dom";
//import Routes from "./routes/Routes";
import DashBoard from "./components/DashBoard";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import history from "./history";
import UpdateList from "./components/UpdateList";
//import Footer from "./components/Footer";
//import Dummy from "./components/Dummy";
const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Route exact path="/dashboard" component={DashBoard} />
          <Route exact path="/" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/getupdates" component={UpdateList} />
        </div>
      </Router>
      <br/>
      <br/>

  
    </div>
  );
};

export default App;

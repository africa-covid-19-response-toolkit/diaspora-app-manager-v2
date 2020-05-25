import React from "react";
import GlobalLayout from "./components/Layout/GlobalLayout";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import Messages from "./components/Messages/Messages";
import Questions from "./components/Questions/Questions";
import Settings from "./components/Settings/Settings";
import SignOut from "./components/Auth/SignOut";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <GlobalLayout>
        <Switch>
          <Route exact path="/" render={props => <SignIn {...props} />} />
          <Route exact path="/sign_up" render={props => <SignUp {...props} />} />
          <Route exact path="/dashboard" render={props => <Dashboard {...props} />} />
          <Route path="/messages" render={props => <Messages {...props} />} />
          <Route path="/questions" render={props => <Questions {...props} />} />
          <Route path="/settings" render={props => <Settings {...props} />} />
          <Route path="/sign_out" render={props => <SignOut {...props} />} />
        </Switch>
      </GlobalLayout>
    </Router>
  );
}

export default App;

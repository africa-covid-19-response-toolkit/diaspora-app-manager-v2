import React from "react";
import {Route} from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp/SignUp";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Dashboard from "./components/Dashboard/Dashboard";
import Messages from "./components/Messages/Messages";
import Questions from "./components/Questions/Questions";
import Settings from "./components/Settings/Settings";
import SignedOut from "./components/Auth/SignOut/SignedOut";

const publicRoutes = [
    <Route exact path="/" render={props => <SignIn {...props} />} />,
    <Route exact path="/forgot_password" render={props => <ForgotPassword {...props} />} />,
    <Route exact path="/signup" render={props => <SignUp {...props} />} />
];
  
const restrictedRoutes = [
    <Route exact path="/dashboard" render={props => <Dashboard {...props} />} />,
    <Route path="/messages" render={props => <Messages {...props} />} />,
    <Route path="/questions" render={props => <Questions {...props} />} />,
    <Route path="/settings" render={props => <Settings {...props} />} />,
    <Route path="/signed_out" render={props => <SignedOut {...props} />} />
];

export { publicRoutes, restrictedRoutes };
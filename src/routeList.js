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
    <Route exact path="/" render={props => <SignIn {...props} />} key="sign_in_route" />,
    <Route exact path="/forgot_password" render={props => <ForgotPassword {...props} />} key="forgot_route" />,
    <Route exact path="/signup" render={props => <SignUp {...props} />} key="/signup_route"/>
];
  
const restrictedRoutes = [
    <Route exact path="/dashboard" render={props => <Dashboard {...props} />} key="dashboard_route" />,
    <Route path="/messages" render={props => <Messages {...props} />} key="messages_route" />,
    <Route path="/questions" render={props => <Questions {...props} />} key="questions_route" />,
    <Route path="/settings" render={props => <Settings {...props} />} key="settings_route" />,
    <Route path="/signed_out" render={props => <SignedOut {...props} />} key="signed_out_route" />
];

export { publicRoutes, restrictedRoutes };
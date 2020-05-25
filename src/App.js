import React from "react";
import {publicRoutes, restrictedRoutes} from "./routeList";
import GlobalLayout from "./components/Layout/GlobalLayout";
import { BrowserRouter as Router, Switch } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <GlobalLayout>
        <Switch>
          {restrictedRoutes}
          {publicRoutes}
        </Switch>
      </GlobalLayout>
    </Router>
  );
}

export default App;

import React from "react";
import styled from "styled-components";
import {publicRoutes, restrictedRoutes} from "./routeList";
import GlobalLayout from "./components/Layout/GlobalLayout";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const AppContainer = styled.section`
    display: flex !important;
`;
AppContainer.displayName = "AppContainer";

const App = () => {
  return (
    <AppContainer>
      <Router>
        <GlobalLayout>
          <Switch>
            {restrictedRoutes}
            {publicRoutes}
          </Switch>
        </GlobalLayout>
      </Router>
    </AppContainer>
  );
}

export default App;

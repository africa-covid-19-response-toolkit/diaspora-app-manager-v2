import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import GlobalLayout from "./components/Layout/GlobalLayout";
import {publicRoutes, restrictedRoutes} from "./routeList";
import { Application } from 'react-rainbow-components';
import styled from "styled-components";

const AppContainer = styled(Application)`
    display: flex !important;
`;
AppContainer.displayName = "AppContainer";

const theme = {
  rainbow: {
    palette: {
      mainBackground: "#000000",
      brand: "#fdd30b", 
    },
  },
};

const App = () => {
  return (
    <AppContainer theme={theme}>
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

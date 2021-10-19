import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { history } from "../App/configStore";
import Main from "../pages/Main";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Tempmain from "../pages/Tempmain";

export default function App() {

  return (
    <React.Fragment>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/tempmain" component={Tempmain} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/login" component={Login} exact />
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  #root {
    height: 100%;
  }
`;

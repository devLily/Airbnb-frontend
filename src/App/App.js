import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { history } from "./configStore";
import Main from "../pages/Main";
import PostWrite from "../pages/PostWrite";
import PostList from "../pages/PostList";
import Header from "../components/Header";

export default function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Header position="sticky" />
        <MainContainer>
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/rooms" component={PostWrite} exact />
            <Route path="/searches/:location" component={PostList} exact />
          </Switch>
        </MainContainer>
      </ConnectedRouter>
    </React.Fragment>
  );
}

const MainContainer = styled.main`
  width: 100%;
`;

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

import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import { Header, Page, SideMenu, TableView } from "./components";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-gray-400 w-screen h-screen flex">
        <SideMenu />

        <div className="flex flex-col overflow-auto w-full">
          <Header />
          <Switch>
            <Route path="/security" exact>
              <TableView />
            </Route>
            <Route path="/strategy" exact>
              <TableView />
            </Route>
            <Route path="/chart" exact>
              <TableView />
            </Route>
            <Route path="/data" exact>
              <TableView />
            </Route>
            <Route path="/presentation" exact>
              <TableView />
            </Route>
            <Route path="/settings" exact>
              <TableView />
            </Route>
            <Route path="/" exact>
              <Page />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

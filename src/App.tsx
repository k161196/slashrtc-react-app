import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import { Header, Page, SideMenu, TableView } from "./components"


function App() {
  return (


    <div className="bg-gray-400 w-screen h-screen flex">


      <SideMenu />





      <div className="flex flex-col overflow-auto w-full">
        <Header />
        <TableView />
        {/* <Page /> */}

      </div>



    </div>
  );
}

export default App;

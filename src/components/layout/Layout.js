import React from "react";
import Navigation from "./Navigation";
import Home from "../home/Home";
import InfectionControlForm from "../form/InfectionControlForm";

function Layout() {
  return (
    <>
      <Navigation />
      <Home />
      <InfectionControlForm />
    </>
  );
}

export default Layout;

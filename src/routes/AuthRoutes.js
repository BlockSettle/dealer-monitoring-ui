/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Footer from "components/Footer";
import Header from "components/Header";
import Dealer from "pages/Auth/Dealer";

export default (props) => {
  return (
    <>
      <Header {...props} />
      <main className="layout-content">
        <Switch>
          <Route
            path="/dealer"
            component={(props) => <Dealer {...props} />}
          ></Route>
          <Redirect to="/dealer"/>
        </Switch>
      </main>
      {/* <Footer {...props} /> */}
    </>
  );
};

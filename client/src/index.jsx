import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

import App from "./components/App";
import "./index.scss";

const AppWithRouter = withRouter(App);

render(
  <Router>
    <AppWithRouter />
  </Router>,
  document.getElementById("root")
);

import React from "react";
import { CssBaseline, Container } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

// Components
import NavBar from "./NavBar";
import Posts from "./Posts";
import AddPost from "./AddPost";
import EditPost from "./EditPost";

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <StyledContainer maxWidth="sm">
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/addpost" component={AddPost} />
          <Route exact path="/editpost/:id" component={EditPost} />
        </Switch>
      </StyledContainer>
    </>
  );
}

export default App;

const StyledContainer = styled(Container)`
  text-align: center;
  margin: "2rem auto";
`;

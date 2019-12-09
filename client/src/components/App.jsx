import React from "react";
import { CssBaseline, Typography, Container } from "@material-ui/core";
import styled from "styled-components";

// Components
import NavBar from "./NavBar";
import Posts from "./Posts";

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <StyledContainer maxWidth="sm">
        <Posts />
      </StyledContainer>
    </>
  );
}

export default App;

export const StyledContainer = styled(Container)`
  text-align: center;
`;

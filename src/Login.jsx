import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "./firebase";
import logo from "./images/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg";

export default function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <Container>
      <LoginInnerContainer>
        <img src={logo} alt="Gmail Logo" />

        <Button onClick={signIn} variant="contained" color="primary">
          Login
        </Button>
      </LoginInnerContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #f2f2f2;
`;

const LoginInnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  > img {
    object-fit: contain;
    height: 200px;
  }
`;

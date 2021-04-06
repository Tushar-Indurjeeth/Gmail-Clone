import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./Login";
import Spinner from "react-spinkit";
import logo from "./images/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src={logo} alt="Gmail Logo" />

          <Spinner name="ball-spin-fade-loader" color="blue" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  }

  return (
    <Router>
      <Container>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <Body>
              <Sidebar />

              <Switch>
                <Route path="/mail">
                  <Mail />
                </Route>

                <Route path="/">
                  <EmailList />
                </Route>
              </Switch>
            </Body>

            {sendMessageIsOpen && <SendMail />}
          </>
        )}
      </Container>
    </Router>
  );
}

export default App;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
  background-color: #f2f2f2;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    object-fit: contain;
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;

const Container = styled.div`
  height: 100vh;
`;

const Body = styled.div`
  display: flex;
  height: 100vh;
`;

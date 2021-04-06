import React from "react";
import styled from "styled-components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useSelector } from "react-redux";
import { selectedOpenMail } from "../features/mailSlice";

export default function Mail() {
  const history = useHistory();
  const selectedMail = useSelector(selectedOpenMail);

  return (
    <Container>
      <Tools>
        <ToolsLeft>
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton>
            <MoveToInboxIcon />
          </IconButton>

          <IconButton>
            <ErrorIcon />
          </IconButton>

          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <EmailIcon />
          </IconButton>

          <IconButton>
            <WatchLaterIcon />
          </IconButton>

          <IconButton>
            <CheckCircleIcon />
          </IconButton>

          <IconButton>
            <LabelImportantIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </ToolsLeft>

        <ToolsRight>
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>

          <IconButton>
            <PrintIcon />
          </IconButton>

          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </ToolsRight>
      </Tools>

      <Body>
        <BodyHeader>
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantIcon className="mail__important" />
          <p>{selectedMail?.title}</p>
          <p className="mail__time">{selectedMail?.time}</p>
        </BodyHeader>

        <Message>
          <p>{selectedMail?.description}</p>
        </Message>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  background-color: whitesmoke;
`;

const Tools = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
`;

const ToolsLeft = styled.div`
  display: flex;
`;

const ToolsRight = styled.div``;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  background-color: white;
  padding: 20px;
  height: 100vh;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
`;

const BodyHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
  padding: 20px;
  position: relative;

  > h2 {
    font-weight: 400;
    margin-right: 20px;
  }

  > p {
    margin-left: 20px;
  }

  .mail__important {
    color: #e8ab02 !important;
  }

  .mail__time {
    position: absolute;
    top: 24px;
    right: 0;
    font-size: 12px;
    color: gray;
  }
`;

const Message = styled.div`
  padding: 10px;
  margin-right: 20px;
  overflow-wrap: break-word;
`;

import { Checkbox, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "../firebase";

export default function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <Container>
      <Settings>
        <SettingsLeft>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </SettingsLeft>

        <SettingsRight>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </SettingsRight>
      </Settings>

      <Sections>
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="blue" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </Sections>

      <List>
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Settings = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  border-bottom: 1px solid whitesmoke;
  background-color: white;
  z-index: 999;
  padding-right: 10px;
`;

const SettingsLeft = styled.div``;

const SettingsRight = styled.div``;

const Sections = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  border-bottom: 1px solid whitesmoke;
  background-color: white;
  z-index: 999;
`;

const List = styled.div`
  padding-bottom: 20%;
`;

import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function Header() {
  const [user] = useAuthState(auth);

  return (
    <Container>
      <HeaderLeft>
        <IconButton>
          <MenuIcon />
        </IconButton>

        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
        />
      </HeaderLeft>

      <HeaderMiddle>
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon />
      </HeaderMiddle>

      <HeaderRight>
        <IconButton>
          <AppsIcon />
        </IconButton>

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <Avatar
          src={user?.photoURL}
          onClick={() => auth.signOut()}
          className="header__avatar"
        />
      </HeaderRight>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid whitesmoke;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  img {
    object-fit: contain;
    height: 80px;
    margin-left: 5px;
  }
`;

const HeaderMiddle = styled.div`
  display: flex;
  flex: 0.7;
  align-items: center;
  background-color: whitesmoke;
  padding: 10px;
  border-radius: 5px;

  .MuiSvgIcon-root {
    color: grey;
  }

  > input {
    border: none;
    width: 100%;
    padding: 10px;
    outline: none;
    font-size: medium;
    background-color: transparent;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  padding-right: 20px;

  .header__avatar {
    cursor: pointer;
  }
`;

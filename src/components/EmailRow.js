import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedMail } from "../features/mailSlice";

export default function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectedMail({ id, title, subject, description, time }));

    history.push("/mail");
  };

  return (
    <Container onClick={openMail}>
      <Options>
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </Options>

      <Title>{title}</Title>
      <Message>
        <h4>
          {subject}{" "}
          <span className="emailRow__description">- {description}</span>
        </h4>
      </Message>
      <Time>{time}</Time>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid whitesmoke;
  cursor: pointer;
  z-index: 999;

  :hover {
    border-top: 1px solid whitesmoke;
    box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);
  }
`;

const Options = styled.div`
  display: flex;
`;

const Title = styled.h3`
  font-size: 13px;
  flex: 0.3;
`;

const Message = styled.div`
  display: flex;
  flex: 0.8;
  align-items: center;
  font-size: 13px;

  > h4 {
    width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 5px;
    padding-right: 5px;
  }

  .emailRow__description {
    font-weight: 400;
    color: gray;
  }
`;

const Time = styled.p`
  padding-right: 15px;
  font-size: 11px;
  font-weight: bold;
`;

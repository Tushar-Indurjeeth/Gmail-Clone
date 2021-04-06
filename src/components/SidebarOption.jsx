import React from "react";
import styled from "styled-components";

export default function SidebarOption({ Icon, title, number, selected }) {
  return (
    <Container className={`${selected && "sidebarOption--active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
  color: #818181;

  &.sidebarOption--active > p {
    display: inline !important;
  }

  .MuiSvgIcon-root {
    padding: 5px;
  }

  > p {
    display: none;
    font-weight: 300;
  }

  > h3 {
    flex: 1;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 400;
  }

  :hover,
  :hover > p,
  :hover > h3,
  &.sidebarOption--active,
  &.sidebarOption--active > p,
  &.sidebarOption--active > h3 {
    background-color: #fcecec;
    color: #c04b37;
    font-weight: 700 !important;
  }

  :hover > p {
    display: inline;
  }
`;

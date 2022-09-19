import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

const pages = ["Home", "About us", "Products", "Contact", "Testimony"];

const HeaderNavBar = () => {
  const [active, setActive] = useState("Home");
  console.log(active, "active");
  const handleActive = (event) => {
    console.log(event.target.outerText);
    setActive(event.target.outerText);
  };
  return (
    <SContainer>
      {pages.map((el, i) => {
        return (
          <p
            key={i}
            className={el === active ? "isActive" : ""}
            onClick={(event) => handleActive(event)}
          >
            {el}
          </p>
        );
      })}
    </SContainer>
  );
};

export default HeaderNavBar;

const SContainer = styled.div`
  width: 100%;
  padding: 0px;
  background: #ffffff;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 3;
  justify-content: start;
  & > p {
    font-size: 20px;
    justify-content: start;
    display: flex;
    margin-left: 20px;
    cursor: pointer;
    &.isActive {
      color: black;
      background: orange;
    }
  }
`;

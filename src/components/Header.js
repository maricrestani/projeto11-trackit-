import styled from "styled-components";
import ContextLogin from "../constants/ContextLogin.js";
import { React, useContext } from "react";

export default function Header() {
  const { user } = useContext(ContextLogin);

  return (
    <HeaderContainer>
      <h1>TrackIt</h1>
      <img src={user.image} alt="Imagem de perfil" />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  background-color: #91a0e2;
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  h1 {
    margin-left: 20px;
    font-family: "Caveat";
    font-weight: 400;
    font-size: 39px;
    color: #ffffff;
  }

  img {
    margin-right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

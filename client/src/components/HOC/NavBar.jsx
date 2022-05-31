import React from "react";
import styled from "styled-components";
import { MdShoppingCart } from "react-icons/md";
import Badge from "@mui/material/Badge";

const NavBar = () => {
  return (
    <Container>
      <LeftContainer>
        <Logo>SHOP</Logo>
      </LeftContainer>
      <RightContainer>
        <IconContainer>
          <Badge badgeContent={4} color="primary">
            <MdShoppingCart size={25} />
          </Badge>
        </IconContainer>
        <LoginButton>Login</LoginButton>
      </RightContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 1920px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftContainer = styled.div`
  margin-left: 150px;
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.secondaryColor};
`;

const RightContainer = styled.div`
  margin-right: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    /* color: ${({ theme }) => theme.secondaryColor}; */
    cursor: pointer;
    margin-bottom: 1px;
  }
`;

// const Badge = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
// `;

const LoginButton = styled.button`
  background-color: ${({ theme }) => theme.secondaryColor};
  width: 120px;
  height: 50px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 11px 27px rgba(0, 198, 215, 0.35);
  border-radius: 12px;
  cursor: pointer;
  margin-left: 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 27px;
  color: white;
`;

// const RegisterButton = styled.button`
//   color: ${({ theme }) => theme.secondaryColor};
//   width: 164px;
//   height: 70px;
// `;

export default NavBar;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdShoppingCart } from "react-icons/md";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import CartModel from "../CartModel";
import {
  authAction,
  authCardAction,
  cartAction,
} from "../../redux/slices/globalSlice";
import { useGetCartQuery } from "../../redux/services/productApi";
import Cookie from "js-cookie";
import { useLogoutQuery } from "../../redux/services/authApi";
import { skipToken } from "@reduxjs/toolkit/dist/query";

const NavBar = () => {
  const { isCartOpen, isAuthCardOpen, isAuthenticated } = useSelector(
    (state) => state.globalSlice
  );
  const { data } = useGetCartQuery();

  const [logout, setLogout] = useState(false);

  const logoutQuery = useLogoutQuery(!logout ? skipToken : undefined);

  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(cartAction(!isCartOpen));
  };

  const authToken = Cookie.get("authToken");
  if (authToken) {
    dispatch(authAction(true));
  } else {
    dispatch(authAction(false));
  }

  useEffect(() => {
    if (logoutQuery[1]?.data) {
      console.log(logoutQuery[1].data?.message);
    }
  }, [logoutQuery.isSuccess]);

  const handleLogout = async () => {
    try {
      setLogout(true);
      Cookie.remove("authToken");
      dispatch(authAction(false));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      {isCartOpen && <CartModel />}
      <LeftContainer>
        <Logo>SHOP</Logo>
      </LeftContainer>
      <RightContainer>
        <IconContainer onClick={handleCart}>
          <Badge badgeContent={data?.cart?.products.length} color="primary">
            <MdShoppingCart size={25} />
          </Badge>
        </IconContainer>
        {!isAuthenticated ? (
          <LoginButton
            onClick={() => dispatch(authCardAction(!isAuthCardOpen))}
          >
            Login
          </LoginButton>
        ) : (
          <LoginButton onClick={handleLogout}>Logout</LoginButton>
        )}
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

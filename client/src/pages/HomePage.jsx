import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AuthCard from "../components/AuthCard";
import HeroComponent from "../components/HeroComponent";
import ProductsComponent from "../components/ProductsComponent";

const HomePage = () => {
  const { isAuthCardOpen } = useSelector((state) => state.globalSlice);

  return (
    <Container>
      {isAuthCardOpen && <AuthCard />}
      <HeroComponent />
      <ProductsComponent />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default HomePage;

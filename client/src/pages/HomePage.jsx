import React from "react";
import styled from "styled-components";
import HeroComponent from "../components/HeroComponent";
import ProductsComponent from "../components/ProductsComponent";

const HomePage = () => {
  return (
    <Container>
      <HeroComponent />
      <ProductsComponent />
    </Container>
  );
};

const Container = styled.div``;

export default HomePage;

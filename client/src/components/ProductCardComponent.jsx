import React from "react";
import styled from "styled-components";

const ProductCardComponent = ({ image, price, name, onClick, stock }) => {
  return (
    <Container>
      <ProductImage src={image} />
      <ProductDetails>
        <PriceContainer>
          <Price>${price}</Price>
          <Stock>In Stock: {stock}</Stock>
        </PriceContainer>
        <Name>{name}</Name>
        <Button onClick={onClick}>Add to Cart</Button>
      </ProductDetails>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: 450px;
  box-shadow: 0px 9px 26px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  margin: 25px 25px;
`;

const ProductImage = styled.img`
  width: 300px;
  height: 250px;
  border-radius: 30px;
`;

const ProductDetails = styled.div`
  margin: 15px 24px;
  display: flex;
  flex-direction: column;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
`;

const Stock = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const Name = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-top: 8px;
`;

const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.secondaryColor};
  border-radius: 12px;
  background-color: white;
  width: 245px;
  height: 45px;
  margin-top: 16px;

  &:hover {
    cursor: pointer;
  }
`;

export default ProductCardComponent;

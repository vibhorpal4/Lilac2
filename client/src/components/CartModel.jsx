import React from "react";
import styled from "styled-components";
import {
  useGetCartQuery,
  useRemoveProductFromCartMutation,
} from "../redux/services/productApi";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartAction } from "../redux/slices/globalSlice";
import { MdDelete } from "react-icons/md";

const CartModel = () => {
  const { data, isLoading, isFetching, error, isError } = useGetCartQuery();
  const dispatch = useDispatch();
  const removeFromCart = useRemoveProductFromCartMutation();

  const handleRemoveFromCart = async (id) => {
    try {
      await removeFromCart[0](id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Header>
        <IconButton onClick={() => dispatch(cartAction(false))}>
          <AiOutlineClose size={25} />
        </IconButton>
      </Header>

      {isLoading || isFetching ? (
        <span>Loading...</span>
      ) : (
        <>
          {data.cart.products.length <= 0 ? (
            <ProductWrapper>
              <Name>0 Product in cart</Name>
            </ProductWrapper>
          ) : (
            data.cart.products.map((product) => (
              <ProductWrapper key={product._id}>
                <Name>{product.name}</Name>
                <Image src={product.image} />
                <IconButton onClick={() => handleRemoveFromCart(product._id)}>
                  <MdDelete size={25} color="red" />
                </IconButton>
              </ProductWrapper>
            ))
          )}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 550px;
  /* height: 600px; */
  /* overflow: auto; */
  right: 0;
  top: 0;
  margin-right: 100px;
  margin-top: 80px;
  background-color: ${({ theme }) => theme.backgroundColor};
  box-shadow: 0px 9px 26px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* padding-right: 20px; */
  padding: 10px 20px;
`;

const IconButton = styled.div`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.secondaryColor};

  & :hover {
    cursor: pointer;
  }
`;

const ProductWrapper = styled.div`
  /* width: 100%; */
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 30px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  object-fit: contain;
`;

const Name = styled.span`
  font-size: 18px;
  width: 50%;
`;

export default CartModel;

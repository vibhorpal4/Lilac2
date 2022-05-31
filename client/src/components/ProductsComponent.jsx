import React, { useEffect } from "react";
import styled from "styled-components";
import {
  useAddToCartProductMutation,
  useGetAllProductsQuery,
} from "../redux/services/productApi";
import ProductCardComponent from "./ProductCardComponent";

const ProductsComponent = () => {
  const { data, isError, error, isFetching, isLoading } =
    useGetAllProductsQuery();
  const addToCart = useAddToCartProductMutation();

  useEffect(() => {
    if (addToCart[1]?.data) {
      console.log(addToCart[1]?.data?.message);
    }
  }, [addToCart[1]?.isSuccess]);

  useEffect(() => {
    if (error) {
      alert(error?.data?.message);
    }
    if (addToCart[1]?.error) {
      alert(addToCart[1]?.error?.data?.message);
    }
  }, [addToCart[1]?.isError || isError]);

  const handleAddToCart = async (id) => {
    try {
      // console.log(id);
      await addToCart[0](id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      {isLoading || isFetching ? (
        <span>Loading...</span>
      ) : data.products.length <= 0 ? (
        <span>No Product Found</span>
      ) : (
        data.products.map((product, index) => (
          <ProductCardComponent
            name={product.name}
            price={product.price}
            image={product.image}
            onClick={() => handleAddToCart(product._id)}
            stock={product.stock}
          />
        ))
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 1920px;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default ProductsComponent;

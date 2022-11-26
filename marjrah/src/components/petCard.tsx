import React from "react";
import styled from '@emotion/styled';

type ProductCard = {
    brand?: string,
    name?: string;
    imgUrl?: string;
    price?: number;
    productProps?: ProductProps;
    onClick?: (id: number) => void;
    addToCart?: () => void;
    addToFavorite?: () => void;
}

type ProductProps = {
    rating?: number;
    strikePrice?: number;
    colorOptions?: any;
    sizeOptions?: any;
}

const ProductCardContainer = styled('div')`
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  height: 321px;
  width: 267px;
  padding: 20px;
  margin: 10px;
  background: #fff;
  transform: scale(1);
  transition: box-shadow 0.2s, transform 0.1s;
  font-family: "Montserrat", sans-serif;
  img {
    position: relative;
    width: 240px;
    height: 330px;
    //transition: transform 400ms, filter 400ms;
  }
  :hover {
    transform: scale(1.01);
    box-shadow: 5px 5px 5px rgba(0,0,0,0.1);
    cursor: pointer;
    div {
      opacity: 1;
    }
  }
`

const ProductImageContainer = styled('div')`
    position: relative;
    height: 218px;
    width: 227px;
`
const ProductDetailsContainer = styled('div')`
    height: 100%;
    width: 100%;
`
const OptionsContainer = styled('div')`
    transition: 0.5s;
    opacity: 0;
`

type imageProp = {
    imgUrl?: string;
}

const ProductImage = styled('div')<imageProp>`
  width: 227px;
  height: 218px;
  z-index: 2;
  object-fit: cover;
  img {
    width: 227px;
    height: 218px;
  }
`


const ProductCard = ({ brand, name = "", imgUrl, price, productProps = {}, onClick = () => {}, addToFavorite = () => {}, addToCart = () => {}  }: ProductCard) =>  (
    <ProductCardContainer onClick={() => onClick}>
        <ProductImageContainer className="static">
            <ProductImage className="absolute" imgUrl={imgUrl}>
                <img className="object-cover" src={imgUrl ? imgUrl : "https://images.unsplash.com/photo-1518378188025-22bd89516ee2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"} alt="Not Found :_("/>
            </ProductImage>
            <OptionsContainer className="flex absolute top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            </OptionsContainer>
        </ProductImageContainer>
        <ProductDetailsContainer>
            <div className="flex justify-between">
                <div style={{ fontSize: '10px', color: "#4f4f4f", fontWeight: 300 }} className="pt-1 pr-1 pb-1">
                    {brand}
                </div>
            </div>
            <div style={{ fontSize: '10px', color: "#030e19", fontWeight: 600 }} className="pt-1 pr-1 pb-1">
                {name?.length > 20 ? name.substring(0, 25) + "..." : name}
            </div>
            <div className="flex">
                {productProps.strikePrice &&
                    <div style={{ fontSize: '10px', color: "#bdbdbd", textDecoration: "line-through" }} className="pt-2.5 pb-1 pr-1">
                        ₹{productProps.strikePrice}
                    </div>
                }
                <div style={{ fontSize: '16px', color: " #f4694c" }} className="pt-1 pr-1 pb-1">
                </div>
            </div>
        </ProductDetailsContainer>
    </ProductCardContainer>
);


export default ProductCard;

import React, { useContext, useEffect, useState } from "react";
import {v4 as uuidv4} from "uuid";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import useFetchData from "../../hook/useFetchData";
import CartContext from "../../context/CartContext";

const ProductView = () => {
  
  const param = useParams();

  const productData = useFetchData(param.id);
  // console.log("Product ID", param.id);
  console.log(param);

  const {addProduct} = useContext(CartContext);
  console.log("cartdata", addProduct);

  const dd = useContext(CartContext);
  console.log("cartdata", dd);

  return (
    <>
      <img src={productData.image_url} className="h-20" />
      <p>{productData.title}</p>
      <p>{productData.brand}</p>
      <p>₹{productData.price}</p>
      <p>{productData.rating}⭐</p> 
      <button className="bg-red-400 p-5" onClick={() => {addProduct(productData)}}>Add to Cart</button>
      {productData.similar_products?.map((item) => (
        
        // <ProductCard data={item} key={uuidv4()} />
        <ProductCard title={item.title} brand={item.brand} price={item.price} rating={item.rating} image_url={item.image_url} id= {item.id} key={uuidv4()}/>
        
      ))}
    </>
  );
};

export default ProductView;

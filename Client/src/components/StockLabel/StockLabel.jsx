import React from 'react'
import ProductCard from "../ProductCard/ProductCard";

export const StockLabel = (ProductCard) => {
  return (
    (prop) => {
        return (
          <>
          <div>
            <ProductCard {...prop}/>
            <p>IN STOCK</p>
          </div>
          </>
        )
    }
  )
}

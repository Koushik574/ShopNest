import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const CartProvider = ({children}) => {

  
  const [cartData, setCartData] = useState([]);

  const addProduct = (mockData) => {
    const uniqueId = uuidv4();
    // Add the product to cartData with the unique id
    setCartData([...cartData, { ...mockData, id: uniqueId }]);
    // setCartData([...cartData, mockData])
  }

  const removeProduct = (index) => {
    const newProductItems = cartData.filter((item) => {
      return item.id !== index;
    })
    setCartData(newProductItems);
  }

  const clearCartData = () => {
    setCartData([]);
  }


  return(
    <>
     <CartContext.Provider value={{cartData: cartData, addProduct, removeProduct, clearCartData}}>
      {children}  
     </CartContext.Provider>
     </>
  )
}

const CartContext = createContext({
  cartData: [], // Will have all the data
  addProduct: () => {}, // Add product to cart
  clearCart: () => {}, // Remove all products from cart
  removeProduct: () => {} // Remove only specific product from cart
});

export default CartContext;

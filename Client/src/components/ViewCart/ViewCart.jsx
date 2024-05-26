import React, { useContext } from 'react';
import CartContext from "../../context/CartContext";
import { useCustomCartContext } from "../../hook/useCustomCartContext";

const ViewCart = () => {

  const dd = useCustomCartContext();
  console.log("Custom hook",dd);
  
  const { cartData, removeProduct, clearCartData } = dd;
  // const { cartData, removeProduct, clearCartData } = useContext(CartContext);

  console.log(cartData);
  console.log(removeProduct);
  console.log(clearCartData);

  if (!cartData || cartData.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <h1>ViewCart</h1>
      <div className="2xl:container">
        <div className="w-[90%] mx-auto py-5">
          <button className="bg-black text-white py-3 px-2 rounded-lg" onClick={() => {
            clearCartData();
          }}>
            Clear Product
          </button>
        </div>
        <div className="w-[90%] mx-auto grid grid-cols-1 gap-6">
          {cartData.map((item) => (
            <div key={item.id} className="bg-orange-500 flex justify-evenly items-center gap-6 p-4">
              <img src={item.image_url} alt="ProductImg" className="w-20 h-20 object-cover" />
              <h2>{item.title}</h2>
              <div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg" onClick={() => {
                  removeProduct(item.id);
                }}>
                  Remove Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewCart;

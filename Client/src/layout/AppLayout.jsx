import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {Outlet} from "react-router-dom";
// import UserContext from "../context/UserContext";
import { useState, useEffect } from "react";
import CartContext, { CartProvider } from "../context/CartContext";
import { v4 as uuidv4 } from "uuid";
import { QueryClient, useQuery, useMutation, useQueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const AppLayout = () => {

  // const [userName, setUserName] = useState();

  // useEffect(() => {
  //   setUserName("Sai");
  // }, [])

  // const addProduct = (name) => {
  //   setUserName(name);
  // }

  // const mockData = [{
  //   title: "Hat",
  //   brand: "MAJIK",
  //   price: 288,
  //   id: 1,
  //   image_url:
  //     "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
  //   rating: "3.6",
  // },]

  const queryClient = new QueryClient(); 



    return (
      <>
      
      {/* <UserContext.Provider value={{loggedIn: userName, addProduct}}> */}
      {/* <CartContext.Provider value={{cartData: cartData, addProduct, removeProduct, clearCartData}}>
        <Header />
        {/* <Body /> */}
      {/* <UserContext.Provider value={{loggedIn: "nothing", addProduct}}> */}
        {/* <Outlet /> */}
        {/* </UserContext.Provider> */}
        {/* <Footer /> */}
        {/* </UserContext.Provider> */}
        <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Header />
          <Outlet />
          <Footer /> 
        </CartProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>

      </>
    );
  };
export default AppLayout;
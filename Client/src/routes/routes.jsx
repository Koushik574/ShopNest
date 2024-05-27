import React, { lazy,Suspense } from "react";
import Contact from "../components/Contact/Contact";
import Error from "../components/Error/Error";
import HeroSection from "../components/HeroSection/HeroSection";
import ProductView from "../components/ProductView/ProductView";
import AppLayout from "../layout/AppLayout";
// import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import ViewCart from "../components/ViewCart/ViewCart";
import Login from "../components/Login/Login";

const ProductPage = lazy(() => import("../components/ProductCardContainer/ProductCardContainer"));

const routes = [ {
  path: "/",
  element: <AppLayout />,
  // NESTED ROUTES
  children: [
    {
      path:"/",
      element: <HeroSection />
    },
    {
      path:"/product",
      element: <Suspense fallback={<p>Loading..</p>}><ProductPage /></Suspense>
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/productview/:id",
      element: <ProductView />
    },
    {
      path:"/about",
      element: <About />
    },
    {
      path:"/cart",
      element: <ViewCart />
    },
    {
    path:"login",
    element: <Login />
  }

  ],
  errorElement: <Error />
},]



export default [...routes];
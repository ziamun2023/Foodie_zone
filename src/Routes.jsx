import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/home/Home";

import Menupage from "./pages/menutiem/Menupage";
import Order from "./pages/orderFoods.jsx/Order";



  export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {path:'/',
    element:<Home></Home>},
    {path:'/menus',
    element:<Menupage></Menupage>},
    {path:'/order',
    element:<Order></Order>}
      ]
    },
  ]);


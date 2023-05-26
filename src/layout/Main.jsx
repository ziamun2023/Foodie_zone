import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";
import { useState } from "react";


const Main = () => {
    // const [truee,setTruee]=useState(true)
    const location =useLocation()
    const noheader=location.pathname.includes('login')

    return (
        <div>
          {noheader  ||  <Navbar/>}
         <Outlet/>
       {noheader  || <Footer/>} 
        </div>
    );
};

export default Main;
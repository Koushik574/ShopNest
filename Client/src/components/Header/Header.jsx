import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../hook/useOnlineStatus";
import UserContext from "../../context/UserContext";


const Header = () => {

    const online = useOnlineStatus();
    // console.log(online);
    const data = useContext(UserContext);
    

  return (
    <>
        <div className="2xl:container bg-slate-300 h-[10vh]">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 h-[100%]">
                <div className="flex justify-start items-center">
                    <Link to="/"><p>Logo</p></Link>
                </div>

                <ul className="flex justify-end items-center space-x-5 h-[100%]">

                    <li>{online ? ("✅Online") : ("❌Offline")}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">View Cart</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>{data.loggedIn}</li>

                </ul>

            </div>
        </div>
    </>
  );
};

export default Header;

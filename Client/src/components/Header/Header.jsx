// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../../hook/useOnlineStatus";
// import UserContext from "../../context/UserContext";


// const Header = () => {

//     const online = useOnlineStatus();
//     // console.log(online);
//     const data = useContext(UserContext);
    

//   return (
//     <>
//         <div className="2xl:container bg-slate-300 h-[10vh]">
//             <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 h-[100%]">
//                 <div className="flex justify-start items-center">
//                     <Link to="/"><p>Logo</p></Link>
//                 </div>

//                 <ul className="flex justify-end items-center space-x-5 h-[100%]">

//                     <li>{online ? ("✅Online") : ("❌Offline")}</li>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/product">Product</Link></li>
//                     <li><Link to="/contact">Contact</Link></li>
//                     <li><Link to="/cart">View Cart</Link></li>
//                     <li><Link to="/about">About</Link></li>
//                     <li>{data.loggedIn}</li>

//                 </ul>

//             </div>
//         </div>
//     </>
//   );
// };

// export default Header;

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../hook/useOnlineStatus";
import UserContext from "../../context/UserContext";

const Header = () => {
    const online = useOnlineStatus();
    const data = useContext(UserContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="2xl:container bg-slate-300 h-[10vh]">
            <div className="w-[90%] mx-auto flex justify-between items-center h-full">
                <div className="flex justify-start items-center">
                    <Link to="/"><p>Logo</p></Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
                <ul className={`fixed top-0 left-0 w-full h-screen bg-slate-800 text-white flex-col md:flex-row md:flex md:static md:bg-transparent md:text-black space-x-5 h-full md:h-auto md:space-x-8 md:space-y-0 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
                    <li className="md:hidden flex justify-end p-4"><button onClick={closeMenu}>Close</button></li>
                    <li className="p-4">{online ? "✅Online" : "❌Offline"}</li>
                    <li className="p-4"><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li className="p-4"><Link to="/product" onClick={closeMenu}>Product</Link></li>
                    <li className="p-4"><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                    <li className="p-4"><Link to="/cart" onClick={closeMenu}>View Cart</Link></li>
                    <li className="p-4"><Link to="/about" onClick={closeMenu}>About</Link></li>
                    <li className="p-4">{data.loggedIn}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;




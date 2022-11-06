import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { UserContext } from "../../../Context/AuthContext";
import { FaSignOutAlt } from "react-icons/fa";


const Header = () => {
  const {user, logOut} = useContext(UserContext);

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(err=>console.error(err))
  }


  const menuItems = (
    <>
          <li className="font-semibold"><Link to="/">Home</Link></li>
          {
            user?.email ? 
            <li className="font-semibold"><Link to="/orders">Orders</Link></li>
            :
            <li className="font-semibold"><Link to="/login">Login</Link></li>
          }
    </>
  );

  return (
    <div>
      <div className="navbar h-20 bg-base-100 pt-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-outline border-[#FF3811] text-[#FF3811]">Appoinment</button>
          <button onClick={handleLogOut} className="btn btn-outline border-[#FF3811] text-[#FF3811] ml-2"><FaSignOutAlt/></button>
          
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/baze_logo.png'

const Header = () => {
  return (
    <div className="flex items-center justify-between p-5">
      <div className="w-[10%]">
        <img src={logo} alt="" className="w-full" />
      </div>
      <div className="flex items-center gap-4 ">
        <Link className="text-white hover:text-gray-300" to="/">Home</Link>
        <Link className="text-white hover:text-gray-300" to="/about">About</Link>
        <Link className="text-white hover:text-gray-300" to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Header;

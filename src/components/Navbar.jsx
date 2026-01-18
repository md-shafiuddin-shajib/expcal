import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 drop-shadow-lg drop-shadow-sky-300">
      <nav className="lg:w-[80%] mx-auto flex items-center justify-between px-10">
        <Link to='/' className="font-black text-white shadow-2xl ">ExpCal</Link>
        <ul className="list-none flex gap-5 text-md font-bold text-white">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

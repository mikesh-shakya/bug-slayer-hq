import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo / Site Title */}
      <Link to={"/"}>
        <div className="text-2xl cursor-pointer font-bold text-purple-400 tracking-wider">
          BugSlayer HQ
        </div>
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-sm font-medium">
        <li>
          <Link to={"/dsa-dungeon"}>
            <div className="hover:text-purple-400 transition">DSA Dungeon</div>
          </Link>
        </li>
        <li>
          <Link to={"/system-design"}>
            <div className="hover:text-purple-400 transition">
              System Design
            </div>
          </Link>
        </li>
        <li>
          <Link to={"#"}>
            <div className="hover:text-purple-400 transition">Blog</div>
          </Link>
        </li>
        <li>
          <Link to={"#"}>
            <div className="hover:text-purple-400 transition">About</div>
          </Link>
        </li>
        <li>
          <Link to={"/arena"}>
            <div className="hover:underline">Problem Arena</div>
          </Link>
        </li>
      </ul>

      {/* Call to Action */}
      <button className="bg-purple-600 hover:bg-purple-700 transition px-4 py-2 text-sm rounded-md font-semibold">
        Start Quest
      </button>
    </nav>
  );
};

export default Navbar;

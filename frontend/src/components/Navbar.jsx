import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo / Site Title */}
      <div className="text-2xl font-bold text-purple-400 tracking-wider">
        BugSlayer HQ
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-sm font-medium">
        <li>
          <a href="/dsa-dungeon" className="hover:text-purple-400 transition">
            DSA Dungeon
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-purple-400 transition">
            System Design
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-purple-400 transition">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-purple-400 transition">
            About
          </a>
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

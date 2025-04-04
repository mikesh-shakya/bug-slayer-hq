import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold text-purple-500">BugSlayer HQ</h2>
          <p className="text-sm">Crafted in the Shadows of the Code Dungeon</p>
        </div>

        {/* Right Side */}
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-white transition">
            Dungeon
          </a>
          <a href="#" className="hover:text-white transition">
            System Design
          </a>
          <a href="#" className="hover:text-white transition">
            Blog
          </a>
          <a href="#" className="hover:text-white transition">
            About
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-6 text-xs text-center text-gray-500">
        &copy; {new Date().getFullYear()} BugSlayer HQ. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

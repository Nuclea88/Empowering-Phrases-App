import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
      <div className="navbar-brand">
        <h1 className="text-xl font-bold">Empowerment Phrases</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
        <Link to="/" className="bg-white text-[#8C5A66] px-4 py-2 rounded text-center font-medium hover:bg-gray-100 transition-colors">
          Home
        </Link>

        <Link to="/create" className="bg-white text-[#8C5A66] px-4 py-2 rounded text-center font-medium hover:bg-gray-100 transition-colors">
          Create your Phrase
        </Link>

        <Link to="/about-us" className="bg-white text-[#8C5A66] px-4 py-2 rounded text-center font-medium hover:bg-gray-100 transition-colors">
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

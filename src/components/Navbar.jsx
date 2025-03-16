// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import luxoraLogo from "../assets/images/luxora.png"

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 left-0 z-50 w-full p-3 border shadow-md bg-secClr">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="border border-white">
          <Link to="/">
            <img src={luxoraLogo} alt="PIED LOGO" className="w-auto h-12" />
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button className="md:hidden text-iconClr" onClick={toggleMenu}>
          {menuOpen ? (
            <FontAwesomeIcon icon={faTimes} className="text-lg" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-lg" />
          )}
        </button>

        {/* Navigation Links (Hidden on Small Screens, Visible on Medium+) */}
        <ul
          className={`md:flex md:items-center md:space-x-4 font-btnFF font-semibold absolute md:relative top-full left-0 w-full md:w-auto bg-secClr md:bg-transparent text-sm text-center md:text-left p-3 md:p-0 transition-all duration-300 ease-in-out ${
            menuOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="py-2 md:py-0">
            <Link to="/" className="capitalize text-iconClr">
              Home
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/shop" className="capitalize text-iconClr">
              Shop
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/about" className="capitalize text-iconClr">
              About
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/contact" className="capitalize text-iconClr">
              Contact
            </Link>
          </li>

          {/* Icons for mobile view */}
          <div className="flex justify-center mt-4 space-x-4 md:hidden">
            <button onClick={toggleSearch}>
              <FontAwesomeIcon icon={faSearch} className="text-iconClr" />
            </button>
            <Link to="/account">
              <FontAwesomeIcon icon={faUser} className="text-iconClr" />
            </Link>
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} className="text-iconClr" />
            </Link>
          </div>
        </ul>

        {/* Icons Section for Desktop View */}
        <ul className="hidden space-x-4 md:flex">
          <li>
            <button onClick={toggleSearch}>
              <FontAwesomeIcon icon={faSearch} className="text-iconClr" />
            </button>
          </li>
          <li>
            <Link to="/account">
              <FontAwesomeIcon icon={faUser} className="text-iconClr" />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} className="text-iconClr" />
              <div className='absolute w-4 h-4 text-sm rounded-full right-1 top-5 bg-iconClr text-secClr'> 0 </div>
            </Link>
          </li>
        </ul>
      </div>

      {/* Search Input */}
      {showSearch && (
        <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[400px] bg-white p-2 shadow-md rounded-md z-50">
          <input
            type="text"
            className="w-full p-2 rounded-md focus:outline-none"
            placeholder="Search..."
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

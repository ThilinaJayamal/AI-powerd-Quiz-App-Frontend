import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuthStore();

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed h-20 w-full flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 
    border-b border-gray-300 font-medium z-10 bg-white/80 backdrop-blur-md">

      {/* Logo */}
      <Link to="/" onClick={closeMenu}>
        <h2 className="text-xl font-semibold text-blue-500">
          Quiz<span className="text-purple-500">?Master</span>
        </h2>
      </Link>

      {/* Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-gray-700 focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Desktop Buttons */}
      {user ? (
        <div className="hidden md:flex items-center gap-4">

          {/* Profile */}
          <Link to="/profile">
            <button className="px-6 py-1.5 rounded-full text-gray-800">
              Profile
            </button>
          </Link>

          {/* Dashboard */}
          <Link to="/dashboard">
            <button className="px-6 py-1.5 rounded-full text-white 
            bg-linear-to-tr from-blue-500 to-purple-500
            hover:from-purple-500 hover:to-blue-500 transition duration-500">
              Dashboard
            </button>
          </Link>

          {/* Logout */}
          <button
            onClick={logout}
            className="px-4 py-1.5 border border-gray-400 rounded-full hover:bg-gray-200 transition">
            Logout
          </button>
        </div>
      ) : (
        <Link to="/login" className="hidden md:flex">
          <button className="group flex items-center gap-2">
            Log In
            <svg
              className="group-hover:translate-x-1 transition pt-0.5"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-300 
        md:hidden flex flex-col items-start px-6 py-4 gap-4 z-20">

          <Link to="/" onClick={closeMenu} className="text-gray-700">
            Home
          </Link>

          {user ? (
            <>
              <Link to="/profile" onClick={closeMenu} className="text-gray-700">
                Profile
              </Link>

              <Link to="/dashboard" onClick={closeMenu} className="text-gray-700">
                Dashboard
              </Link>

              <button
                onClick={() => {
                  logout();
                  closeMenu();
                }}
                className="text-left text-gray-700">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" onClick={closeMenu} className="text-gray-700">
              Log In
            </Link>
          )}

        </div>
      )}
    </nav>
  );
}

export default Navbar;

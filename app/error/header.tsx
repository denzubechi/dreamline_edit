import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          My<span className="text-yellow-400">App</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-yellow-400">Home</a>
          <a href="#" className="text-white hover:text-yellow-400">About</a>
          <a href="#" className="text-white hover:text-yellow-400">Services</a>
          <a href="#" className="text-white hover:text-yellow-400">Contact</a>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-yellow-400 focus:outline-none focus:text-yellow-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-500">
            <nav className="flex flex-col text-center space-y-4 py-4">
              <a href="#" className="text-white hover:text-yellow-400">Home</a>
              <a href="#" className="text-white hover:text-yellow-400">About</a>
              <a href="#" className="text-white hover:text-yellow-400">Services</a>
              <a href="#" className="text-white hover:text-yellow-400">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

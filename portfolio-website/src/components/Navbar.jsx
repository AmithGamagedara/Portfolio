import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolling down
      if (window.scrollY > lastScrollY && window.scrollY > 500) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else if (window.scrollY < lastScrollY && window.scrollY > 100) {
        setIsVisible(true); // Show navbar when scrolling up
      }
      // Update the last scroll position
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl p-4 z-10 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 px-8 rounded-4xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg border border-gray-600 bg-clip-padding backdrop-filter">
        {/* Logo Section */}
        <div>
          <div className="text-xl font-semibold text-gray-900 dark:text-white">MyLogo</div>
        </div>

        {/* Navigation Section */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

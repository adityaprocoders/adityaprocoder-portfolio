import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoImg from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home","About", "Projects", "Contact"];

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-950 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 py-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-[#00B4D8]/50 shadow-[0_0_15px_rgba(0,180,216,0.4)]">
              <img
                src={logoImg}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap">
              <span className="text-gray-200">aditya</span>
              <span className="text-[#F7941E]">pro</span>
              <span className="text-[#00B4D8]">coder</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative hover:text-white transition-all duration-300
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-[#00B4D8]
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-[320px]
        bg-[#0D1B36] border-l border-white/10 shadow-2xl z-50
        transform transition-transform duration-300 ease-in-out md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-white text-3xl"
        >
          <FaTimes />
        </button>

        {/* Links */}
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-xl font-medium text-gray-300 hover:text-[#00B4D8] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
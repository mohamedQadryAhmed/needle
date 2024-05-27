import { useEffect } from "react";
import { useState } from "react";
import navLogo from "../assets/images/needle-logo.png";
import { Link } from "react-scroll";

// react icons
import { TbMenu2, TbX } from "react-icons/tb";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const navLinks = [
    { href: "home", label: "الرئيسية" },
    { href: "services", label: "خدماتنا" },
    { href: "products", label: "أعمالنا" },
    { href: "testmonial", label: "أراء عملائنا" },
    { href: "contact", label: "تواصل معنا" },
  ];
  return (
    <header className="w-full bg-white md:bg-transparent  fixed top-0 left-0 right-0">
      <nav className={`py-1  lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
        <div className="flex justify-between items-center text-base gap-18">
          <a href="/" className="pl-4 w-28">
            <img src={navLogo} alt="Logo"/>
          </a>
          {/* Navbar Items for large devices  */}
          <ul className="md:flex gap-14 hidden">
            {navLinks.map(({ href, label }) => (
              <Link
                to={href}
                spy={true}
                smooth={true}
                offset={-100}
                key={href}
                className="block text-secondary-txt font-messiri font-medium py-4 text-xl hover:text-primary-700 cursor-pointer"
              >
                {label}
              </Link>
            ))}
          </ul>
          <div className="md:hidden">
            <button
            onClick={toggleMenu}
            className="text-secondary-txt focus:outline-none focus:text-gray-600">
              {isMenuOpen ? (
                <TbX className="h-8 w-8 text-secondary-txt text-lg" />
              ) : (
                <TbMenu2 className="h-8 w-8 text-secondary-txt text-lg" />
              )}
            </button>
          </div>
        </div>

        {/* Navbar Items for mobile devices  */}
        <div className={`md:hidden space-y-4 px-8 mt-16 mr-4 ml-4 rounded-md transition-all ease-in duration-300 bg-primary-600 ${isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"}`}>
          
            {navLinks.map(({ href, label }) => (
              <Link
                to={href}
                spy={true}
                smooth={true}
                offset={-100}
                key={href}
                className="block pr-4 text-white font-messiri font-medium py-4 text-xl transition-all ease-in hover:pr-2  cursor-pointer"
              >
                {label}
              </Link>
            ))}
          

        </div>
      </nav>

    </header>
  );
};

export default Navbar;

import logo from "../assets/images/needle-logo.png"
import hamburger from "../assets/icons/hamburger.svg"

const Nav = () => {
  const navLinks = [
    { href: "#home", name: "الرئيسية" },
    { href: "#about-us", name: "من نحن" },
    { href: "#products", name: "منتجاتنا" },
    { href: "#contact-us", name: "تواصل معنا" },
  ];

  return (
    <header className="padding-x py-3 absolute z-10 w-full shadow-lg bg-bgray">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={logo}  height={110} width={110}/>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-20 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-cairo leading-normal text-xl font-medium text-slate-700 focus:text-[#155177]"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div>
                    <img 
                    src={hamburger} 
                    alt="Icon" 
                    width={25}
                    height={25}
                    className="hidden max-lg:block"/>
                </div>
      </nav>
    </header>
  );
};

export default Nav;

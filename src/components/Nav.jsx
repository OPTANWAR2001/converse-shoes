import { headerLogo } from "../assets/images/index.js";
import { hamburger } from "../assets/icons/index.js";

import { navLinks } from "../assets/data/index.js";

const Nav = () => {
  return (
    <header className="padding-x py-6 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Brand Logo" width={200} height={10} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-28 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-500 hover:text-slate-900"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block mx-10">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "../../assets/images/logo.png";
import rightarrow from "../../assets/icons/rightarrow.png";

import Button from "../ui/Button";
import ModeButton from "../ui/ModeButton";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menus = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Test Series",
      path: "/test-series",
    },
    {
      name: "Quiz",
      path: "/quiz",
    },
    {
      name: "Academy",
      path: "/academy",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav>
      {/* Top Navbar */}
      <div className="rounded-full border border-black/10 bg-[#FFFFFFE5] dark:bg-[#0A1827]">
        <div className="flex items-center justify-between p-2 sm:p-3 lg:px-4 lg:py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full dark:bg-white sm:h-[46px] sm:w-[46px]">
                <img
                  src={logo}
                  alt="Chartered Studies"
                  className="h-8 w-9 object-contain sm:h-[41px] sm:w-[46px]"
                />
              </div>
            </Link>

            <p className="font-inter text-[15px] font-bold text-[#06B6D4] min-[375px]:text-[17px] sm:text-[23px]">
              Chartered
              <span className="text-[#111111] dark:text-white"> Studies</span>
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 lg:flex">
            {menus.map((menu) => (
              <NavLink
                key={menu.path}
                to={menu.path}
                className={({ isActive }) =>
                  `font-inter text-[14px] font-semibold text-nowrap transition-colors ${
                    isActive
                      ? "text-[#06B6D4]"
                      : "text-[#616161] hover:text-[#06B6D4] dark:text-slate-300 dark:hover:text-[#06B6D4]"
                  }`
                }
              >
                {menu.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <ModeButton />

            <Link to="/login">
              <Button className="flex items-center gap-2 px-5 py-3 text-[11px] font-semibold whitespace-nowrap">
                Login / Register
                <img
                  src={rightarrow}
                  alt=""
                  className="h-[14px] w-[14px] -rotate-45 object-contain"
                />
              </Button>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <ModeButton />

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#06B6D4] text-white sm:h-[50px] sm:w-[50px]"
            >
              {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
          isMenuOpen
            ? "mt-2 max-h-[500px] translate-y-0 px-4 opacity-100"
            : "max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-3 rounded-[20px] bg-white py-5 dark:bg-[#171F31]">
          {/* Mobile Navigation Links */}
          {menus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `font-inter text-[18px] font-semibold transition-colors ${
                  isActive
                    ? "text-[#06B6D4]"
                    : "text-[#616161] hover:text-[#06B6D4] dark:text-slate-300 dark:hover:text-[#06B6D4]"
                }`
              }
            >
              {menu.name}
            </NavLink>
          ))}

          {/* Mobile Login */}
          <Link
            to="/login"
            onClick={() => setIsMenuOpen(false)}
            className="font-inter text-[18px] font-semibold text-[#616161] transition-colors hover:text-[#06B6D4] dark:text-slate-300 dark:hover:text-[#06B6D4]"
          >
            Login
          </Link>

          {/* Mobile Register */}
          <Link
            to="/register"
            onClick={() => setIsMenuOpen(false)}
            className="font-inter text-[18px] font-semibold text-[#616161] transition-colors hover:text-[#06B6D4] dark:text-slate-300 dark:hover:text-[#06B6D4]"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

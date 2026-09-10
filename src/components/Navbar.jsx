import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import rightarrow from "../assets/rightarrow.png";
import Button from "./Button";

function Navbar() {
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
    <nav className="bg-[#FFFFFFE5] rounded-full border border-black/10">
      <div className="flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Chartered Studies"
            className="h-[41px] w-[46px]"
          />

          <p className="text-[#06B6D4] font-bold text-[23px]">
            Chartered <span className="text-[#111111]">Studies</span>
          </p>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-8">
          {menus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `font-semibold text-[14px] transition ${
                  isActive
                    ? "text-[#06B6D4]"
                    : "text-[#616161] hover:text-[#06B6D4]"
                }`
              }
            >
              {menu.name}
            </NavLink>
          ))}
        </div>

        {/* Login */}
        <Button
          className="
            h-[46px]
            px-[18px]
            bg-[#06B6D4]
            text-white
            rounded-full
            flex
            items-center
            gap-[8px]
            text-[11px]
            font-semibold
            whitespace-nowrap
          "
        >
          Login / Register
          <img
            src={rightarrow}
            alt=""
            className="w-[14px] h-[14px] object-contain -rotate-45"
          />
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;

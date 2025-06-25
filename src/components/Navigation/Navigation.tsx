import { navigationLinks } from "../../utils/content";
import BellIcon from "../Icons/BellIcon";
import CaretUp from "../Icons/CaretUp";
import LogoIcon from "../Icons/LogoIcon";
import SearchIcon from "../Icons/SearchIcon";
import DesktopDropdown from "./DesktopDropdown";

function Navigation() {
  return (
    <nav className="mx-auto mb-12 max-w-432">
      <div className="flex items-center justify-between px-21.5">
        {/* LOGO */}
        <a
          className="flex items-center gap-x-2.5 text-3xl font-semibold"
          href="/"
        >
          <LogoIcon className="size-13" />
          <span>GoTravel</span>
        </a>

        {/* MENU */}
        <ul className="flex items-stretch gap-x-10">
          {navigationLinks.map((link) => (
            <li
              key={link.id}
              className="group relative flex cursor-pointer items-center gap-x-[7px] py-3 font-medium transition-all duration-200"
            >
              <a
                className="text-gray-600 group-hover:text-black"
                href={link.href}
              >
                {link.text}
              </a>
              {/* if there is a dropdown, render arrow */}
              {link.dropdown && (
                <span className="flex size-6 items-center justify-center">
                  <CaretUp className="size-3.5 rotate-180 fill-gray-600 transition-all duration-250 group-hover:rotate-360 group-hover:fill-gray-900" />
                </span>
              )}
              {/* if there is a dropdown, render it */}
              {link.dropdown && <DesktopDropdown links={link.dropdownLinks} />}
            </li>
          ))}
        </ul>

        {/* BUTTON */}
        <div className="flex items-center gap-x-5">
          <BellIcon className="cursor-pointer fill-gray-600 hover:fill-black" />
          <SearchIcon className="cursor-pointer fill-gray-600 hover:fill-black" />
          <button className="bg-primary-700 hover:bg-primary-800 cursor-pointer rounded-[0.625rem] px-8 py-3.5 text-lg font-medium text-white transition-all duration-200">
            join now
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

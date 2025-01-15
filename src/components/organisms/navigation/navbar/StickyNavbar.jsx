import { FaPowerOff } from "react-icons/fa";
import NavbarTitle from "@organisms/navigation/navbar/NavbarTitle";
import ToggleMenu from "@molecules/toggle/ToggleMenu";
import ToggleDarkMode from "@molecules/toggle/ToggleDarkMode";
import Dropdown from "@molecules/dropdown/Dropdown";

function StickyNavbar() {
  return (
    <div
      className={`sticky top-0 flex h-16 justify-center bg-base-100 bg-opacity-50 text-base-content backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] lg:z-30`}
    >
      {" "}
      {/* add shadow-sm utility class when scroll */}
      <nav className="navbar w-full">
        <div className="flex-1 items-center">
          <ToggleMenu />

          <NavbarTitle showTitle="lg:hidden" title="daisyUI" version="1.0.0" />
        </div>
        {/* <ToggleDarkMode /> */}
        <div className="flex-none gap-5">
          <Dropdown type="dropdown-end">
            <Dropdown.Button style="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="username"
                  src="https://ui-avatars.com/api/?name=John+Doe&background=random"
                />
              </div>
            </Dropdown.Button>
            <Dropdown.Menu style="mt-3 mr-2">
              <Dropdown.Item>
                <span>
                  <FaPowerOff className="text-red-500" />
                  Logout
                </span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </div>
  );
}

export default StickyNavbar;

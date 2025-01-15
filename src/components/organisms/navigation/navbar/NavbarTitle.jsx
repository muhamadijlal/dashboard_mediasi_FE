import { MdManageHistory } from "react-icons/md";
import Dropdown from "@molecules/dropdown/Dropdown";

function NavbarTitle({ title, version, showTitle = "hidden" }) {
  return (
    <div className={`${showTitle}`}>
      <a className="btn btn-ghost text-xl font-extrabold">{title}</a>
      {version}
      {/* <Dropdown>
                <Dropdown.Button style="link link-hover inline-block text-xs tracking-widest">
                    {version}
                </Dropdown.Button>
                <Dropdown.Menu style="-ml-5">
                    <Dropdown.Item>
                        <span className="text-md">
                            <MdManageHistory className="text-xl" />
                            Changelog
                        </span>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> */}
    </div>
  );
}

export default NavbarTitle;

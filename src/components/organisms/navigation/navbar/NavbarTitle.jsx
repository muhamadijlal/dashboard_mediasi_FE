import { MdManageHistory } from "react-icons/md";
import Dropdown from "@molecules/dropdown/Dropdown";

function NavbarTitle({ showTitle = "hidden" }) {
  return (
    <div className={`${showTitle}`}>
      <a className="btn btn-ghost text-xl font-extrabold">{env.APP_NAME}</a>
      {`${env.APP_VERSION} ${env.APP_ENV.toUpperCase() === "PROD" ? "" : `(${env.APP_ENV})`}`}
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

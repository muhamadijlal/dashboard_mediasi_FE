import Sidebar from "@organisms/navigation/Sidebar";
import StickyNavbar from "@organisms/navigation/navbar/StickyNavbar";
import { Outlet } from "react-router-dom";

function Layouts() {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <Layouts.Content>
          <StickyNavbar />
          <Outlet />
        </Layouts.Content>
        <Sidebar />
      </div>
    </>
  );
}

function Content({ children }) {
  return (
    <div className="drawer-content">
      <div className="pb-16">{children}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
}

Layouts.Content = Content;
Layouts.Footer = Footer;

export default Layouts;

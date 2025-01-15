function Layouts({ children }) {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        {children}
      </div>
    </>
  );
}

function Content({ children }) {
  return (
    <>
      <div className="drawer-content">
        <div className="pb-16">{children}</div>
      </div>
    </>
  );
}

function Footer() {
  return (
    // footer footer-center bg-base-300 text-base-content p-4 w-full
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

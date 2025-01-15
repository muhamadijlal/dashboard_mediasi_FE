function Dropdown({ children, type }) {
  return <div className={`dropdown ${type}`}>{children}</div>;
}

function Button({ children, style }) {
  return (
    <div tabIndex={0} role="button" className={`${style}`}>
      {children}
    </div>
  );
}

function Menu({ children, style }) {
  return (
    <ul
      tabIndex={0}
      className={`menu dropdown-content menu-sm rounded-lg border border-white/5 bg-base-100 p-1 shadow-2xl outline outline-1 outline-black/5 ${style}`}
    >
      {children}
    </ul>
  );
}

function Item({ children }) {
  return <li>{children}</li>;
}

Dropdown.Menu = Menu;
Dropdown.Item = Item;
Dropdown.Button = Button;

export default Dropdown;

import { TfiMenu } from "react-icons/tfi";

function ToggleMenu() {
  return (
    <label
      className="btn btn-ghost lg:hidden"
      htmlFor="my-drawer"
      aria-label="close sidebar"
    >
      <TfiMenu className="text-2xl" />
    </label>
  );
}

export default ToggleMenu;

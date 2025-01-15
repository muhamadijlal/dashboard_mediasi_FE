import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

function ToggleDarkMode() {
  return (
    <label className="btn btn-ghost swap swap-rotate mr-2">
      <input type="checkbox" />
      <MdSunny className="swap-off size-6 fill-current" />

      <BsFillMoonStarsFill className="swap-on size-6 fill-current" />
    </label>
  );
}

export default ToggleDarkMode;

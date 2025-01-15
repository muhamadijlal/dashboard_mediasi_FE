import NavButton from "@molecules/pagination/NavButton";
import NavPage from "@molecules/pagination/NavPage";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

function Pagination() {
  return (
    <div className="mt-10 flex justify-end">
      <div className="join">
        <NavButton Icon={MdOutlineKeyboardDoubleArrowLeft} />
        <NavPage />
        <NavButton Icon={MdOutlineKeyboardDoubleArrowRight} />
      </div>
    </div>
  );
}

export default Pagination;

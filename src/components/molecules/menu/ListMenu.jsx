import { Link } from "react-router-dom";

function ListMenu({ name, Icon, color, isActive = false, link }) {
  const getColorVariants = (color) => {
    const colorVariants = {
      blue: {
        icon: "group-hover:bg-blue-200 group-hover:text-blue-500 bg-base-100",
        active: "bg-blue-200 text-blue-500",
        bg: "bg-blue-400",
      },
      purple: {
        icon: "group-hover:bg-purple-200 group-hover:text-purple-500 bg-base-100",
        active: "bg-purple-200 text-purple-500",
        bg: "bg-purple-400",
      },
      green: {
        icon: "group-hover:bg-green-200 group-hover:text-green-500 bg-base-100",
        active: "bg-green-200 text-green-500",
        bg: "bg-green-400",
      },
      orange: {
        icon: "group-hover:bg-orange-200 group-hover:text-orange-500 bg-base-100",
        active: "bg-orange-200 text-orange-500",
        bg: "bg-orange-400",
      },
    };

    return colorVariants[color] || colorVariants.blue; // Default to blue if color is invalid
  };

  const { icon, active, bg } = getColorVariants(color);

  return (
    <Link to={link}>
      <li className={`list-menu ${isActive ? bg : "group hover:bg-base-300"}`}>
        <Icon className={`icon ${isActive ? active : icon}`} />
        <p className={`font-medium ${isActive ? "text-white" : ""}`}>{name}</p>
      </li>
    </Link>
  );
}

export default ListMenu;

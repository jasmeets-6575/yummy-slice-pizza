import { NavLink } from "react-router-dom";
import { navbarLinks } from "../../utils/navbarLinks";

const ItemLinks = () => {
  return (
    <div className=" bg-gray-100 shadow-lg h-auto flex justify-center items-center">
      <div className="w-[95vw] p-1 flex justify-around items-center ">
        {navbarLinks.map((link) => {
          const { id, path, text } = link;
          return (
            <div
              key={id}
              className=" text-gray-600 text-sm tracking-widest cursor-pointer hover:scale-110 "
            >
              <span>{text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ItemLinks;

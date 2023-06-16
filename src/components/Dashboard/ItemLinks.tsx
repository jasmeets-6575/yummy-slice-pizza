import { navbarLinks } from "../../utils/navbarLinks";
import { useAppSelector } from "../../store/store";

const ItemLinks = () => {
  const { isDarkMode } = useAppSelector((store) => store.toggle);
  return (
    <div
      className={`${
        isDarkMode
          ? " bg-gray-600 text-gray-100 "
          : " text-gray-600 bg-gray-100"
      } shadow-lg h-auto flex justify-center items-center`}
    >
      <div className="w-[95vw] p-1 flex justify-around items-center ">
        {navbarLinks.map((link) => {
          const { id, path, text } = link;
          return (
            <div
              key={id}
              className=" text-sm tracking-widest cursor-pointer hover:scale-110 "
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

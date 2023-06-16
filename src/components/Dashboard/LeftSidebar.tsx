import { data } from "../../utils/leftSidebarData";
import { useAppSelector } from "../../store/store";

const LeftSidebar = () => {
  const { isSidebarOpen, isDarkMode } = useAppSelector((store) => store.toggle);
  return (
    <div
      className={`duration-500 shadow-lg fixed z-40 ${
        isSidebarOpen ? "left-0" : "left-[-20%]"
      } ${
        isDarkMode
          ? " bg-gray-600 text-gray-100 "
          : " text-gray-600 bg-gray-100"
      } flex flex-col gap-2 w-[20%] h-[92vh] `}
    >
      {data.map((item) => {
        const { id, text, logo } = item;
        return (
          <div
            key={id}
            className="flex gap-5 tracking-widest rounded-md items-center my-2 mx-6 p-2"
          >
            <h2 className="text-lg">{logo}</h2>
            <h2>{text}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default LeftSidebar;

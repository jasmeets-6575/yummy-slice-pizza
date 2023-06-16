import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../store/store";
import { toggleDarkMode } from "../features/toggleSidebar/toggleSidebar";

const DarkMode = () => {
  const { isDarkMode } = useAppSelector((store) => store.toggle);
  const dispatch = useAppDispatch();
  return (
    <div className="flex mx-3">
      <div className="text-white flex justify-center gap-[6px] items-center">
        {isDarkMode ? (
          <BsFillMoonFill className="text-xl" />
        ) : (
          <BsFillSunFill className="text-2xl" />
        )}
        <div
          className={`w-10 h-6 bg-white rounded-full flex items-center relative cursor-pointer`}
          onClick={() => dispatch(toggleDarkMode())}
        >
          <div
            className={` w-1/2 h-5 absolute ${
              isDarkMode ? "right-0" : "left-0"
            } bg-[--primary-blue] mx-[2px] rounded-full `}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default DarkMode;

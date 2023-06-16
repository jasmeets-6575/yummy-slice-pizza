import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useAppSelector } from "../store/store";

const DarkMode = () => {
  const { isDarkMode } = useAppSelector((store) => store.toggle);
  return (
    <div className="flex">
      <div className="text-white flex justify-center gap-[6px] items-center">
        {isDarkMode ? (
          <BsFillSunFill className="text-2xl" />
        ) : (
          <BsFillMoonFill className="text-xl" />
        )}
        <div className="w-10 h-6 bg-white rounded-full flex items-center cursor-pointer" >
          <div className="w-1/2 bg-[--primary-blue] h-[85%] ml-[2px] block rounded-full "></div>
        </div>
      </div>
    </div>
  );
};
export default DarkMode;

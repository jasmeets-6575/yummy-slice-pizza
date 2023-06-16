import CartSection from "./Cart-section";
import Main from "./Main";
import { useAppSelector } from "../../store/store";

const DashboardMain = () => {
  const { isDarkMode } = useAppSelector((store) => store.toggle);
  return (
    <div
      className={` ${isDarkMode ? "bg-gray-500" : null} flex  justify-center `}
    >
      <div className={`min-h-screen  w-full mx-16 my-8 flex `}>
        <div className="w-[75%]">
          <Main />
        </div>
        <div className="w-[25%]">
          <CartSection />
        </div>
      </div>
    </div>
  );
};
export default DashboardMain;

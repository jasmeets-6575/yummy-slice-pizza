import { IoMdLocate } from "react-icons/io";
import AddressList from "../../assets/address-list.png";
import { useAppSelector } from "../../store/store";

const RightSidebar = () => {
  const { isRightSidebarOpen, isDarkMode } = useAppSelector(
    (store) => store.toggle
  );
  return (
    <div
      className={` duration-500 fixed ${
        isRightSidebarOpen ? "right-0" : "right-[-30%]"
      } shadow-lg z-10 w-[30%] ${
        isDarkMode ? " bg-gray-700 " : "bg-gray-100"
      }  h-[92vh]`}
    >
      <div className="h-[90%] flex flex-col items-center justify-around  m-6">
        <div
          className={`h-auto w-full flex flex-col ${
            isDarkMode ? " text-white " : "text-gray-600 "
          } gap-3 justify-center items-start `}
        >
          <h2 className="text-3xl tracking-widest">Order Online</h2>
          <div
            className={` ${
              isDarkMode ? " text-white " : "text-[--primary-blue-2]"
            } text-md py-2 flex justify-around items-center gap-8 text-sm`}
          >
            <div className="flex justify-center items-center ">
              <input type="radio" name="A" id="" checked />
              <label className="mx-2" htmlFor="">
                Delivery
              </label>
            </div>
            <div className="flex justify-center items-center ">
              <input type="radio" name="A" id="" />
              <label className="mx-2" htmlFor="">
                Dine-In
              </label>
            </div>
          </div>
          <h2 className="tracking-wide">We will deliver right to your door</h2>
        </div>

        {/* inputs  */}
        <div className="w-full border-none shadow-md shadow-200 rounded-md flex justify-center items-center p-1 ">
          <div className="w-[95%] h-[90%] flex">
            <input
              className="w-[65%] outline-none px-2 py-1 rounded-lg border-none"
              type="text"
              placeholder="Enter Area / Locality"
            />
            <div className="text-white rounded-md bg-green-600 w-[35%] py-2 px-1 flex justify-center items-center gap-1">
              <IoMdLocate className="text-xl" />
              <button className="tracking-wider " type="submit">
                Locate Me
              </button>
            </div>
          </div>
        </div>

        {/* My address*/}
        <img className="w-[50%]" src={AddressList} alt="" />
        <button className="text-green-600 text-md font-bold border-2 px-2 py-1 border-green-600 tracking-widest">
          MY ADDRESS
        </button>
        <p
          className={`w-[70%] text-center ${
            isDarkMode ? "text-white" : "text-[--primary-blue]"
          } text-sm`}
        >
          Please select location, so that we can find a restaurant that delivers
          to you!
        </p>
      </div>
    </div>
  );
};
export default RightSidebar;

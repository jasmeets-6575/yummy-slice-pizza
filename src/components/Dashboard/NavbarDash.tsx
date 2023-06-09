import { BiUserCircle } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import Logo from "../Logo";
import { useAppDispatch } from "../../store/store";
import {
  toggleSidebar,
  toggleRightSidebar,
  toggleLoginSidebar,
  closeSidebar,
  closeRightSidebar,
  closeLoginSidebar,
} from "../../features/toggleSidebar/toggleSidebar";

const NavbarDash = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="h-auto py-3 w-full flex bg-[--primary-blue]">
      <div className="w-[95vw] mx-auto flex justify-between ">
        <div className="flex justify-around items-center gap-7">
          <FaBars
            onClick={() => {
              dispatch(closeRightSidebar());
              dispatch(closeLoginSidebar());
              dispatch(toggleSidebar());
            }}
            className="text-2xl text-white cursor-pointer hover:text-3xl"
          />
          <Logo />
        </div>
        <div className="w-[30%] border-l border-white flex justify-center ">
          <div
            className="w-[90%] lg:w-[50%] text-[1rem] py-2 flex justify-around mx-auto text-white "
            onClick={() => {
              dispatch(closeSidebar());
              dispatch(closeLoginSidebar());
              dispatch(toggleRightSidebar());
            }}
          >
            <div className="flex justify-center items-center cursor-pointer ">
              <h2 className="mx-1 cursor-pointer">Delivery</h2>
            </div>
            <div className="flex justify-center items-center cursor-pointer">
              <h2 className="mx-1 cursor-pointer">Dine-In</h2>
            </div>
          </div>

          <div className=" flex justify-end items-center mx-2 border-secondary-500 cursor-pointer">
            <BiUserCircle className=" text-3xl md:text-4xl text-white" />
            <div
              className=" text-white ml-2 text-xs md:text-sm "
              onClick={() => {
                dispatch(closeRightSidebar());
                dispatch(closeSidebar());
                dispatch(toggleLoginSidebar());
              }}
            >
              <h3>MY ACCOUNT</h3>
              <h3>Log In / Sign Up</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavbarDash;

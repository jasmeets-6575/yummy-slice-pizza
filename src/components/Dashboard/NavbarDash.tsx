import { FaBars } from "react-icons/fa";
import Logo from "../Logo";
import { useAppDispatch } from "../../store/store";
import {
  toggleSidebar,
  toggleRightSidebar,
  closeSidebar,
  closeRightSidebar,
  closeLoginSidebar,
} from "../../features/toggleSidebar/toggleSidebar";
import SignUp from "./SignUp";

const NavbarDash = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="h-auto py-3 w-full flex bg-[--primary-blue]">
      <div className="w-[95vw] mx-auto flex justify-between ">
        <div className="flex justify-around  items-center gap-5">
          <FaBars
            onClick={() => {
              dispatch(closeRightSidebar());
              dispatch(closeLoginSidebar());
              dispatch(toggleSidebar());
            }}
            className="text-2xl text-white cursor-pointer hover:scale-125"
          />
          <Logo />
        </div>
        <div className="w-[30%] border-l border-white flex justify-center items-center ">
          <div
            className="w-[90%] lg:w-[50%] text-[1rem] py-1 flex justify-around mx-auto text-white "
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
          <SignUp />
        </div>
      </div>
    </div>
  );
};
export default NavbarDash;

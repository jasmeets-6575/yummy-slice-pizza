import { BiUserCircle } from "react-icons/bi";
import Logo from "./Logo";
import { toggleSidebar } from "../features/toggleSidebar/toggleSidebar";
import { useAppDispatch } from "../store/store";

const NavbarMain: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="h-auto py-3 w-full flex bg-[--primary-blue]">
      <div className="w-[1240px] mx-auto flex justify-between ">
        <Logo />
        <div className=" flex justify-end items-center mx-2 border-secondary-500 cursor-pointer">
          <BiUserCircle className=" text-3xl md:text-4xl text-white" />
          <div
            className=" text-white ml-2 text-xs md:text-sm "
            onClick={() => dispatch(toggleSidebar())}
          >
            <h3>MY ACCOUNT</h3>
            <h3>Log In / Sign Up</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavbarMain;

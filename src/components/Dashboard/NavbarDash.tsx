import { BiUserCircle } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import Logo from "../Logo";
import Delivery from "../Delivery";

const NavbarDash = () => {
  return (
    <div className="h-auto py-3 w-full flex bg-[--primary-blue]">
      <div className="w-[95vw] mx-auto flex justify-between ">
        <div className="flex justify-around items-center gap-7">
          <FaBars className="text-2xl text-white"/>
          <Logo />
        </div>
        <div className="w-[30%]  border-l border-white flex justify-center ">
          <div className="w-[90%] lg:w-[50%] text-[1rem] py-2 flex justify-around mx-auto text-white">
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
          <div className=" flex justify-end items-center mx-2 border-secondary-500 cursor-pointer">
            <BiUserCircle className=" text-3xl md:text-4xl text-white" />
            <div className=" text-white ml-2 text-xs md:text-sm ">
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

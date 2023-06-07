import { BiUserCircle } from "react-icons/bi";

const NavbarMain = () => {
  return (
    <div className="h-auto py-3 w-full flex bg-[--primary-blue]">
      <div className="w-[1240px] mx-auto flex justify-between ">
        <div className="font-bold text-2xl mx-2 text-white cursor-pointer">
          Yummy Slice Pizza
        </div>
        <div className=" flex justify-end mx-2  border-secondary-500 cursor-pointer">
          <BiUserCircle className=" text-3xl md:text-4xl text-white" />
          <div className=" text-white ml-2 ">
            <h3 className="text-xs md:text-sm">MY ACCOUNT</h3>
            <h3 className="text-xs md:text-sm">Log In / Sign Up</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavbarMain;

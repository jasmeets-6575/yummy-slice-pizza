import { BiUserCircle } from "react-icons/bi";

const NavbarMain = () => {
  return (
    <div className="h-auto py-3 px-20 flex justify-between bg-[--primary-blue]">
      <div className="font-bold text-2xl text-white">Yummy Slice Pizza</div>
      <div className="w-1/4 flex justify-end px-4 border-l-2 border-secondary-500 cursor-pointer">
        <BiUserCircle className="text-4xl text-white" />
        <div className=" text-white ">
          <h3>MY ACCOUNT</h3>
          <h3>Log In / Sign Up</h3>
        </div>
      </div>
    </div>
  );
};
export default NavbarMain;

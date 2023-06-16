import { BiUserCircle } from "react-icons/bi";
import { toggleLoginSidebar } from "../../features/toggleSidebar/toggleSidebar";
import { useAppDispatch } from "../../store/store";
import DarkMode from "../DarkMode";
const SignUp = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="border border-red-500 flex justify-center items-center">
      <DarkMode />
      <div className="h-full flex justify-end items-center mx-2 cursor-pointer">
        <BiUserCircle className=" text-3xl md:text-4xl text-white" />
        <div
          className=" text-white ml-2 text-xs md:text-sm "
          onClick={() => dispatch(toggleLoginSidebar())}
        >
          <h3>MY ACCOUNT</h3>
          <h3>Log In / Sign Up</h3>
        </div>
      </div>
    </div>
  );
};
export default SignUp;

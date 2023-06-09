import { GiFullPizza } from "react-icons/gi";
import { BsPersonHeart } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { useAppSelector } from "../store/store";

const Login: React.FC = () => {
  const { isLoginSidebarOpen } = useAppSelector((store) => store.toggle);
  return (
    <div
      className={` duration-500 w-[30%] h-[90vh] bg-gray-100 fixed ${
        isLoginSidebarOpen ? "right-0" : "right-[-30%]"
      } z-10 `}
    >
      <div className="h-[90%] m-2 md:m-4 xl:m-8 xl:p-4 flex flex-col justify-around">
        <h2 className="w-auto font-extrabold text-2xl lg:text-3xl mx-2 text-[--primary-blue]  tracking-widest cursor-pointer text-center">
          Yummy Slice Pizza
        </h2>
        <p className="text-gray-800 text-center text-lg">
          <span className="font-semibold tracking-wider">Login</span> to unlock
          awesome new features
        </p>

        {/* services */}
        <div className=" lg:flex justify-around">
          <div className="flex items-center gap-2 ">
            <GiFullPizza className="text-[--primary-blue-2] text-xl lg:text-2xl" />
            <p className=" text-md lg:text-lg text-gray-700">Great Food</p>
          </div>
          <div className="flex items-center gap-2 ">
            <BsPersonHeart className="text-[--primary-blue-2] text-xl lg:text-2xl " />
            <p className="text-md lg:text-lg text-gray-700">Great Service</p>
          </div>
        </div>

        {/* Information */}
        <div className="h-[30%] p-2 lg:p-3 bg-white  shadow-lg rounded-md flex flex-col justify-center">
          <p className="text-gray-800 pt-2 text-xs font-semibold  tracking-wider">
            Login with your valid mobile number
          </p>
          <h2 className="hidden lg:block lg:w-fit bg-white relative z-10 top-[14px] left-12 text-gray-600 px-1 text-xs tracking-wider">
            Mobile Number
          </h2>
          <div className="flex pt-2">
            <h2 className="text-gray-600 p-2 border border-gray-300 text-sm tracking-wider">
              +91
            </h2>
            <input
              className="w-[90%]  pt-1 px-3 border-t border-r border-b border-gray-300 placeholder:text-xs"
              type="text"
            />
          </div>
          <div className="flex justify-end pt-2">
            <button
              className="bg-gray-400 py-1 lg:py-2 rounded-md  px-6 text-xs tracking-wider text-white font-semibold"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <h2 className="text-[--primary-blue-2] tracking-widest">OR</h2>
        </div>

        {/* Social links */}
        <div className="bg-white pb-2  shadow-lg rounded-md flex flex-col justify-center">
          <p className="text-gray-700 p-3 text-xs font-semibold tracking-wider">
            Login with social accounts
          </p>
          <div>
            <div className=" flex max-md:flex-col max-md:items-center gap-2 md:justify-evenly ">
              <div className="w-[45%] rounded-lg cursor-pointer py-1 px-2 md:py-2 md:px-3 flex justify-center items-center bg-blue-800 text-white">
                <FaFacebookF className="hidden lg:block " />
                <h2 className="mx-1 text-xs md:text-sm">FACEBOOK</h2>
              </div>
              <div className="w-[45%] rounded-md cursor-pointer py-1 px-2 md:py-2 md:px-3 flex justify-center items-center bg-red-500 text-white">
                <AiOutlineGoogle className="hidden lg:block text-xl " />
                <h2 className="md:mx-1 text-xs md:text-sm">GOOGLE</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Ending */}
        <p className="text-[--primary-blue-2] cursor-pointer text-xs tracking-wider text-center">
          TERMS OF USE
        </p>
      </div>
    </div>
  );
};

export default Login;

import { GiFullPizza } from "react-icons/gi";
import { BsPersonHeart } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";

const Login = () => {
  return (
    <div className="w-[30%] border border-red-500 h-[90vh] bg-gray-100  absolute right-0 z-10 ">
      <div className="h-[90%] m-8 p-4 border border-blue-400 flex flex-col justify-around">
        <h2 className="font-extrabold text-2xl mx-2 text-[--primary-blue] tracking-widest cursor-pointer text-center">
          Yummy Slice Pizza
        </h2>
        <p className="text-gray-800 text-center text-lg">
          <span className="font-semibold">Login</span> to unlock awesome new
          features
        </p>
        <div className="flex justify-around">
          <div className="grid grid-cols-3 items-center">
            <GiFullPizza  className="text-[--primary-blue-2] text-2xl"/>
            <p className="col-span-2 text-lg text-gray-700">Great Food</p>
          </div>
          <div className="grid grid-cols-3 items-center">
            <BsPersonHeart className="text-[--primary-blue-2] text-2xl"/>
            <p className="col-span-2 text-lg text-gray-700">Great Service</p>
          </div>
        </div>
        <div className="h-[30%] p-3 bg-white ">
          <p className="text-gray-800 pt-2 text-xs font-semibold  tracking-wider">
            Login with your valid mobile number
          </p>
          <h2 className="inline-block bg-white relative z-10 top-[14px] left-12 text-gray-600 px-1 text-xs tracking-wider">
            Mobile Number
          </h2>
          <div className="flex pt-2">
            <h2 className="text-gray-600 p-2 border border-gray-300 text-sm tracking-wider">
              +91
            </h2>
            <input
              className="w-[90%]  pt-1 px-3 border border-gray-300 placeholder:text-xs"
              type="text"
            />
          </div>
          <div className="flex justify-end pt-2">
            <button
              className="bg-gray-400 py-2 rounded-md  px-6 text-xs tracking-wider text-white font-semibold"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </div>
        <div className="bg-white my-2">
          <p className="text-gray-700 p-3 text-xs font-semibold tracking-wider">
            Login with social accounts
          </p>
          <div>
            <div className="w-[90%] flex justify-around ">
              <div className="w-[45%] rounded-lg py-2 px-3 flex justify-center items-center bg-blue-800 text-white">
                <FaFacebookF className="" />
                <h2 className="mx-1 text-sm">FACEBOOK</h2>
              </div>
              <div className="w-[45%] rounded-md py-2 px-3 flex justify-center items-center bg-red-500 text-white">
                <AiOutlineGoogle className="text-xl " />
                <h2 className="mx-1 text-sm">GOOGLE</h2>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[--primary-blue-2] cursor-pointer text-xs tracking-wider text-center">
          TERMS OF USE
        </p>
      </div>
    </div>
  );
};
export default Login;

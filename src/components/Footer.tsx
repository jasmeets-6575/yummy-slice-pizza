import { IoMdAppstore } from "react-icons/io";
import { AiFillApple } from "react-icons/ai";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-auto p-7 bg-gray-700 grid grid-cols-2 md:grid-cols-3 ">
        <div className="md:col-span-2">
          <Logo />
          <ul className="text-gray-400 cursor-pointer md:flex">
            <li className="m-2 ">Disclaimer</li>
            <li className=" m-2">Privacy Policy</li>
            <li className=" m-2">Faq</li>
            <li className=" m-2">Terms & Conditions</li>
            <li className=" m-2">Feedback</li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h2 className="text-gray-300 text-xl font-medium">
            DOWNLOAD APP NOW
          </h2>
          <div className="text-white pt-4 grid gap-3 lg:flex ">
            <div className="w-[8.5rem] bg-black border rounded-md flex items-center cursor-pointer ">
              <IoMdAppstore className="text-3xl " />
              <div className="px-1">
                <h4 className="text-[10px]  text-center">GET IT ON</h4>
                <h2 className="text-sm font-bold">GOOGLE PLAY </h2>
              </div>
            </div>
            <div className="w-[8.5rem] bg-black border rounded-md flex items-center cursor-pointer ">
              <AiFillApple className="text-3xl " />
              <div className="px-1">
                <h4 className="text-[10px] text-center">DOWNLOAD ON THE</h4>
                <h2 className="text-sm font-bold">APPLE STORE</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 flex justify-center">
        <h2 className="text-gray-300 py-4 pr-1 text-center">
          All Rights Reserved. 2023 Copyright
        </h2>
        <span className=" mt-2 text-white text-2xl text-center">©</span>
      </div>
    </div>
  );
};
export default Footer;

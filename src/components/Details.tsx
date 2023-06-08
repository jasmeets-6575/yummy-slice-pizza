import { MdOutlineLocationOn } from "react-icons/md";
import { BiCurrentLocation } from "react-icons/bi";
import discount from "../assets/discount.jpg";

const Details = () => {
  return (
    <div className="bg-gray-200 h-auto sm:grid grid-cols-1 md:grid-cols-2">
      <div className="  flex items-center justify-center">
        <img className="hidden md:block md:h-[50%] lg:h-3/4 rounded-2xl  shadow-xl " src={discount} alt="" />
      </div>
      <div className="flex flex-col  md:scale-100 justify-center gap-1 md:gap-2 tracking-wide pb-3">
        <h1 className="w-[60%] md:w-[75%] flex justify-between mx-auto text-2xl lg:text-3xl text-[--primary-blue-2] font-bold">
          TELL US MORE ABOUT YOURSELF
        </h1>
        <p className="hidden lg:block w-[75%] text-2xl mx-auto text-gray-500">
          Please select location, so that we can find a restaurant that delivers
          to you!
        </p>
        <div className="w-[60%] lg:w-[50%] text-[1rem] py-2 flex justify-around mx-auto text-[--primary-blue-2]">
          <div>
            <input type="radio" name="A" id="" checked />
            <label className="mx-2" htmlFor="">
              Delivery
            </label>
          </div>
          <div>
            <input type="radio" name="A" id="" />
            <label className="mx-2" htmlFor="">
              Pick Up / Dine-in
            </label>
          </div>
        </div>
        <div className=" w-[60%] md:w-[75%] flex justify-between border border-[--primary-blue-2] rounded-md bg-white items-center mx-auto ">
          <MdOutlineLocationOn className="text-3xl text-[--primary-blue-2]  " />
          <input
            className="w-full lg:p-2 rounded-md border-none outline-none placeholder-[--primary-blue-2]  "
            placeholder="Enter you delivery address"
            type="text"
            name=""
            id=""
          />
          <div className=" flex w-1/4 bg-green-600 text-white cursor-pointer rounded m-1  left-[370px] ">
            <BiCurrentLocation className="hidden lg:block h-auto text-2xl align-middle px-1" />
            <span className="hidden lg:block text-lg text-center "> Find Me</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;

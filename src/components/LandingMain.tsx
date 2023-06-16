import { Link } from "react-router-dom";
import Pizza from "../assets/pizza.jpg";
import { useAppSelector } from "../store/store";

const LandingMain = () => {
  const { isDarkMode } = useAppSelector((store) => store.toggle);
  return (
    <div
      className={`w-full h-auto md:grid grid-cols-2 ${
        isDarkMode ? "bg-gray-900 text-white" : null
      } `}
    >
      <div className="info flex flex-col justify-center items-center">
        <div className="my-5">
          <span className=" lg:text-[7rem]  text-[--primary-blue-2] text-[6rem] font-bold ">
            MOREE...
          </span>
          <h2 className=" lg:text-5xl duration-300 text-4xl text-justify font-bold">
            THAN JUST PIZZA
          </h2>
        </div>
        <div className="flex justify-center">
          <h3 className="w-[90%] mb-3  text-justify text-xl md:text-2xl font-light">
            Our Menu has something for everyone. Stop by for a quick bite or get
            your favorites delivered right to your door.
          </h3>
        </div>
      </div>
      <Link to="/">
        <div className="md:w-full flex justify-center cursor-pointer ">
          <img
            className="h-auto md:w-full object-cover w-[90%]"
            src={Pizza}
            alt="pizza picture"
          />
        </div>
      </Link>
    </div>
  );
};
export default LandingMain;

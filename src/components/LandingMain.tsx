import Pizza from "../assets/pizza.jpg";

const LandingMain = () => {
  return (
    <div className="w-full h-auto md:grid grid-cols-2  ">
      <div className="info flex flex-col justify-center items-center">
        <div className="my-5">
          <span className=" lg:text-[7rem]  text-[--primary-blue] text-[6rem] font-bold ">
            MOREE...
          </span>
          <h2 className=" lg:text-5xl duration-300 text-4xl text-justify font-bold">THAN JUST PIZZA</h2>
        </div>
        <div className="flex justify-center">
          <h3 className="w-[90%] mb-3  text-justify text-xl md:text-2xl font-bold">
            OUR MENU HAS SOMETHING FOR EVERYONE. STOP BY FOR A QUICK BITE OR GET
            YOUR FAVORITES DELIVERED RIGHT TO YOU DOOR
          </h3>
        </div>
      </div>
      <div className="md:w-full flex justify-center ">
        <img className="h-auto md:w-full object-cover w-[90%]" src={Pizza} alt="pizza picture" />
      </div>
    </div>
  );
};
export default LandingMain;

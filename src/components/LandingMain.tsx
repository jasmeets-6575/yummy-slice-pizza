import Pizza from "../assets/pizza.jpg";

const LandingMain = () => {
  return (
    <div className="w-full h-[32rem] grid grid-cols-2  ">
      <div className="info flex flex-col justify-center items-center">
        <div>
          <span className=" text-[--primary-blue] text-[8rem] font-bold ">
            MOREE...
          </span>
          <h2 className="text-6xl text-left font-bold">THAN JUST PIZZA</h2>
        </div>
        <div>
          <h3 className="px-20 mt-4 ml-4 text-left text-2xl">
            OUR MENU HAS SOMETHING FOR EVERYONE. STOP BY FOR A QUICK BITE OR GET
            YOUR FAVORITES DELIVERED RIGHT TO YOU DOOR
          </h3>
        </div>
      </div>
      <div>
        <img className="h-full " src={Pizza} alt="pizza picture" />
      </div>
    </div>
  );
};
export default LandingMain;

import Pizza from "../assets/pizza.jpg";

const LandingMain = () => {
  return (
    <div className="w-full h-[32rem] grid grid-cols-2 ">
      <div className="info">
        <div>
          <span>MOREE...</span>
          <h2>THAN JUST PIZZA</h2>
        </div>
        <div>
          <h3>
            OUR MENU HAS SOMETHING FOR EVERYONE. SOP BY FOR A QUICK BITE OR GET
            YOUR FAVORITES DELIVERED RIGHT TO YOU DOOR{" "}
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

import CartSection from "./Cart-section";
import Main from "./Main";

const DashboardMain = () => {
  return (
    <div className=" flex justify-center ">
      <div className="min-h-screen w-full mx-16 my-8 flex ">
        <div className="w-[75%]">
          <Main />
        </div>
        <div className="w-[25%]">
          <CartSection />
        </div>
      </div>
    </div>
  );
};
export default DashboardMain;

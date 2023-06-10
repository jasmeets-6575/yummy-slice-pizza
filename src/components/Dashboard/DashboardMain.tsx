import CartSection from "./Cart-section";
import Main from "./Main";

const DashboardMain = () => {
  return (
    <div className=" bg-gray-100 flex justify-center ">
      <div className="min-h-screen w-full mx-16 my-12 border border-red-500 flex ">
        <div className="w-[75%] border border-blue-500">
          <Main />
        </div>
        <div className="w-[25%] border border-yellow-500">
          <CartSection />
        </div>
      </div>
    </div>
  );
};
export default DashboardMain;

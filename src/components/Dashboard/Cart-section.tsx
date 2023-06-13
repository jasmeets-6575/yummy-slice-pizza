import offer from "../../assets/offer-2.webp";
import Cart from "./Cart";

const CartSection = () => {
  return (
    <div className="">
      <div className="w-[80%] min-h-screen mx-4 flex flex-col gap-3">
        <img className=" rounded-md" src={offer} alt="offer-coupon" />
        <Cart />
      </div>
    </div>
  );
};
export default CartSection;

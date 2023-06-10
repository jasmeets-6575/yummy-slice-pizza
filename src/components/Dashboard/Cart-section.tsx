import offer from "../../assets/offer-2.webp";
import Cart from "./Cart";

const CartSection = () => {
  return (
    <div>
      <div className=" min-h-screen mx-4 flex flex-col gap-6">
        <img className="rounded-lg" src={offer} alt="offer-coupon" />
        <Cart />
      </div>
    </div>
  );
};
export default CartSection;

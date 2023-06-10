import bag from "../../assets/bucket2.jpg";

const Cart = () => {
  return (
    <div className="border h-[21rem] rounded-lg bg-white">
      <img
        className="w-[80%] rounded-xl mx-auto object-cover"
        src={bag}
        alt="empty bag"
      />

      <h2 className="w-[90%] text-xl mx-auto text-gray-600 tracking-widest my-4 font-bold text-center ">
        YOUR CART IS EMPTY
      </h2>
      <p className="w-[90%] tracking-wider text-gray-500 text-center mx-auto">
        Please add some items from the menu
      </p>
    </div>
  );
};
export default Cart;

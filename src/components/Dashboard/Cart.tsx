import bag from "../../assets/bucket2.jpg";

const Cart = () => {
  return (
    <div className="border w-[240px] fixed top-[290px] shadow-xl h-[22rem] rounded-md bg-white">
      <img
        className="w-[80%] rounded-xl mx-auto my-5 object-cover"
        src={bag}
        alt="empty bag"
      />
      <h2 className="w-[90%] text-lg mx-auto text-gray-600 tracking-widest my-4 text-center font-bold  ">
        YOUR CART IS EMPTY
      </h2>
      <p className="w-[90%] tracking-wider text-gray-500 text-center mx-auto">
        Please add some items from the menu
      </p>
    </div>
  );
};
export default Cart;

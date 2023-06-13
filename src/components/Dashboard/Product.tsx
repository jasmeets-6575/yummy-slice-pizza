import mushroom from "../../assets/mushroom.jpg";


const Product = () => {
    return (
    <div className="h-[255px] rounded-lg py-1 flex flex-col relative justify-between shadow-lg">
      <div className="h-1/2 m-[1px]">
        <img className="rounded-t-md" src={mushroom} alt="pizza" />
      </div>
      <h2 className="text-white text-lg font-bold bg-blue-500 tracking-widest absolute top-24 ml-1 border-2 shadow-2xl rounded-md px-1 border-white z-10">Rs 129 </h2>
      <div className="my-1">
        <h2 className="capitalize text-xl font-semibold tracking-widest px-1">mushroom pizza</h2>
        <p className="text-gray-700 text-md tracking-wide p-1">Our starter pizza made with fresh mushroooms</p>
      </div>
      <div className="flex justify-end mx-2 my-1 ">
        <button className="text-green-600 capitalize text-md border-2 px-2 py-1 rounded-md border-green-600 tracking-wide">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
export default Product;

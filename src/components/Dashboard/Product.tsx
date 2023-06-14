import pizzaData from "../../utils/productsData/productsData";
import { BiRightArrowAlt } from "react-icons/bi";

interface dataType {
  name: string;
  price: string;
  description: string;
  image: string;
}
const Product: React.FC = () => {
  return (
    <div className=" grid grid-cols-3 gap-10 p-7 ">
      {pizzaData.map((item: dataType) => {
        const { name, price, description, image } = item;
        return (
          <section className=" h-72  rounded-md shadow-md flex flex-col justify-between">
            <div className=" relative">
              <img className="rounded-t-md " src={image} alt="pizza" />
              <div className=" flex justify-between items-center">
                <h2 className="text-white font-bold bg-blue-500 tracking-widest absolute bottom-1 ml-1 border-2 rounded-md px-1 border-white z-10">
                  Rs {price}
                </h2>
                <button className="text-gray-600 text-sm bg-white border border-white capitalize absolute right-1 bottom-1 px-1 rounded-md tracking-widest flex justify-center items-center">
                  customize <BiRightArrowAlt className="text-lg" />
                </button>
              </div>
            </div>
            <div className="">
              <h2 className="capitalize text-xl font-semibold tracking-widest px-1">
                {name}
              </h2>
              <p className="text-gray-700 text-md tracking-wide p-1">
                {description}
              </p>
            </div>
            <div className="flex justify-end py-2 ">
              <button className="text-green-600 capitalize text-sm border-2 px-2 py-1 rounded-md border-green-600 tracking-widest mr-2">
                Add To Cart
              </button>
            </div>
          </section>
        );
      })}
    </div>
  );
};
export default Product;

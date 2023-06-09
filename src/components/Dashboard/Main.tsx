import Product from "./Product";
import pizzaData from "../../utils/productsData/productsData";
import React from "react";

interface dataType {
  name: string;
  price: string;
  description: string;
  image: string;
  id: number;
}

const Main: React.FC = () => {
  return (
    <div className="w-[95%] mx-auto grid grid-cols-3 ">
      {pizzaData.map((item: dataType) => {
        const { name, price, description, image, id } = item;
        return (
          <div key={id}>
            <Product
              name={name}
              price={price}
              description={description}
              image={image}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Main;

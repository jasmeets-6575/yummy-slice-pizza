import React from "react";
interface props {
  color?: string;
}

const Logo: React.FC<props> = ({ color }) => {
  return (
    <h2
      className={`font-bold text-2xl mx-2 ${color} tracking-wider cursor-pointer`}
    >
      Yummy Slice Pizza
    </h2>
  );
};
export default Logo;

Logo.defaultProps = {
  color: "text-white",
};

import { IconType } from "react-icons/lib";
import { data } from "../../utils/leftSidebarData";
import React, { ReactNode } from "react";

interface props {
  id?: number;
  text?: string;
  logo?: IconType;
}
const LeftSidebar = () => {
    
  return (
    <div className="fixed z-10 left-[100%] bg-gray-100 flex flex-col gap-2 w-[20%] h-[90vh]">
      {data.map((item) => {
        const { id, text, logo } = item;        
        return (
          <div
            key={id}
            className="flex gap-5 text-gray-500 tracking-widest items-center my-2 mx-6 p-2"
          >
            <h2 className="text-lg">{logo}</h2>
            <h2>{text}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default LeftSidebar;

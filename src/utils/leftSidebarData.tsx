import { GoLocation, GoHome } from "react-icons/go";
import { CiPizza } from "react-icons/ci";
import { RiCoupon2Line } from "react-icons/ri";
import { BiFoodMenu } from "react-icons/bi";
import { AiOutlineGift } from "react-icons/ai";
import { RiFeedbackLine } from "react-icons/ri";

export const data = [
  { 
    id:1,
    logo: <GoLocation />,
    text: "Track Current Order",
  },
  { 
    id:2,
    logo: <CiPizza />,
    text: "Order History",
  },
  { 
    id:3,
    logo: <GoHome />,
    text: "Home",
  },
  { 
    id:4,
    logo: <RiCoupon2Line />,
    text: "Deals And Offers",
  },
  {
    id:5,
    logo: <BiFoodMenu />,
    text: "Menu",
  },

  { 
    id:6,
    logo: <AiOutlineGift />,
    text: "Everyday Value Offers",
  },

  { 
    id:7,
    logo: <RiFeedbackLine />,
    text: "Feedback",
  },
  { 
    id:8,
    logo: <CiPizza />,
    text: "Bulk Order",
  },
];

import Details from "../components/Details";
import Footer from "../components/Footer";
import { useState } from "react";
import LandingMain from "../components/LandingMain";
import NavbarMain from "../components/NavbarMain";
import Login from "./Login";

const Landing:React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <div className="max-w-full ">
      <NavbarMain toggle={toggle} setToggle={setToggle} />
      <Login toggle={toggle} />
      <LandingMain />
      <Details />
      <Footer />
    </div>
  );
};
export default Landing;

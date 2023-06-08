import Details from "../components/Details";
import Footer from "../components/Footer";
import LandingMain from "../components/LandingMain";
import NavbarMain from "../components/NavbarMain";
import Login from "./Login";

const Landing = () => {
  return (
    <div className=" ">
      <NavbarMain />
      <Login />
      <LandingMain />
      <Details />
      <Footer />
    </div>
  );
};
export default Landing;

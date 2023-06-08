import Details from "../components/Details";
import Footer from "../components/Footer";
import LandingMain from "../components/LandingMain";
import NavbarMain from "../components/NavbarMain";

const Landing = () => {
  return (
    <div className="overflow-auto h-[100vh] ">
      <NavbarMain />
      <LandingMain />
      <Details />
      <Footer />
    </div>
  );
};
export default Landing;

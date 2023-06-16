import Logo from "./Logo";
import SignUp from "./Dashboard/SignUp";
import { Link } from "react-router-dom";

const NavbarMain: React.FC = () => {
  return (
    <div className="h-auto py-3 w-full flex bg-[--primary-blue]">
      <div className="w-[1240px] mx-auto flex justify-between ">
        <Link to="/">
          <Logo />
        </Link>
        <SignUp />
      </div>
    </div>
  );
};
export default NavbarMain;

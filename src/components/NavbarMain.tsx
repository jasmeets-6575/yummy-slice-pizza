import Logo from "./Logo";
import SignUp from "./Dashboard/SignUp";

const NavbarMain: React.FC = () => {
  return (
    <div className="h-auto py-3 w-full flex bg-[--primary-blue]">
      <div className="w-[1240px] mx-auto flex justify-between ">
        <Logo />
        <SignUp />
      </div>
    </div>
  );
};
export default NavbarMain;

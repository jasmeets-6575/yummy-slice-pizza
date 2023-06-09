import DashboardMain from "../components/Dashboard/DashboardMain";
import ItemLinks from "../components/Dashboard/ItemLinks";
import LeftSidebar from "../components/Dashboard/LeftSidebar";
import NavbarDash from "../components/Dashboard/NavbarDash";
import RightSidebar from "../components/Dashboard/RightSidebar";
import Login from "./Login";

const Dashboard = () => {
  return (
    <div className="h-screen">
      <NavbarDash />
      <LeftSidebar />
      <RightSidebar />
      <Login />
      <ItemLinks />
      <DashboardMain />
    </div>
  );
};
export default Dashboard;

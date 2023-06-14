import {
  RightSidebar,
  DashboardMain,
  ItemLinks,
  LeftSidebar,
  NavbarDash,
} from "../components/Dashboard";
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

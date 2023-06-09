import DashboardMain from "./DashboardMain"
import ItemLinks from "./ItemLinks"
import LeftSidebar from "./LeftSidebar"
import NavbarDash from "./NavbarDash"
import RightSidebar from "./RightSidebar"

const Dashboard = () => {
  return (
    <div className="h-screen">
      <NavbarDash/>
      <LeftSidebar />
      < RightSidebar />
      <ItemLinks />
      <DashboardMain />
    </div>
  )
}
export default Dashboard
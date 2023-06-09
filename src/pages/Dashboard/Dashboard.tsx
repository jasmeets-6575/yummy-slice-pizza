import DashboardMain from "./DashboardMain"
import ItemLinks from "./ItemLinks"
import LeftSidebar from "./LeftSidebar"
import NavbarDash from "./NavbarDash"

const Dashboard = () => {
  return (
    <div className="h-screen">
      <NavbarDash/>
      <LeftSidebar />
      <ItemLinks />
      <DashboardMain />
    </div>
  )
}
export default Dashboard
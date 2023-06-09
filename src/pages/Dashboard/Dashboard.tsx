import ItemLinks from "./ItemLinks"
import NavbarDash from "./NavbarDash"

const Dashboard = () => {
  return (
    <div className="h-screen">
      <NavbarDash/>
      <ItemLinks />
    </div>
  )
}
export default Dashboard
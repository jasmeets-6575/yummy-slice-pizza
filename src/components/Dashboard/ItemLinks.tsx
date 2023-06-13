import { NavLink } from "react-router-dom"
import { navbarLinks } from "../../utils/navbarLinks"

const ItemLinks = () => {
  return (
    <div className="bg-white h-auto flex justify-center items-center">
        <div className="w-[95vw] p-1 text-gray-400 text-sm tracking-widest flex justify-around items-center ">
            {navbarLinks.map((link)=>{
              const {id,path,text} = link
              return (
                <NavLink key={id} to={path} >
                  <span> {text}</span>
                </NavLink>
              )
            })}
          </div>
    </div>
  )
}
export default ItemLinks
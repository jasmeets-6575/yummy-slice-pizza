import Product from "./Product"

const Main = () => {
  return (
    <div className="w-[95%] mx-auto">
      <div className="grid grid-cols-3 gap-x-[42px] gap-y-6"> 

      <Product/>
      <Product/>
      <Product/>
      <Product/>
      </div>
    </div>
  )
}
export default Main
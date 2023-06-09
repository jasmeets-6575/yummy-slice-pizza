const Delivery = () => {
  return (
    <div className="w-[60%] lg:w-[50%] text-[1rem] py-2 flex justify-around mx-auto text-[--primary-blue-2]">
          <div>
            <input type="radio" name="A" id="" checked />
            <label className="mx-2" htmlFor="">
              Delivery
            </label>
          </div>
          <div>
            <input type="radio" name="A" id="" />
            <label className="mx-2" htmlFor="">
              Pick Up / Dine-in
            </label>
          </div>
        </div>
  )
}
export default Delivery
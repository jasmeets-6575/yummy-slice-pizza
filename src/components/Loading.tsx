import LoadingImg from "../assets/loading-pizza.jpg";

const Loading = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className=" w-[15%] h-auto flex justify-center items-center">
        <img className=" rounded-[50%] animate-spin w-full" src={LoadingImg} alt="pizza" />
      </div>
      <h2 className="text-xl md:text-3xl w-1/2 md:w-full text-center text-blue-500 tracking-widest mt-6 font-bold">Loading.... Please Wait</h2>
    </div>
  );
};
export default Loading;

import { Link } from "react-router-dom";
import errorImg from "../assets/error-img.svg";

const ErrorPage = () => {
  return (
    <div className=" h-screen flex justify-center">
      <div className="w-[90%] flex flex-col justify-center items-center gap-4">
        <img className="w-[35%]" src={errorImg} alt="" />
        <h3 className="text-3xl md:text-5xl font-medium">Ohh! Page Not Found</h3>
        <p className="text-2xl md:text-3xl">We can't seem to find the page you're looking for </p>
        <Link className="text-xl text-[--primary-blue-2]" to="/landing">Back to Home</Link>
      </div>
    </div>
  );
};
export default ErrorPage;

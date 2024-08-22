import ErrorImage from "../assets/images/error404.png";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="min-w-screen min-h-screen gradient-background flex items-center p-5 lg:p-20 overflow-hidden relative">
        <div className="flex-1 min-h-full min-w-full rounded-3xl bg-background shadow-xl p-10 lg:p-20 text-black relative md:flex items-center text-center md:text-left">
          <div className="w-full md:w-1/2">
            <div className="mb-10 lg:mb-20">
              <h2 className="text-xl font-bold text-secondary">Logo</h2>
            </div>
            <div className="mb-10 md:mb-20 text-secondary/50 font-light">
              <h1 className="font-black uppercase text-3xl lg:text-5xl text-secondary mb-10">
                Page Not Found!
              </h1>
              <p>The page you&apos;re looking for isn&apos;t available.</p>
              <p>Try searching again or use the Go Back button below.</p>
            </div>
            <div className="mb-20 md:mb-0">
              <Link
                to="/"
                className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-secondary hover:text-secondary/80"
              >
                Go Back
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center">
            <img src={ErrorImage} alt="404 error" />
          </div>
        </div>
        <div className="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
        <div className="w-96 h-full bg-yellow-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
      </div>
    </>
  );
};

export default PageNotFound;

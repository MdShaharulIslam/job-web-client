// import developer from "../../../assets/images/developer.png";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-screen-xl h-screen mx-auto px-5 md:px-10 flex gap-7 lg:gap-10 ">
        <div className="w-full md:w-2/3 h-full  flex items-center justify-center  ">
          <div className="text-white">
            <span className="text-xl">Welcome To The</span>
            <h1 className="text-xl lg:text-3xl font-semibold">
              <span className="text-3xl lg:text-5xl pt-3 pb-1 block">
                Awesome Creative Marketplace
              </span>{" "}
              Find the right service, right away
            </h1>
            <p className="py-5">
              Explore from thousands of premium quality services.
            </p>
            <div className="py-10 space-x-2">
              <button className="font-medium bg-[#7CCC01] border border-[#7CCC01] hover:bg-[#0870A1] hover:border-[#0870A1] text-white py-2 px-5 rounded-md duration-300">
                Explore Now
              </button>
             
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-1/3 relative">
                  
        </div>
      </div>
    </div>
  );
};

export default Banner;

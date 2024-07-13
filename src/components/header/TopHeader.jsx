import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
const TopHeader = () => {
  return (
    <div className="container mx-auto flex items-center md:justify-between justify-center py-2 flex-wrap md:gap-5 px-5 md:px-0">
      <span className="uppercase font-bold text-2xl">ChiroHealth</span>
      <div className="flex items-center justify-center gap-3 md:gap-5">
        <div className="flex items-center gap-3 text-[10px] sm:text-sm">
          <span className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-primary bg-opacity-10 flex items-center justify-center rounded-full">
            <FaLocationArrow className=" text-primary" />
          </span>
          <span className="">2569 Maple Avenue Stockton, CA 95204</span>
        </div>
        <div className="flex items-center gap-3 text-[10px] sm:text-sm">
          <span className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-primary bg-opacity-10 flex items-center justify-center rounded-full">
            <FaPhoneAlt className=" text-primary" />
          </span>
          <span> +01 123 456 7890</span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

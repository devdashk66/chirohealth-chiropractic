import { IoIosArrowForward } from "react-icons/io";

const PageHeading = ({ title = "Page Title" }) => {
  return (
    <section
      className={`bg-[url('/images/hero-2.jpg')] bg-cover bg-center relative`}
    >
      <main className="container mx-auto ">
        <p className="flex items-center text-gray-100 pt-5 text-xl gap-3">
          Home <IoIosArrowForward />
          <span className="text-gray-300">{title}</span>
          <IoIosArrowForward className="text-gray-300" />
        </p>
        <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center">
          <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
            {title}
          </h3>
        </div>
        <div className="py-44"></div>
      </main>
    </section>
  );
};

export default PageHeading;

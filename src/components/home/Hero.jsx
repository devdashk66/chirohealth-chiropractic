"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "@/app/globals.css";
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      loop
    >
      <SwiperSlide>
        <main className="bg-[url('/images/hero-1.jpg')] py-60 bg-cover bg-center flex justify-end">
          <div className="container px-5 max-w-[550px] lg:scale-110 xl:scale-125 sm:mr-12 md:mr-20 lg:mr-36 xl:mr-44">
            <h1 className="text-3xl lg:text-4xl text-white font-bold">
              Welcome to our chiropratic centre
            </h1>
            <p className="text-gray-100 py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iste
              sunt qui possimus nobis vero nam quod ipsum pariatur eum.
            </p>
            <button className="bg-primary rounded py-3 px-5 text-white uppercase text-sm hover:bg-transparent border border-primary duration-200">
              Book an Appointment
            </button>
          </div>
        </main>
      </SwiperSlide>
      <SwiperSlide>
        <main className="bg-[url('/images/hero-2.jpg')] py-60 bg-cover bg-center flex justify-end">
          <div className="container px-5 max-w-[550px] lg:scale-110 xl:scale-125 sm:mr-12 md:mr-20 lg:mr-36 xl:mr-44">
            <h1 className="text-3xl lg:text-4xl text-white font-bold">
              Chiropratic care for the whole family
            </h1>
            <p className="text-gray-100 py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iste
              sunt qui possimus nobis vero nam quod ipsum pariatur eum.
            </p>
            <button className="bg-primary rounded py-3 px-5 text-white uppercase text-sm hover:bg-transparent border border-primary duration-200">
              Book an Appointment
            </button>
          </div>
        </main>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;

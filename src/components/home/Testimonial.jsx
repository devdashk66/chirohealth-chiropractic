"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import Image from "next/image";
import { FaComment } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <section className="py-12 bg-background">
      <main className="container mx-auto px-5">
        <div className="text-center">
          <h2 className="text-primary text-lg font-bold mb-4 uppercase">
            TESTIMONIES
          </h2>
          <h3 className="text-4xl font-bold mb-12 text-gray-100">
            Happy Clients & Feedbacks
          </h3>
        </div>
        <div>
          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 222500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            loop
            breakpoints={{
              768: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            {testimonial.map((persoin) => (
              <SwiperSlide key={persoin.id}>
                <div className="border border-primary p-6 relative rounded-br group">
                  <p className="pb-5 text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    magnam aut earum. Quis, assumenda delectus adipisci magni
                    recusandae provident consequuntur.
                  </p>
                  <div className="flex items-center justify-start gap-5">
                    <Image
                      className="rounded-full w-16 h-16 object-cover"
                      src={`/images/profile-images/avater-${persoin.id}.jpg`}
                      width={100}
                      height={100}
                      alt="Avater"
                    />
                    <div>
                      <h3 className="text-gray-100 text-xl">{persoin.name}</h3>
                      <p className="text-gray-200">{persoin.position}</p>
                    </div>
                  </div>
                  <span className="absolute bottom-0 right-0 z-30 p-3 bg-primary rounded-tl rounded-br group-hover:bg-secondary duration-300">
                    <FaComment className="text-xl text-white group-hover:animate-bounce duration-300" />
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </section>
  );
};

export default Testimonial;

const testimonial = [
  { id: 1, name: "Devid Lan", position: "Chief medical officer" },
  { id: 2, name: "Rayan Parker", position: "Head Chiropractor" },
  { id: 3, name: "John Smith", position: "Assistant Chiropractic" },
  { id: 4, name: "Alison Henderson", position: "Message Therapist" },
  { id: 5, name: "Scoot Ly", position: "Desk Coordinator" },
];

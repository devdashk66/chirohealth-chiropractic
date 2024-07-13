"use client";
import Image from "next/image";
// Import Swiper React components
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const BlogSection = () => {
  return (
    <section className="py-12 px-5">
      <main className="container mx-auto">
        <div className="text-center">
          <h2 className="text-primary text-lg font-bold mb-4 uppercase">
            NEWS & BLOG
          </h2>
          <h3 className="text-4xl font-bold mb-12 text-gray-800">
            Latest news from our blog
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
            className="mySwiper "
          >
            {blogs.map((blog) => (
              <SwiperSlide className="pb-16" key={blog.id}>
                <div className="relative rounded-br group  flex flex-col gap-5 shadow-md hover:shadow-primary hover:shadow-sm duration-300">
                  <div className="w-full h-80 overflow-hidden rounded">
                    <Image
                      className="object-cover w-full h-full rounded group-hover:scale-110 duration-500"
                      src={`/images/blog/blog-${blog.id}.jpg`}
                      width={1080}
                      height={720}
                      alt="Avater"
                    />
                  </div>
                  <div className="flex items-center justify-start gap-5 p-3">
                    <Image
                      className="rounded-full w-16 h-16 object-cover"
                      src={`/images/profile-images/avater-${blog.id}.jpg`}
                      width={100}
                      height={100}
                      alt="Avater"
                    />
                    <div>
                      <h3 className="text-gray-700 text-sm">
                        Posted by{" "}
                        <span className="font-bold text-primary cursor-pointer">
                          {blog.name}
                        </span>
                      </h3>
                      <p className="text-gray-600">{blog.position}</p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="p-3 text-gray-600 hover:text-primary duration-300 text-2xl -mt-7 pb-5"
                  >
                    {blog.content}
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </section>
  );
};

export default BlogSection;

const blogs = [
  {
    id: 1,
    name: "Devid Lan",
    content: "What Every Athlete Needs To Know About Injury Recovery",
    position: "Chief medical officer",
  },
  {
    id: 2,
    name: "Rayan Parker",
    content: "What Every Athlete Needs To Know About Injury Recovery",
    position: "Head Chiropractor",
  },
  {
    id: 3,
    name: "John Smith",
    content: "What Every Athlete Needs To Know About Injury Recovery",
    position: "Assistant Chiropractic",
  },
  {
    id: 4,
    name: "Alison Henderson",
    content: "What Every Athlete Needs To Know About Injury Recovery",
    position: "Message Therapist",
  },
  {
    id: 5,
    name: "Scoot Ly",
    content: "What Every Athlete Needs To Know About Injury Recovery",
    position: "Desk Coordinator",
  },
];

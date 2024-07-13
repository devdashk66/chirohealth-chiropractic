"use client";
import Image from "next/image";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import VideoModal from "./Modal";

const AboutSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <section>
      <main className="container mx-auto px-5 flex flex-col lg:flex-row justify-center items-center gap-5 py-12">
        <div className="max-w-[600px] flex flex-col gap-5">
          <h2 className="text-primary text-lg font-bold -mb-3">
            Welcome to ChiroHealth
          </h2>
          <h3 className="text-4xl font-bold mb-4 text-gray-800">
            About ChiroHealth
          </h3>
          <p className="text-gray-400 mb-6">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-3 w-32">
              <span className="text-primary text-5xl font-bold">28</span>
              <span className="text-gray-500 uppercase font-bold">
                years of experienced
              </span>
            </div>
            <div className="flex flex-col gap-3 w-32">
              <span className="text-primary text-5xl font-bold">2564</span>
              <span className="text-gray-500 uppercase font-bold">
                happy customers
              </span>
            </div>
            <div className="flex flex-col gap-3 w-32">
              <span className="text-primary text-5xl font-bold">16</span>
              <span className="text-gray-500 uppercase font-bold">
                award winning
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/about.jpg"
            width={1200}
            height={1200}
            alt="About"
            className="w-[600px] h-[600px] object-cover"
          />
          <button
            onClick={openModal}
            className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-50 text-white bg-primary w-20 h-20 rounded-full flex items-center justify-center animate-pulse hover:bg-secondary duration-500"
          >
            <FaPlay className="text-2xl" />
          </button>
        </div>
      </main>
      <VideoModal
        isOpen={isOpen}
        closeModal={closeModal}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
      />
    </section>
  );
};

export default AboutSection;

"use client";

import { FaBolt, FaBrain, FaDumbbell, FaHands, FaJoint } from "react-icons/fa";
import { MdOutlineMedicalInformation } from "react-icons/md";

const BenefitsSection = () => {
  return (
    <section className="container mx-auto py-12">
      <div className="text-center">
        <h2 className="text-primary text-lg font-bold mb-4 uppercase">
          We Offer Services
        </h2>
        <h3 className="text-4xl font-bold mb-12">Our Benefits</h3>
      </div>
      <div className="flex items-center justify-center gap-10 lg:gap-3 flex-wrap mx-5">
        <div className="flex justify-center gap-5 group lg:max-w-[400px] py-10 hover:border-r hover:border-primary duration-300">
          <div className="text-4xl text-secondary  flex items-center justify-center shadow-lg rounded duration-300 group-hover:bg-primary group-hover:text-white w-20 h-20 basis-1/5">
            <FaHands className="" />
          </div>
          <div className="basis-4/5">
            <h4 className="text-xl font-bold mb-2">Spinal Manipulation</h4>
            <p className="text-gray-600 mb-4 text-sm">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
            <a
              href="#"
              className="text-gray-500 hover:text-primary uppercase font-bold border-b border-gray-500 hover:border-primary duration-500 text-sm"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="flex justify-center gap-5 group lg:max-w-[400px] py-10 hover:border-r hover:border-primary duration-300">
          <div className="text-4xl text-secondary  flex items-center justify-center shadow-lg rounded duration-300 group-hover:bg-primary group-hover:text-white w-20 h-20 basis-1/5">
            <FaBolt className="" />
          </div>
          <div className="basis-4/5">
            <h4 className="text-xl font-bold mb-2">Electrotherapy</h4>
            <p className="text-gray-600 mb-4 text-sm">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
            <a
              href="#"
              className="text-gray-500 hover:text-primary uppercase font-bold border-b border-gray-500 hover:border-primary duration-500 text-sm"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="flex justify-center gap-5 group lg:max-w-[400px] py-10 hover:border-r hover:border-primary duration-300">
          <div className="text-4xl text-secondary  flex items-center justify-center shadow-lg rounded duration-300 group-hover:bg-primary group-hover:text-white w-20 h-20 basis-1/5">
            <FaBrain className="" />
          </div>
          <div className="basis-4/5">
            <h4 className="text-xl font-bold mb-2">Manual Lymphatic</h4>
            <p className="text-gray-600 mb-4 text-sm">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
            <a
              href="#"
              className="text-gray-500 hover:text-primary uppercase font-bold border-b border-gray-500 hover:border-primary duration-500 text-sm"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="flex justify-center gap-5 group lg:max-w-[400px] py-10 hover:border-r hover:border-primary duration-300">
          <div className="text-4xl text-secondary  flex items-center justify-center shadow-lg rounded duration-300 group-hover:bg-primary group-hover:text-white w-20 h-20 basis-1/5">
            <FaDumbbell />
          </div>
          <div className="basis-4/5">
            <h4 className="text-xl font-bold mb-2">Therapeutic Exercise</h4>
            <p className="text-gray-600 mb-4 text-sm">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
            <a
              href="#"
              className="text-gray-500 hover:text-primary uppercase font-bold border-b border-gray-500 hover:border-primary duration-500 text-sm"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="flex justify-center gap-5 group lg:max-w-[400px] py-10 hover:border-r hover:border-primary duration-300">
          <div className="text-4xl text-secondary  flex items-center justify-center shadow-lg rounded duration-300 group-hover:bg-primary group-hover:text-white w-20 h-20 basis-1/5">
            <FaJoint />
          </div>
          <div className="basis-4/5">
            <h4 className="text-xl font-bold mb-2">Joint Mobilization</h4>
            <p className="text-gray-600 mb-4 text-sm">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
            <a
              href="#"
              className="text-gray-500 hover:text-primary uppercase font-bold border-b border-gray-500 hover:border-primary duration-500 text-sm"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="flex justify-center gap-5 group lg:max-w-[400px] py-10 hover:border-r hover:border-primary duration-300">
          <div className="text-4xl text-secondary  flex items-center justify-center shadow-lg rounded duration-300 group-hover:bg-primary group-hover:text-white w-20 h-20 basis-1/5">
            <MdOutlineMedicalInformation />
          </div>
          <div className="basis-4/5">
            <h4 className="text-xl font-bold mb-2">Medical Acupuncture</h4>
            <p className="text-gray-600 mb-4 text-sm">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
            <a
              href="#"
              className="text-gray-500 hover:text-primary uppercase font-bold border-b border-gray-500 hover:border-primary duration-500 text-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import gallery1 from "/public/images/gallery/gallery-1.jpg";
import gallery2 from "/public/images/gallery/gallery-2.jpg";
import gallery3 from "/public/images/gallery/gallery-3.jpg";
import gallery4 from "/public/images/gallery/gallery-4.jpg";
import gallery5 from "/public/images/gallery/gallery-5.jpg";
import gallery6 from "/public/images/gallery/gallery-6.jpg";

const WhyChooseUs = () => {
  const [activeSection, setActiveSection] = useState("Spinal Manipulation");

  const sections = {
    "Spinal Manipulation": {
      title: "Spinal Manipulation",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ",
      images: [gallery1],
    },
    Electrotherapy: {
      title: "Electrotherapy",
      description:
        "Electrotherapy is the use of electrical energy as a medical treatment. The use of electrotherapy in the field of medicine is on the rise.",
      images: [gallery2],
    },
    "Manual Lymphatic": {
      title: "Manual Lymphatic",
      description:
        "Manual Lymphatic Drainage is a type of gentle massage which is intended to encourage the natural drainage of the lymph, which carries waste products away from the tissues back toward the heart.",
      images: [gallery3],
    },
    "Medical Acupuncture": {
      title: "Medical Acupuncture",
      description:
        "Medical acupuncture is a contemporary adaptation of traditional acupuncture, a form of medicine practiced in China and other Eastern countries for thousands of years.",
      images: [gallery4],
    },
    "Therapeutic Exercise": {
      title: "Therapeutic Exercise",
      description:
        "Therapeutic exercise refers to a range of physical activities that help restore and build physical strength, endurance, flexibility, balance, and stability.",
      images: [gallery5],
    },
    "Joint Mobilization": {
      title: "Joint Mobilization",
      description:
        "Joint mobilization is a manual therapy intervention, a type of passive movement of a skeletal joint.",
      images: [gallery6],
    },
  };

  return (
    <sections>
      <main className="container mx-auto px-5 my-12">
        <div className="flex flex-col justify-center  lg:flex-row">
          {/* Sidebar */}
          <div className="flex flex-col  p-4 space-y-4 lg:w-1/4">
            {Object.keys(sections).map((section) => (
              <button
                key={section}
                className={`py-5 px-4 rounded shadow-sm shadow-primary flex items-center gap-3 ${
                  activeSection === section
                    ? "bg-primary text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setActiveSection(section)}
              >
                <FaArrowRightFromBracket className="text-4xl" /> {section}
              </button>
            ))}
          </div>
          {/* Main Content */}
          <div className="flex flex-col  lg:w-3/4 p-4 max-w-[600px]">
            {sections[activeSection].images.map((image, index) => (
              <div className="mb-4" key={index}>
                <Image
                  width={720}
                  height={650}
                  src={image}
                  alt={`${sections[activeSection].title} Image ${index + 1}`}
                  className="rounded"
                />
              </div>
            ))}
            <h2 className="text-2xl font-bold">
              {sections[activeSection].title}
            </h2>
            <p className="text-gray-700 mt-2">
              {sections[activeSection].description}
            </p>
          </div>
        </div>
      </main>
    </sections>
  );
};

export default WhyChooseUs;

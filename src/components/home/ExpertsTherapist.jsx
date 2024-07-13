import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const ExpertsTherapist = () => {
  return (
    <section className="py-12">
      <div className="text-center">
        <h2 className="text-primary text-lg font-bold mb-4 uppercase">
          TEAM & STAFF
        </h2>
        <h3 className="text-4xl font-bold mb-12">
          Our Experts Chiropractor / Therapist
        </h3>
      </div>
      <main className="flex flex-wrap items-center justify-center">
        {experts.map((expert) => (
          <div key={expert.id} className="flex flex-col group overflow-hidden">
            <div className="w-full md:max-w-[300px] h-96 relative">
              <Image
                src={`/images/profile-images/avater-${expert.id}.jpg`}
                width={720}
                height={600}
                alt="avater"
                className="w-full h-full object-cover"
              />

              <div className="absolute -bottom-12 left-2/4 -translate-x-2/4 -translate-y-2/4 group-hover:bottom-5 duration-300">
                <div className="flex items-end justify-center h-full gap-3 z-30">
                  <FaTwitter className="text-white p-2 w-8 h-8 bg-primary rounded-full cursor-pointer hover:bg-secondary duration-200" />
                  <FaFacebook className="text-white p-2 w-8 h-8 bg-primary rounded-full cursor-pointer hover:bg-secondary duration-200" />
                  <FaInstagram className="text-white p-2 w-8 h-8 bg-primary rounded-full cursor-pointer hover:bg-secondary duration-200" />
                  <FaWhatsapp className="text-white p-2 w-8 h-8 bg-primary rounded-full cursor-pointer hover:bg-secondary duration-200" />
                  <FaTelegram className="text-white p-2 w-8 h-8 bg-primary rounded-full cursor-pointer hover:bg-secondary duration-200" />
                </div>
              </div>
            </div>

            <div className=" text-white bg-primary text-center py-3 relative z-20">
              <h2 className="text-xl font-bold">{expert.name}</h2>
              <p>{expert.position}</p>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default ExpertsTherapist;

const experts = [
  { id: 1, name: "Lloyd Wilson", position: "Chief medical officer" },
  { id: 2, name: "Rachel Parker", position: "Head Chiropractor" },
  { id: 3, name: "Ian Smith", position: "Assistant Chiropractic" },
  { id: 4, name: "Alicic Henderson", position: "Message Therapist" },
  { id: 5, name: "Devid Woa", position: "Desk Coordinator" },
];

// className={`bg-[url('/images/profile-images/avater-${expert.id}.jpg')] bg-cover bg-center h-96 w-screen md:w-full min-w-80 py-10 text-2xl group-hover:scale-110 duration-200`}

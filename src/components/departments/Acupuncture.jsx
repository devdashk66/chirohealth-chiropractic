import Image from "next/image";
import gallery4 from "/public/images/gallery/gallery-4.jpg";

const Acupuncture = () => {
  return (
    <section className="container mx-auto">
      <main className="flex flex-col gap-5 lg:gap-0 lg:flex-row-reverse items-center justify-center px-5 2xl:px-28 mb-20 lg:mb-0">
        <div className="flex flex-col gap-5 items-start lg:basis-2/4 lg:p-10">
          <h2 className="text-3xl">Acupuncture</h2>
          <p className="text-gray-500">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <p className="text-gray-500">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country
          </p>
          <button className="py-2 px-5 bg-primary uppercase text-white rounded duration-300 hover:bg-secondary">
            Read More
          </button>
        </div>
        <Image
          className="lg:basis-2/4"
          src={gallery4}
          width={550}
          height={450}
          alt="Chiropractic"
        />
      </main>
    </section>
  );
};

export default Acupuncture;

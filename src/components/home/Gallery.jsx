import Image from "next/image";
import { MdOutlineZoomOutMap } from "react-icons/md";

const Gallery = () => {
  return (
    <section>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center relative group"
            >
              <Image
                width={500}
                height={400}
                alt="Gallery"
                src={`/images/gallery/gallery-${item.id}.jpg`}
              />
              <div className="bg-secondary bg-opacity-80 absolute top-0 left-0 w-full h-full flex items-center flex-col justify-center gap-2 group-hover:opacity-100 opacity-0 duration-300">
                <span className="w-20 h-20 flex items-center justify-center bg-primary rounded-full group-hover:scale-95 scale-0 duration-1000">
                  <MdOutlineZoomOutMap className="text-white text-3xl" />
                </span>
                <h4 className="text-xl text-white font-bold group-hover:opacity-100 opacity-0 duration-700">
                  {item.content}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Gallery;

const gallery = [
  { id: 1, content: "Foot Pain" },
  { id: 2, content: "Back Pain" },
  { id: 3, content: "Neck Pain" },
  { id: 5, content: "Headache" },
  { id: 7, content: "Shoulder Pain" },
  { id: 8, content: "Knee Pain" },
  { id: 4, content: "Arthritis" },
  { id: 6, content: "Sciatica" },
];

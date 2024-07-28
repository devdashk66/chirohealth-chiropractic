import PageHeading from "@/components/common/PageHeading";
import Gallery from "@/components/home/Gallery";

const GalleryPage = () => {
  return (
    <section>
      <PageHeading title="Gallery" />
      <div className="py-20">
        <Gallery />
      </div>
    </section>
  );
};

export default GalleryPage;

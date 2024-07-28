import PageHeading from "@/components/common/PageHeading";
import Contact from "@/components/contact/ContactForm";
import MyGoogleMap from "@/components/contact/GoogleMap";

const page = () => {
  return (
    <section>
      <PageHeading title="Contact" />
      <MyGoogleMap />
      <Contact />
    </section>
  );
};

export default page;

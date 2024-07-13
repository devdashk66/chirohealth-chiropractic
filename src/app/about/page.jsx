import History from "@/components/about/History";
import PageHeading from "@/components/common/PageHeading";
import AboutSection from "@/components/home/AboutSection";
import Testimonial from "@/components/home/Testimonial";

const AboutPage = () => {
  return (
    <section>
      <PageHeading title="About Us" />
      <AboutSection />
      <History />
      <Testimonial />
    </section>
  );
};

export default AboutPage;

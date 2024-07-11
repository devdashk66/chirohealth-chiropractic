import BookingForm from "@/components/home/BookingForm";
import Hero from "@/components/home/Hero";

export const metadata = {
  title: "ChiroHealth - Your Path to Optimal Health",
  description:
    "Welcome to ChiroHealth: Your Path to Optimal Health. At ChiroHealth, we believe in the power of chiropractic care to transform lives. Our mission is to provide comprehensive, personalized care that addresses your unique health needs, helping you achieve a life free from pain and full of vitality.",
};

const HomePage = () => {
  return (
    <section>
      <Hero />
      <div className="-mt-36  relative z-10">
        <BookingForm />
      </div>
    </section>
  );
};

export default HomePage;

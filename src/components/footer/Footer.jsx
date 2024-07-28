import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#252525] text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-primary text-xl font-bold mb-4 ">ChiroHealth</h2>
          <p className="mb-4">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="flex space-x-4">
            <FaTwitter className="text-2xl hover:text-primary transition-colors" />
            <FaFacebook className="text-2xl hover:text-primary transition-colors" />
            <FaInstagram className="text-2xl hover:text-primary transition-colors" />
          </div>
        </div>

        <div>
          <h2 className="text-white text-xl font-bold mb-4">Services</h2>
          <ul className="space-y-2">
            <li>Spinal Manipulation</li>
            <li>Electrotherapy</li>
            <li>Manual Lymphatic</li>
            <li>Medical Acupuncture</li>
            <li>Therapeutic Exercise</li>
            <li>Joint Mobilization</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-xl font-bold mb-4">
            Contact information
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <MdLocationOn className="text-2xl" />
              <span>2569 Maple Avenue Stockton, CA 95204</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdPhone className="text-2xl" />
              <span>+2 392 3929 210</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdEmail className="text-2xl" />
              <span>info@yourdomain.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-xl font-bold mb-4">Business Hours</h2>
          <ul className="space-y-2">
            <li>
              <strong>OPENING DAYS:</strong>
              <br />
              Monday – Friday : 9am to 20 pm
              <br />
              Saturday : 9am to 17 pm
            </li>
            <li>
              <strong>VACATIONS:</strong>
              <br />
              All Sunday Days All Official Holidays
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center text-sm text-gray-500">
        <p>
          This website is a practice project and is not the official site. For
          the real Chiropractic website, please visit{" "}
          <a
            href="https://themewagon.github.io/chiropractic/index.html"
            className="text-primary hover:underline"
          >
            here
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;

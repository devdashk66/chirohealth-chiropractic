import {
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto px-5 mb-12">
      <div className="flex flex-col lg:flex-row shadow-xl">
        <div className="lg:w-3/5 p-5 py-16 lg:p-10">
          <h2 className="text-3xl font-bold mb-8">Get in touch</h2>
          <form className="space-y-4">
            <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full md:w-1/2 outline-none focus:border-primary p-3 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full md:w-1/2 outline-none focus:border-primary p-3 border border-gray-300 rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full outline-none focus:border-primary p-3 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Message"
              className="w-full outline-none focus:border-primary p-3 border border-gray-300 rounded"
              rows="5"
            />
            <button
              type="submit"
              className="px-5 py-2 bg-primary text-white font-bold rounded"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
        <div className="lg:w-2/5 p-5 py-16 lg:p-10 bg-primary text-white rounded lg:ml-4">
          <h2 className="text-3xl font-bold mb-8">Contact us</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl bg-gray-50 bg-opacity-15 !w-16 h-16 p-4 rounded-full  " />
              <span>Address: 2569 Maple Avenue Stockton, CA 95204</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-2xl bg-gray-50 bg-opacity-15 w-16 h-16 p-4 rounded-full  " />
              <span>Phone: +2 392 3929 210</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl bg-gray-50 bg-opacity-15 w-16 h-16 p-4 rounded-full  " />
              <span>Email: info@yourdomain.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaGlobe className="text-2xl bg-gray-50 bg-opacity-15 w-16 h-16 p-4 rounded-full  " />
              <span>Website: yoursite.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

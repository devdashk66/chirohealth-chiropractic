const BookingForm = () => {
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-primary shadow-md overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="p-8 lg:w-2/3">
            <h2 className="text-white text-xl  mb-6">Booking an Appointment</h2>
            <h3 className="text-white text-3xl font-bold mb-8">
              Free Consultation
            </h3>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <select className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-secondary">
                <option>Select Services</option>
                {/* Add more options as needed */}
              </select>
              <select className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-secondary">
                <option>Select Chiropractor</option>
                {/* Add more options as needed */}
              </select>
              <input
                type="date"
                placeholder="Date"
                className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <input
                type="time"
                placeholder="Time"
                className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="bg-secondary text-white py-3 px-6 rounded font-bold sm:col-span-2 hover:bg-transparent border border-secondary hover:text-secondary duration-200">
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-white p-8 lg:w-1/3 flex flex-col justify-between items-center text-center">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Business Hours
              </h3>
              <p className="text-gray-600 mb-2">
                <span className="font-bold text-primary">Opening Days:</span>
                <br />
                Monday – Friday: 9am to 8pm
                <br />
                Saturday: 9am to 5pm
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-bold text-primary">Vacations:</span>
                <br />
                All Sundays and Official Holidays
              </p>
            </div>
            <div className="w-full mb-5">
              <hr />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary">
                For Emergency Cases
              </h3>
              <p className="text-2xl font-bold text-gray-800">
                (+01) 123 456 7890
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;

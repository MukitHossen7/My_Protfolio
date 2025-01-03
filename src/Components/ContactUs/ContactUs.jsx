import { motion } from "framer-motion";
import { CiLocationOn, CiMail } from "react-icons/ci";

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="py-20 w-10/12 md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:container mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row gap-8 items-center ">
          <div className="w-full lg:w-1/2 ">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-100 font-semibold mb-6 w-full lg:w-2/3">
                I would love to hear from you! Fill out the form below or email
                us directly
              </p>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <CiMail className="text-pink-600 text-4xl" />
                  <div>
                    <h4 className="text-gray-100 text-lg">Email</h4>
                    <p className="text-gray-300 text-sm">
                      hossenmukit7@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CiLocationOn className="text-4xl text-sky-400" />
                  <div>
                    <h4 className="text-gray-100 text-lg">Location</h4>
                    <p className="text-gray-300 text-sm">Naogaon,Dhamoirhat</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 bg-gray-900 shadow-lg rounded-lg px-6 py-6 ">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-3 border border-gray-400  rounded-md bg-gray-900 text-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-100"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 border border-gray-400 rounded-md bg-gray-900 text-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-100"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 mt-4  border border-gray-400 rounded-md bg-gray-900 text-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-100 w-full"
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-400 rounded-md mt-4  bg-gray-900 text-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-100"
                rows="5"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-500 text-white py-3 rounded-md mt-6 font-semibold"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;

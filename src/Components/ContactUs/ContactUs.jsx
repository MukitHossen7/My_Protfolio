import { motion } from "framer-motion";
import contact from "../../../src/assets/images/contact.png";
const ContactUs = () => {
  return (
    <div>
      <div className=" flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" p-6 md:p-10  w-full"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2">
              <motion.img
                src={contact}
                alt="Contact Illustration"
                className=" w-full lg:h-96 object-cover"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </div>

            <div className="w-full lg:w-1/2 bg-gray-900 shadow-lg rounded-lg px-6 py-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-100 font-semibold mb-6">
                I would love to hear from you! Fill out the form below or email
                us directly
              </p>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 border rounded-md bg-gray-900 text-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-100"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="p-3 border rounded-md bg-gray-900 text-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-100"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 border rounded-md mt-4  bg-gray-900 text-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-100"
                  rows="5"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-md mt-6 font-semibold"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;

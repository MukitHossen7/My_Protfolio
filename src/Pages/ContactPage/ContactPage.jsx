import { motion } from "framer-motion";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { MdCall } from "react-icons/md";
const ContactPage = () => {
  return (
    <div className="min-h-screen  text-white flex flex-col items-center px-6 py-10">
      {/* Heading */}
      <motion.h1
        className="text-4xl font-extrabold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h1>

      {/* Contact Info */}

      <motion.div
        className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10 mb-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Phone */}
        <div className="flex items-center space-x-4">
          <MdCall className="text-4xl text-teal-400" />
        </div>

        {/* Location */}
        <div className="flex items-center space-x-4">
          <CiLocationOn className="text-4xl text-sky-400" />
        </div>

        {/* Email */}
        <div className="flex items-center space-x-4">
          <CiMail className="text-pink-600 text-4xl" />
        </div>
      </motion.div>

      {/* Form and Illustration */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl  overflow-hidden">
        {/* Form */}
        <motion.form
          className="flex-1 flex flex-col space-y-6 p-8 bg-gray-900 rounded-xl shadow-lg "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder-gray-400 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder-gray-400 text-white"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder-gray-400 text-white"
          ></textarea>
          <motion.button
            type="submit"
            className="bg-rose-500 hover:bg-rose-600 text-white py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Illustration */}
        <motion.div
          className="flex-1 p-6 hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://via.placeholder.com/500"
            alt="Contact Illustration"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;

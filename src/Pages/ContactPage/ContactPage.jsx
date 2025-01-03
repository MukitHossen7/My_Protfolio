import { motion } from "framer-motion";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import social from "../../../src/assets/images/social-media-carousel-90.png";
const ContactPage = () => {
  return (
    <div className="pt-8 pb-28 w-10/12 md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:container mx-auto">
      {/* Heading */}
      <motion.h1
        className="text-3xl font-semibold  text-center text-gray-100 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h1>

      {/* Contact Info */}

      <motion.div
        className="flex  flex-row justify-evenly"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Phone */}
        <div className="group  flex flex-col items-center relative">
          <MdCall className="text-6xl bg-teal-300/20 p-3 rounded-md text-teal-400 group-hover:translate-y-2 transition-all duration-300" />
          <div className="absolute top-20 opacity-0 group-hover:opacity-100 transition-all duration-300 text-teal-400 text-center">
            <p className="text-lg font-medium text-gray-100">Call Me</p>
            <p className="text-sm text-gray-300">+8801326153447</p>
          </div>
        </div>

        {/* Location */}
        <div className="group flex flex-col items-center relative">
          <CiLocationOn className="text-6xl bg-sky-300/20 rounded-md p-3 text-sky-400 group-hover:translate-y-2 transition-all duration-300" />
          <div className="absolute top-20 opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-100 text-center">
            <p className="text-lg font-medium text-gray-100">Location</p>
            <p className="text-sm text-gray-300">Naogaon,Dhamoirhat</p>
          </div>
        </div>

        {/* Email */}
        <div className="group flex flex-col items-center relative">
          <CiMail className="text-6xl bg-pink-300/20 rounded-md p-3 text-pink-600 group-hover:translate-y-2 transition-all duration-300" />
          <div className="absolute top-20 opacity-0 group-hover:opacity-100 transition-all duration-300  text-center">
            <p className="text-lg font-medium text-gray-100">Email</p>
            <p className="text-sm text-gray-300">hossenmukit7@gmail.com</p>
          </div>
        </div>
      </motion.div>

      {/* Form and Illustration */}
      <div className="flex gap-10 flex-col md:flex-row items-center justify-center w-full  overflow-hidden mt-14">
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
            className="w-full bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-500 text-white py-3 rounded-md mt-6 font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Illustration */}
        <motion.div
          className="flex-1  "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={social}
            alt="Contact Illustration"
            className="w-full h-auto "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;

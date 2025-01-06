import { motion } from "framer-motion";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import social from "../../../src/assets/images/Feedback-amico.svg";
const ContactPage = () => {
  return (
    <div className="pt-8 pb-20 w-10/12 md:w-10/12 lg:w-10/12 xl:container mx-auto">
      {/* Heading */}
      <motion.h1
        className="text-3xl font-semibold  text-center text-gray-100 mb-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h1>
      <motion.p
        className="text-center text-gray-100 mb-10 lg:w-[700px] mx-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Whether you have a question, feedback, or just want to say hello, feel
        free to send me a message. I’ll make sure to respond as soon as
        possible!
      </motion.p>
      {/* Contact Info */}
      <motion.div
        className="flex  flex-row justify-evenly"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Phone */}
        <div className="group flex flex-col items-center relative">
          <MdCall className="text-6xl  bg-teal-900 p-3 rounded-md text-teal-400 group-hover:translate-y-2 transition-all duration-300" />
          <div className="absolute top-20 opacity-0 group-hover:opacity-100 transition-all duration-300 text-teal-400 text-center">
            <p className="text-lg font-medium text-gray-100">Call Me</p>
            <p className="text-sm text-gray-300">+8801326153447</p>
          </div>
        </div>

        {/* Location */}
        <div className="group flex flex-col items-center relative">
          <CiLocationOn className="text-6xl  bg-sky-900  rounded-md p-3 text-sky-400 group-hover:translate-y-2 transition-all duration-300" />
          <div className="absolute top-20 opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-100 text-center">
            <p className="text-lg font-medium text-gray-100">Location</p>
            <p className="text-sm text-gray-300">Naogaon,Dhamoirhat</p>
          </div>
        </div>

        {/* Email */}
        <div className="group flex flex-col items-center relative">
          <CiMail className="text-6xl bg-pink-900 rounded-md p-3 text-white group-hover:translate-y-2 transition-all duration-300" />
          <div className="absolute top-20 opacity-0 group-hover:opacity-100 transition-all duration-300  text-center">
            <p className="text-lg font-medium text-gray-100">Email</p>
            <p className="text-sm text-gray-300">hossenmukit7@gmail.com</p>
          </div>
        </div>
      </motion.div>

      {/* Form and Illustration */}
      <div className="flex gap-10 flex-col md:flex-row lg:flex-row items-center justify-center overflow-hidden mt-24 lg:mt-24">
        {/* Form */}
        <motion.form
          className="w-full lg:w-1/2 space-y-6 p-8 bg-slate-900 rounded-xl shadow-lg "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder-gray-400 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder-gray-400 text-white"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder-gray-400 text-white"
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
          className="w-full md:hidden lg:block lg:w-1/2 "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={social}
            alt="Contact Illustration"
            className="w-full h-full lg:h-[450px] "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;

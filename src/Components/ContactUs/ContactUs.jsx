import toast from "react-hot-toast";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { MdCall } from "react-icons/md";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_EMAIL_KEY);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("🦄 Wow Mail sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error("Failed to send mail");
    }
  };
  return (
    <div
      id="Contacts"
      className="mt-24 mb-20 w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto"
    >
      {/* Heading */}

      {/* Form and Illustration */}
      <div className="flex gap-10 flex-col lg:flex-row  items-center justify-center overflow-hidden">
        {/* Info*/}
        <div className="w-full lg:w-1/2">
          <div className="mb-3">
            <h1 className="text-2xl font-semibold text-gray-50 ">
              Get In Touch
            </h1>
            <span className="block border-b-2 w-14 border-[#3CCF91]"></span>
          </div>
          <p className="text-gray-400 mb-8 mx-auto">
            Have a question or feedback? Drop me a message, and I&apos;ll reply
            promptly
          </p>
          <div className="flex flex-col gap-3">
            {/* Email */}
            <div className="flex items-center gap-5">
              <CiMail className="text-4xl bg-pink-900 rounded-md p-2 text-white " />
              <div className="">
                <p className="text-base font-medium text-gray-50">Email</p>
                <p className="text-sm text-gray-400">hossenmukit7@gmail.com</p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-5">
              <MdCall className="text-4xl bg-teal-900 p-2 rounded-md text-teal-400" />
              <div className="">
                <p className="text-base font-medium text-gray-50">Call Me</p>
                <p className="text-sm text-gray-400">+8801326153447</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5">
              <CiLocationOn className="text-4xl  bg-sky-900  rounded-md p-2 text-sky-400 " />
              <div className=" ">
                <p className="text-base font-medium text-gray-50">Location</p>
                <p className="text-sm text-gray-400">Naogaon,Dhamoirhat</p>
              </div>
            </div>
          </div>
        </div>
        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="w-full lg:w-1/2 space-y-6 p-8 bg-black border border-gray-800 rounded-xl shadow-lg "
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-4 bg-black border border-gray-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#3CCF91] placeholder-gray-400 text-white"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full p-4 bg-black border border-gray-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#3CCF91] placeholder-gray-400 text-white"
          />
          <textarea
            placeholder="Your Message"
            name="message"
            required
            rows="5"
            className="w-full p-4 bg-black border border-gray-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#3CCF91] placeholder-gray-400 text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full border-2 border-[#3CCF91] text-[#3CCF91]  py-3 rounded-md mt-6 font-semibold transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

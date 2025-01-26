import "react-awesome-button/dist/styles.css";
import { Link } from "react-router-dom";
// bg-[#080808]
// eslint-disable-next-line react/prop-types
const Cards = ({ project }) => {
  const { name, image, description, features, live_link, github_link } =
    project || {};
  return (
    <div className="w-full bg-black/20 rounded-md shadow-md overflow-hidden flex flex-col border border-gray-800">
      {/* Image Section */}
      <div className="">
        <img
          src={image}
          alt="Gerez - Car Repair Services"
          className="w-full h-60 object-cover rounded-2xl p-3"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-col justify-between flex-grow px-4 pb-4">
        <div>
          <h3 className="text-lg font-semibold  pb-3 text-gray-100">{name}</h3>
          <p className="text-sm text-gray-400 pb-5">{description}</p>
          <div className="flex flex-wrap gap-2 ">
            {features.map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-[#292929] text-gray-100 rounded text-sm"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-2 mt-7">
          <Link
            to={`${live_link}`}
            target="_blank"
            className="bg-black border-2 border-[#3CCF91] text-[#3CCF91] hover:text-black hover:bg-[#3ccf92d2] hover:transition-shadow px-4 py-2 rounded text-sm hover:font-medium"
          >
            Live Demo
          </Link>
          <Link
            to={`${github_link}`}
            target="_blank"
            href="#"
            className="bg-black border-2 border-[#3CCF91] text-[#3CCF91] hover:text-black hover:bg-[#3ccf92d2] hover:transition-shadow px-4 py-2 rounded text-sm hover:font-medium"
          >
            Github
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;

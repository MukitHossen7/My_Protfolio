import "react-awesome-button/dist/styles.css";
// bg-[#080808]
// eslint-disable-next-line react/prop-types
const Cards = ({ project }) => {
  const { name, image, description, features } = project || {};
  return (
    <div className="w-full bg-black rounded-md shadow-md overflow-hidden flex flex-col border border-gray-800">
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
          <a
            href="#"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm"
          >
            Live Link
          </a>
          <a
            href="#"
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;

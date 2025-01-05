// eslint-disable-next-line react/prop-types
const Cards = ({ project }) => {
  const { name, image, description, features } = project || {};
  return (
    <div>
      <div className="w-full bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
        {/* Image container */}
        <div className="relative h-52 overflow-hidden group">
          <img
            src={image}
            alt="Gerez - Car Repair Services"
            className="w-full h-auto transform group-hover:translate-y-[-74%] transition-transform duration-[3s] ease-in-out"
          />
        </div>

        {/* Card content */}
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-sm text-gray-300 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {features.map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-700 rounded text-sm"
              >
                {feature}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
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
    </div>
  );
};

export default Cards;

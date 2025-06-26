import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BiSolidCategory } from "react-icons/bi";
import { FaHeartbeat } from "react-icons/fa";

const NewPlantCard = ({ item }) => {
  const { _id, name, description, category, healthStatus, image } = item;
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => setExpanded((prev) => !prev);

  const displayedDescription = expanded
    ? description
    : description.length > 150
    ? description.slice(0, 150) + "..."
    : description;

  return (
    <div className="card card-compact bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
      <figure>
        <img
          className="w-full h-[242px] object-cover"
          src={image}
          alt={name || "Plant image"}
          loading="lazy"
        />
      </figure>
      <div className="card-body">
        <div className="flex gap-8 mb-2">
          <h1 className="flex items-center gap-2 text-base font-semibold text-green-600">
            <BiSolidCategory className="text-xl" />
            {category}
          </h1>
          <h1 className="flex items-center gap-2 text-base font-semibold text-red-500">
            <FaHeartbeat className="text-xl" />
            {healthStatus}
          </h1>
        </div>

        <h2 className="card-title font-bold text-lg">{name}</h2>

        <p className="text-sm mt-1 text-gray-700">
          {displayedDescription}{" "}
          {description.length > 150 && (
            <button
              onClick={toggleDescription}
              className="text-green-600 font-semibold hover:underline focus:outline-none"
              aria-expanded={expanded}
              aria-controls={`desc-${_id}`}
            >
              {expanded ? "See less" : "See more"}
            </button>
          )}
        </p>

        <div className="flex justify-end mt-4">
          <Link to={`/plantViewDetails/${_id}`}>
            <button className="btn bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors duration-200">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

NewPlantCard.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    healthStatus: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewPlantCard;

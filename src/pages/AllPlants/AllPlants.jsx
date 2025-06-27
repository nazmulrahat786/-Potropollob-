import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllArtCraftItem = ({ items }) => {
  const {
    _id,
    name,
    category,
    healthStatus,
    wateringFrequency,
    photoURL,
    image,
  } = items;

  return (
    <tr className="hover:bg-cyan-50 transition-colors duration-200 cursor-pointer">
      {/* Name + Image */}
      <td className="px-6 py-4 whitespace-nowrap max-w-xs">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="mask mask-squircle w-14 h-14 overflow-hidden border border-gray-300 shadow-sm">
              <img
                src={photoURL || image}
                alt={name}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
          <p className="font-bold text-gray-900 text-lg">{name}</p>
        </div>
      </td>

      {/* Category + Watering Frequency */}
      <td className="px-6 py-4 whitespace-normal max-w-xs">
        <p className="font-semibold text-gray-700 capitalize">{category}</p>
        <p className="text-sm text-slate-500 mt-1">
          Water every <span className="font-medium">{wateringFrequency}</span> day(s)
        </p>
      </td>

      {/* Health Status */}
      <td className="px-6 py-4 whitespace-nowrap max-w-[140px]">
        <p className="inline-block bg-green-600 text-white text-xs font-semibold rounded-full px-3 py-1 select-none">
          Health: {healthStatus}
        </p>
      </td>

      {/* View Details Button */}
      <td className="px-6 py-4 text-right whitespace-nowrap">
        <Link to={`/plantViewDetails/${_id}`}>
          <button
            className="btn bg-green-500  hover:bg-white hover:text-green-500 text-white text-sm lg:text-base px-4 py-2 rounded shadow-md transition-colors duration-200"
            aria-label={`View details of ${name}`}
          >
            View Details
          </button> 
        </Link>
      </td>
    </tr>
  );
};

export default AllArtCraftItem;

AllArtCraftItem.propTypes = {
  items: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string,
    healthStatus: PropTypes.string,
    wateringFrequency: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    photoURL: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

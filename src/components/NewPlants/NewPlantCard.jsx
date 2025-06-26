import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const NewPlantCard = ({ item }) => {
  const navigate = useNavigate();
  const { _id, name, description, image } = item;

  // Truncate description to 10 chars + "..." if longer
  const displayedDescription =
    description && description.length > 50
      ? description.slice(0, 50) + "....."
      : description || "No description available.";

  return (
    <div
      className="border rounded-lg shadow-md flex flex-col"
      style={{ minHeight: "340px" }}
    >
      <img
        src={image}
        alt={name || "Plant image"}
        className="h-40 w-full object-cover rounded-t-lg"
        loading="lazy"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg text-slate-500 font-semibold mb-1">{name}</h3>
       
        <p className="text-gray-600 flex-grow text-sm">{displayedDescription}</p>
        <button
          onClick={() => navigate(`/plantViewDetails/${_id}`)}
          className="mt-4 bg-green-500 text-white py-2 rounded hover:bg-white hover:text-green-500 border-2 border-green-500 transition"
        >
          See More
        </button>
      </div>
    </div>
  );
};

NewPlantCard.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    category: PropTypes.string.isRequired,
    healthStatus: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewPlantCard;

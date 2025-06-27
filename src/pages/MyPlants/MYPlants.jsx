import PropTypes from "prop-types";
import { MdOutlineWaterDrop } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyPlantItem = ({ item, myItems, setMyItems }) => {
  const {
    _id,
    image,
    name,
    category,
    careLevel,
    wateringFrequency,
    lastWateredDate,
    nextWateringDate,
    healthStatus,
    userName,
    userEmail,
    description,
  } = item;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to delete?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#dc2626",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://potropollob-server-side.vercel.app/addplants/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "The plant has been removed.", "success");
              const remaining = myItems.filter((itm) => itm._id !== id);
              setMyItems(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-6 border rounded-xl shadow-md bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Image */}
        <div className="lg:w-2/5 h-64 lg:h-auto relative group flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
          />
          <div className="absolute top-4 left-4 bg-green-700 text-white text-xs sm:text-sm font-semibold uppercase rounded-full px-3 py-1 shadow-lg">
            {category}
          </div>
        </div>

        {/* Details */}
        <div className="lg:w-3/5 p-6 space-y-4 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 break-words">{name}</h2>
            <p className="text-gray-600 mt-2 break-words">{description}</p>

            <div className="mt-4 space-y-1 text-sm sm:text-base text-gray-700">
              <p>
                <strong>Care Level:</strong> {careLevel}
              </p>
              <p className="flex items-center gap-1">
                <MdOutlineWaterDrop className="text-blue-500" />
                Water every {wateringFrequency} day(s)
              </p>
              <p>
                <strong>Last Watered:</strong> {lastWateredDate}
              </p>
              <p>
                <strong>Next Watering:</strong> {nextWateringDate}
              </p>
              <p>
                <strong>Health Status:</strong> {healthStatus}
              </p>
            </div>

            <div className="mt-4 space-y-1 text-sm text-gray-800">
              <p>
                <strong>User Name:</strong> {userName}
              </p>
              <p>
                <strong>User Email:</strong> {userEmail}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
            <Link to={`/dashboard/update-plant/${_id}`}>
              <button className="bg-green-600 text-white py-2 px-5 rounded-lg font-medium hover:bg-green-700 transition w-full sm:w-auto">
                Update
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="bg-red-600 text-white py-2 px-5 rounded-lg font-medium hover:bg-red-700 transition w-full sm:w-auto"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlantItem;

MyPlantItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    careLevel: PropTypes.string.isRequired,
    wateringFrequency: PropTypes.string.isRequired,
    lastWateredDate: PropTypes.string.isRequired,
    nextWateringDate: PropTypes.string.isRequired,
    healthStatus: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  myItems: PropTypes.array.isRequired,
  setMyItems: PropTypes.func.isRequired,
};

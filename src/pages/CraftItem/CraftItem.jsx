import { FaHeartbeat } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const CraftItem = ({ item }) => {
    const { _id, name, description, category, healthStatus, image } = item;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img className="w-full h-[242px] object-cover" src={image} alt={name} />
            </figure>
            <div className="card-body">
                <div className="flex gap-8">
                    <h1 className="flex items-center gap-2 text-base font-bold">
                        <span className="text-green-600 text-xl"><BiSolidCategory /></span> {category}
                    </h1>
                    <h1 className="flex items-center gap-2 text-base font-bold">
                        <span className="text-red-500 text-xl"><FaHeartbeat /></span> {healthStatus}
                    </h1>
                </div>

                <h2 className="card-title font-bold mt-2">{name}</h2>

                {
                    description.length > 150
                        ? <p>{description.slice(0, 150)}<span className="text-red-500"> ...See more</span></p>
                        : <p>{description}</p>
                }

                <div className="flex justify-end mt-4">
                    <Link to={`/plantViewDetails/${_id}`}>
                        <div className="card-actions">
                            <button className="btn bg-green-500 text-white">View Details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CraftItem;

CraftItem.propTypes = {
    item: PropTypes.object.isRequired
};

import { useEffect, useState } from "react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"

const SubcategoryItem = ({ item }) => {
    const [subCategoryItems, setSubCategoryItems] = useState([]);
    const { _id, item_name, short_description, price, rating, stock, image } = subCategoryItems;
    const [loading5, setLoading5] = useState(true);

    useEffect(() => {
        if(item){
            setSubCategoryItems(item);
            setLoading5(false);
        }
    }, [item])

    if(loading5){
        return <p className="text-center"><span className="loading loading-spinner loading-lg "></span></p>
    }

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="w-full h-[242px] object-cover" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex gap-8">
                    <h1><span className="font-bold text-base">Stock:</span> {stock}</h1>
                    <h1 className="flex items-center gap-2 text-base font-bold"><span className="text-cyan-700 font-bold text-xl"><FaStar /></span> {rating}</h1>
                </div>
                <h2 className="card-title font-bold mt-2">{item_name}</h2>
                {/* <p>{description}</p> */}
                {
                    short_description.length > 150
                        ? <p>{short_description.slice(1, 150)} <span className="text-red-500">See more .....</span></p>
                        : <p>{short_description}</p>
                }

                <div className="flex justify-between mt-4">
                    <h3 className="flex items-center gap-2 text-2xl font-bold text-red-500"><span className="text-3xl"><BiSolidDollarCircle /></span> {price}</h3>
                    {/* <Link to={`/craftViewDetails/${_id}`}>
                        <div className="card-actions">
                            <button className="btn bg-cyan-700 text-white">View Details</button>
                        </div>
                    </Link> */}
                    <Link to={`/subCategoryDetails/${_id}`}>
                        <div className="card-actions">
                            <button className="btn bg-cyan-700 text-white">View Details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SubcategoryItem;

SubcategoryItem.propTypes = {
    item: PropTypes.object.isRequired
}
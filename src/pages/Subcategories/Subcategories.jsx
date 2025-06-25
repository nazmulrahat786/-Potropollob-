import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Subcategories = ({ subcategory }) => {
    const [subcategoryItem, setSubCategoryItem] = useState([]);
    const { subcategory_name, description, image } = subcategoryItem;
    const [loading, setLoading] = useState(true);
    const { subCategoryData, setSubCategoryData } = useContext(AuthContext);
    // console.log(subCategoryData);
    // console.log(subcategory);

    useEffect(() => {
        if (subcategory) {
            setSubCategoryData(subcategory);
            if (subCategoryData) {
                setSubCategoryItem(subcategory);
                setLoading(false);
                console.log(subCategoryData);
            }
        }
    }, [setSubCategoryData, subCategoryData, subcategory])

    if (loading) {
        return <p className="text-center"><span className="loading loading-spinner loading-lg "></span></p>
    }

    return (
        <div className="card bg-base-100 shadow-xl w-full image-full">
            <figure><img className="w-full" src={image} alt={subcategory_name} /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl text-white font-bold">{subcategory_name}</h2>
                {
                    description.length > 120
                        ? <p>{description.slice(0, 120)}.....</p>
                        : <p>{description}</p>
                }
                <Link to={`/subCategoryItems/${subcategory_name}`}>
                    <div className="card-actions justify-end mt-4">
                        <button className="btn bg-amber-500 text-white border-none">View Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Subcategories;

Subcategories.propTypes = {
    subcategory: PropTypes.object.isRequired
};

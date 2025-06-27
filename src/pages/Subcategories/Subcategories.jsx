import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Loading from '../../../public/Loading';

const Subcategories = ({ subcategory }) => {
    const [subcategoryItem, setSubCategoryItem] = useState([]);
    const { subcategory_name, description, image } = subcategoryItem;
    const [loading, setLoading] = useState(true);
    const { subCategoryData, setSubCategoryData } = useContext(AuthContext);
 

    useEffect(() => {
        if (subcategory) {
            setSubCategoryData(subcategory);
            if (subCategoryData) {
                setSubCategoryItem(subcategory);
                setLoading(false);
             
            }
        }
    }, [setSubCategoryData, subCategoryData, subcategory])

    if (loading) {
        return  <div className="flex justify-center items-center py-5 px-5">
               <Loading></Loading>
            </div>
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

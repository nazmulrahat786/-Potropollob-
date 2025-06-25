import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useLoaderData } from "react-router-dom";
import SubcategoryItem from "../SubcategoryItem/SubcategoryItem";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SubcategoryItems = () => {
    const { subCategoryData } = useContext(AuthContext);
    const subcategoryItems = useLoaderData();
    const [categoryItems, setCategoryItems] = useState([]);
    const [loading6, setLoading6] = useState(true);

    console.log(subcategoryItems);
    console.log(subCategoryData);

    const bgImage = {
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7))",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    useEffect(() => {
        if (subcategoryItems) {
            setCategoryItems(subcategoryItems);
            setLoading6(false);
        }
    }, [subCategoryData, subcategoryItems])


    if (loading6) {
        return <p className="text-center"><span className="loading loading-spinner loading-lg "></span></p>
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div style={bgImage} className="py-36">
                    <div className="w-[70%] mx-auto text-center text-white space-y-8">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Under Subcategory All Data Here</h1>
                    </div>
                </div>
                <div className="w-[90%] md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
                    {
                        categoryItems.map(item => <SubcategoryItem
                            key={item._id}
                            item={item}
                        ></SubcategoryItem>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SubcategoryItems;
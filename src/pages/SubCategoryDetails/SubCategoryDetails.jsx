import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FcProcess } from "react-icons/fc";
import { MdDashboardCustomize } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { BiSolidDollarCircle } from "react-icons/bi";

const SubCategoryDetails = () => {
    const subCategoryData = useLoaderData();
    // const [data, setData] = useState([]);

    console.log(subCategoryData);

    const { image, item_name, subcategory_name, short_description, price, rating, customization, processing_time, stockStatus } = subCategoryData;


    return (
        <div>
            <Navbar></Navbar>
            <div className="py-12 md:py-16">
                <div className="w-[90%] md:w-[85%] lg:w-[65%] mx-auto shadow-xl border rounded-lg">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="lg:w-[45%]">
                            <img className="w-full h-full object-cover rounded-t-lg lg:rounded-l-lg" src={image} alt="" />
                        </div>
                        <div className="py-4 px-4 lg:w-[55%]">
                            <div className="flex flex-col md:flex-row gap-2 md:gap-8 mb-2">
                                <h1><span className="font-bold text-base">Stock:</span> {stockStatus}</h1>
                                <h1 className="flex items-center gap-2 text-base font-bold"><span className="text-cyan-700 font-bold text-xl"><FcProcess /></span> {processing_time} days</h1>
                                <h1 className="flex items-center gap-2 text-base font-bold"><span className="text-teal-700 font-bold text-xl"><MdDashboardCustomize /></span> {customization}</h1>
                                <h1 className="flex items-center gap-2 text-base font-bold"><span className="text-cyan-700 font-bold text-xl"><FaStar /></span> {rating}</h1>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold">{item_name}</h2>
                                <p>{short_description}</p>
                                {/* <h2 className="text-base font-bold"><span className="text-cyan-700">User Name:</span> {userName}</h2>
                                <h2 className="text-base font-bold"><span className="text-teal-700">User email:</span> {userEmail}</h2> */}
                                <div className="flex justify-between pr-4 pt-4">
                                    <h3 className=" bg-cyan-700 py-1 px-2 font-semibold text-sm text-white rounded">{subcategory_name}</h3>
                                    <h3 className="flex items-center gap-2 text-2xl font-bold text-red-500"><span className="text-3xl"><BiSolidDollarCircle /></span> {price}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SubCategoryDetails;
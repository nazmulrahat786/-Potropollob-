import { useContext } from "react";
import CraftItem from "../CraftItem/CraftItem";
import PropTypes from "prop-types";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../../../public/Loading";

const CraftItems = ({ myItems }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return (
            <div className="flex justify-center items-center py-5 px-5">
               <Loading></Loading>
            </div>
        )
    }

    return (
        <div className="w-[90%] md:max-w-6xl mx-auto my-16">
            <h2 className="text-4xl font-bold text-center my-8">New Plants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {
  myItems.slice(-6).reverse().map(item => (
    <CraftItem
      key={item._id}
      item={item}
    />
  ))
}


            </div>
        </div>
    );
};

export default CraftItems;

CraftItems.propTypes = {
    myItems: PropTypes.array.isRequired
}
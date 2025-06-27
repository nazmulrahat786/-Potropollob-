import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import Loading from "../../public/Loading";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    if(loading){
      
        return  <div className="flex justify-center items-center py-5 px-5">
               <Loading></Loading>
            </div>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate> ;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.element.isRequired
}
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    if(loading){
        console.log(loading);
        return <p className="text-center mt-12"><span className="loading loading-spinner loading-lg"></span></p>
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
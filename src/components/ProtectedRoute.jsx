import {AuthContext} from "../contexts/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);
    //check login
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    //if yes then return children
    return children;
};

export default ProtectedRoute;
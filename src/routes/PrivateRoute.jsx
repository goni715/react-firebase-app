import {Navigate} from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();

    if(loading){
        return "Loading..."; //we have to show loading for better user experience
    }
    else{
        if(user?.email){
            return children;
        }
        else{
            return <Navigate to="/login" />
        }
    }
};

export default PrivateRoute;
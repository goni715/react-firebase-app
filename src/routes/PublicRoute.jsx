import {Navigate} from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";


const PublicRoute = ({children}) => {
    const {user}= useAuth();

    if(user?.email ){
        return (<Navigate to="/" />);
    }else{
        return children;
    }

};

export default PublicRoute;
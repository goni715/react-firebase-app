import {createContext} from "react";
import useFirebase from "../hooks/useFirebase.jsx";

export const AuthContext = createContext();
const AuthContextProvider = ({children}) => {
    const data = useFirebase();
    return (
        <>
            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export default AuthContextProvider;
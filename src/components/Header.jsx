import {Link} from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";

const Header = () => {
    const {user, logout} = useAuth();
    return (
        <>
           <div className="px-24 py-6 flex gap-6">
               <Link className="px-3 py-2 text-sm bg-gray-500 hover:bg-gray-700 text-white rounded-md" to="/">Home</Link>
               <Link className="px-3 py-2 text-sm bg-yellow-500 hover:bg-yellow-700 text-white rounded-md" to="/shipping">Shipping</Link>

               {
                   !user?.email && (
                       <>
                           <Link to="/login" className="px-3 py-2 text-sm bg-blue-500 hover:bg-blue-700 text-white rounded-md">Login</Link>
                           <Link className="px-3 py-2 text-sm bg-rose-500 hover:bg-rose-700 text-white rounded-md" to="/register">Register</Link>
                       </>
                   )
               }
               <span>{user?.displayName}</span>
               {
                   user?.email && (
                       <button
                           onClick={logout}
                           className="px-3 py-2 text-sm bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">Logout</button>
                   )
               }
           </div>
        </>
    );
};

export default Header;
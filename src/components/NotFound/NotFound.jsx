
import {Link} from "react-router-dom";


const NotFound = () => {
    return (
        <>
            <div className="px-24 py-6 flex gap-6">
                <Link className="px-3 py-2 text-sm bg-gray-500 hover:bg-gray-700 text-white rounded-md"
                      to="/">Go Back To Home</Link>
            </div>
            <div className="px-24 py-6">
                <h1>Not Found Page</h1>
            </div>
        </>
    );
};

export default NotFound;
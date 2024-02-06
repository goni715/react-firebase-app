import Header from "../Header.jsx";
import {Link, useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth.jsx";
import {useEffect} from "react";


const Register = () => {
    const {
        name,
        setName,
        regEmail,
        setRegEmail,
        regPassword,
        setRegPassword,
        regLoading,
        handleCreateUserWithEmailAndPassword,
        error,
        success
    } = useAuth();

    const navigate = useNavigate();


    useEffect(() => {
        if(success){
           navigate("/")
        }
    }, [success, navigate]);


    const handleSubmit = (e) => {
        e.preventDefault();
        handleCreateUserWithEmailAndPassword()
    }


    return (
        <>
            <Header/>
            <div className="px-24 py-6">
                <form onSubmit={handleSubmit} className="w-1/2 px-28">
                    <h3 className="text-blue-500 text-2xl font-bold">Please Register</h3>
                    <div className="flex flex-col gap-6 py-5">
                        <div>
                            <label className="inline-block pb-2 text-gray-800" htmlFor="email">Name</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full focus:outline-none border border-gray-300 px-4 py-2 rounded-lg"
                                type="text"
                                id="email"
                                required
                            />
                        </div>
                        <div>
                            <label className="inline-block pb-2 text-gray-800" htmlFor="email">Email</label>
                            <input
                                value={regEmail}
                                onChange={(e) => setRegEmail(e.target.value)}
                                className="w-full focus:outline-none border border-gray-300 px-4 py-2 rounded-lg"
                                type="email"
                                id="email"
                                required
                            />
                        </div>
                        <div>
                            <label className="inline-block pb-2 text-gray-800" htmlFor="password">Password</label>
                            <input
                                value={regPassword}
                                onChange={(e) => setRegPassword(e.target.value)}
                                className="w-full focus:outline-none border border-gray-300 px-4 py-2 rounded-lg"
                                type="password"
                                id="password"
                                required
                            />
                        </div>
                    </div>
                    <div className="text-red-500 py-4">
                        {error}
                    </div>

                    <div className="flex flex-col gap-5 flex-wrap">

                        <button
                            disabled={regLoading}
                            className="bg-blue-500 hover:bg-blue-700 px-3 py-2 text-white font-bold text-md rounded-md max-[370px]:mt-3">
                            {regLoading ? "Processing..." : "Register"}
                        </button>

                        <Link className="text-blue-500 hover:text-blue-700 hover:underline duration-300" to="/login">Already have an account, Please Login</Link>

                    </div>
                </form>
            </div>

        </>
    );
};

export default Register;
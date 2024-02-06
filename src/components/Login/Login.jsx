import Header from "../Header.jsx";
import {Link} from "react-router-dom";
import useAuth from "../../hooks/useAuth.jsx";


const Login = () => {
    const {email, setEmail, password, setPassword,loginLoading, error,handleGoogleSignIn, handleGithubSignIn, handleSignInWithEmailAndPassword} = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignInWithEmailAndPassword();
    }


    return (
        <>
            <Header/>
            <div className="px-24 py-6">
                <form onSubmit={handleSubmit} className="w-1/2 px-28">
                    <h3 className="text-blue-500 text-2xl font-bold">Please Login</h3>
                    <div className="flex flex-col gap-6 py-5">
                        <div>
                            <label className="inline-block pb-2 text-gray-800" htmlFor="email">Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full focus:outline-none border border-gray-300 px-4 py-2 rounded-lg"
                                type="email"
                                id="email"
                                required
                            />
                        </div>
                        <div>
                            <label className="inline-block pb-2 text-gray-800" htmlFor="password">Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                            disabled={loginLoading}
                            className="bg-blue-500 hover:bg-blue-700 px-3 py-2 text-white font-bold text-md rounded-md max-[370px]:mt-3">
                            {loginLoading ? "Processing..." : "Login"}
                        </button>

                        <Link className="text-blue-500 hover:text-blue-700 hover:underline duration-300" to="/register">Create
                            an account, Please Register</Link>

                    </div>
                </form>

                <div className="px-28 mt-8">
                    <button
                        onClick={handleGoogleSignIn}
                        className="bg-green-500 hover:bg-green-700 px-3 py-2 text-white font-bold text-md rounded-md max-[370px]:mt-3"
                    >Google Sign in
                    </button>
                    <br/>
                    <br/>
                    <button
                        onClick={handleGithubSignIn}
                        className="bg-gray-500 hover:bg-gray-700 px-3 py-2 text-white font-bold text-md rounded-md max-[370px]:mt-3"
                    >
                        Login With Github
                    </button>

                </div>
            </div>


        </>
    );
};

export default Login;
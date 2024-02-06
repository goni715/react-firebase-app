import Header from "../Header.jsx";
import useAuth from "../../hooks/useAuth.jsx";


const Home = () => {
    const {user} = useAuth();
    return (
        <>
         <Header/>
            <div className="px-24 py-6">
                <h1>Home Page</h1>
            </div>

            <div className="px-24 py-6">
                <div className="px-28 mt-8">
                    <div className="mt-6">
                        {
                            user?.email && (
                                <div>
                                    <h3>Welcome {user?.displayName}</h3>
                                    <h4 className="mb-5">Your Email Address is {user?.email}</h4>
                                    <img src={user?.photoURL} alt=""/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
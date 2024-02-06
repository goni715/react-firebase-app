import Header from "../Header.jsx";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import useAuth from "../../hooks/useAuth.jsx";


const Shipping = () => {
    const [error, setError] = useState("");
    const {user} = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        alert("Hello")
        console.log(data)
    }




    return (
        <>
            <Header/>
            <div className="px-24 py-6">
                <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 px-28">
                    <h3 className="text-blue-500 text-2xl font-bold">Shipping Information</h3>
                    <div className="flex flex-col gap-6 py-5">
                        <div>
                            <label className="inline-block pb-2 text-gray-800" htmlFor="email">Name</label>
                            <input
                                defaultValue={user?.displayName}
                                {...register('name')}
                                className="w-full focus:outline-none border border-gray-300 px-4 py-2 rounded-lg"
                                type="text"
                                id="email"
                            />
                        </div>
                        <div>
                            <label className="inline-block pb-2 text-gray-800" htmlFor="email">Email</label>
                            <input
                                {...register('email', { required: true })}
                                className="w-full focus:outline-none border border-gray-300 px-4 py-2 rounded-lg"
                                type="email"
                                id="email"
                            />
                        </div>
                        <div>
                            <label className="inline-block pb-2 text-gray-800" htmlFor="password">Password</label>
                            <input
                                {...register('password', { required: true })}
                                className="w-full focus:outline-none border border-gray-300 px-4 py-2 rounded-lg"
                                type="password"
                                id="password"
                            />
                        </div>
                    </div>
                    <div className="text-red-500 py-4">
                        {error}
                        {errors.email && <p>Please enter number for age.</p>}
                    </div>
                    <div className="flex flex-col gap-5 flex-wrap">

                        <button
                            className="bg-blue-500 hover:bg-blue-700 px-3 py-2 text-white font-bold text-md rounded-md max-[370px]:mt-3">
                            Continue
                        </button>


                    </div>
                </form>
            </div>

        </>
    );
};

export default Shipping;
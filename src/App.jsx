import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Shipping from "./components/Shipping/Shipping.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import PublicRoute from "./routes/PublicRoute.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

const App = () => {
    return (
        <>
           <BrowserRouter>
               <Routes>
                   <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}/>
                   <Route path="/login" element={<PublicRoute><Login/></PublicRoute>}/>
                   <Route path="/register" element={<PublicRoute><Register/></PublicRoute>}/>
                   <Route path="/shipping" element={<PrivateRoute><Shipping/></PrivateRoute>}/>
                   <Route path="*" element={<NotFound/>}/>
               </Routes>
           </BrowserRouter>
        </>
    );
};

export default App;
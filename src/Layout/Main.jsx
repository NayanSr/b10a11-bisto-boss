import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className=" min-h-screen flex flex-col">
            <Navbar/>
            <div className="flex-1">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;
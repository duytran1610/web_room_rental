import Header from "./Header";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Home = () => {
    return (
        <div className="w-full m-auto h-full flex flex-col items-center">
            <Header />
            <Navigation />
            <div className="w-1100 flex flex-col items-center justify-center border border-red-500 mt-3">
                <Outlet />
            </div>
        </div>
    );
}

export default Home;
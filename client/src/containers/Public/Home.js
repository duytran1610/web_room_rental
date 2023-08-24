import Header from "./Header";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Home = () => {
    return (
        <div className="w-full m-auto h-full flex flex-col items-center">
            <Header />
            <Navigation />
            <div className="w-4/5 lg:w-3/5 flex flex-col items-start justify-center mt-3">
                <Outlet />
            </div>
        </div>
    );
}

export default Home;
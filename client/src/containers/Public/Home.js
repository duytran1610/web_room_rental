import { Component } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

class Home extends Component {

    render() {
        return (
            <div className="w-full m-auto h-full flex flex-col items-center border border-red-500">
                <Header />
                <Navigation />
                <div className="w-1100 flex flex-col items-center justify-center mt-4">
                    <Outlet />
                </div>
            </div>
        );
    }
}

export default Home;
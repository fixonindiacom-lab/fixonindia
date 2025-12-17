import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Layout.css";

const PageLayout = () => {
    return (
        <>
            <Navbar />
            <main className="page-content">
                <Outlet />
            </main>
            <Footer/>
        </>
    );
};

export default PageLayout;

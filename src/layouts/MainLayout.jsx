import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ParticlesComponent from "../components/Particle";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <ParticlesComponent id="particles" />
        </>
    );
};

export default MainLayout;
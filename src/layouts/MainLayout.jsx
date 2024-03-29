import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ParticlesComponent from "../components/Particle";
import ShootingStars from "../components/ShootingStars";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <ShootingStars />
            <ParticlesComponent id="particles" />
        </>
    );
};

export default MainLayout;
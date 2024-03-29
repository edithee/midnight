import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// import { useEffect, useMemo, useState } from "react";

const Hero = ({
    title = 'Default Title if no parsed',
    subtitle = 'Default SubTitle if no parsed',
}) => {


    return (
        // {/* <!-- Hero --> */ }
        <>

            < section className="bg-indigo-700 py-20 mb-4 opacity-80" >

                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center "
                >
                    <div className="text-center">
                        <h1
                            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
                        >
                            {title}
                        </h1>
                        <p className="my-4 text-xl text-white">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Hero;
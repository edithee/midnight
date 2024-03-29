import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// import { useEffect, useMemo, useState } from "react";
import Particle from "./Particle";
import ParticlesComponent from "./Particle";

const Hero = ({
    title = 'Default Title if no parsed',
    subtitle = 'Default SubTitle if no parsed',
}) => {

    //     const [init, setInit] = useState(false);

    //     // this should be run only once per application lifetime
    //     useEffect(() => {
    //         initParticlesEngine(async (engine) => {
    //             // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    //             // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    //             // starting from v2 you can add only the features you need reducing the bundle size
    //             //await loadAll(engine);
    //             //await loadFull(engine);
    //             await loadSlim(engine);
    //             //await loadBasic(engine);
    //         }).then(() => {
    //             setInit(true);
    //         });
    //     }, []);

    //     const particlesLoaded = (container) => {
    //         console.log(container);
    //     };

    //     const options = useMemo(
    //         () => ({
    //             background: {
    //                 color: {
    //                     value: "#0d47a1",
    //                 },
    //             },
    //             fpsLimit: 120,
    //             interactivity: {
    //                 events: {
    //                     onClick: {
    //                         enable: true,
    //                         mode: "push",
    //                     },
    //                     onHover: {
    //                         enable: true,
    //                         mode: "repulse",
    //                     },
    //                 },
    //                 modes: {
    //                     push: {
    //                         quantity: 4,
    //                     },
    //                     repulse: {
    //                         distance: 200,
    //                         duration: 0.4,
    //                     },
    //                 },
    //             },
    //             particles: {
    //                 color: {
    //                     value: "#ffffff",
    //                 },
    //                 links: {
    //                     color: "#ffffff",
    //                     distance: 150,
    //                     enable: true,
    //                     opacity: 0.5,
    //                     width: 1,
    //                 },
    //                 move: {
    //                     direction: "none",
    //                     enable: true,
    //                     outModes: {
    //                         default: "bounce",
    //                     },
    //                     random: false,
    //                     speed: 6,
    //                     straight: false,
    //                 },
    //                 number: {
    //                     density: {
    //                         enable: true,
    //                     },
    //                     value: 80,
    //                 },
    //                 opacity: {
    //                     value: 0.5,
    //                 },
    //                 shape: {
    //                     type: "circle",
    //                 },
    //                 size: {
    //                     value: { min: 1, max: 5 },
    //                 },
    //             },
    //             detectRetina: true,
    //         }),
    //         [],
    //     );

    //     tsParticles.load("tsparticles", {
    //   fpsLimit: 60,
    //   background: {
    //     color: "#000"
    //   },
    //   interactivity: {
    //     events: {
    //       onClick: { enable: true, mode: "push" },
    //       onHover: {
    //         enable: true,
    //         mode: "repulse",
    //         parallax: { enable: false, force: 60, smooth: 10 }
    //       },
    //       resize: true
    //     },
    //     modes: {
    //       push: { quantity: 4 },
    //       repulse: { distance: 200, duration: 0.4 }
    //     }
    //   },
    //   particles: {
    //     color: { value: "#ffffff" },
    //     move: {
    //       direction: "none",
    //       enable: true,
    //       outModes: "out",
    //       random: false,
    //       speed: 2,
    //       straight: false
    //     },
    //     number: {
    //       density: {
    //         enable: true,
    //         area: 800
    //       },
    //       value: 80
    //     },
    //     opacity: {
    //       animation: {
    //         enable: true,
    //         speed: 0.05,
    //         sync: true,
    //         startValue: "max",
    //         count: 1,
    //         destroy: "min"
    //       },
    //       value: {
    //         min: 0,
    //         max: 0.5
    //       }
    //     },
    //     shape: {
    //       type: "circle"
    //     },
    //     size: {
    //       value: { min: 1, max: 5 }
    //     }
    //   }
    // });




    return (
        // {/* <!-- Hero --> */ }
        <>

            < section className="bg-indigo-700 py-20 mb-4" >

                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
                >
                    <div className="text-center">
                        <h1
                            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
                        >


                            {/* Become a React Dev */}
                            {title}
                        </h1>
                        <p className="my-4 text-xl text-white">
                            {/* Find the React job that fits your skills and needs */}
                            {subtitle}
                        </p>
                    </div>
                </div>
                <div>
                    <ParticlesComponent id="particles" />

                </div>
            </section >
        </>
    );
};

export default Hero;
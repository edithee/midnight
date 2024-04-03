import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
//import { loadStarsPreset } from "@tsparticles/preset-stars";



const HeroGraph = (props, { title = 'Default Title if no parsed',
    subtitle = 'Default SubTitle if no parsed', }) => {



    const [init, setInit] = useState(false);
    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);

            // await engine.addPreset("stars", options, refresh);

            await loadSlim(engine);
            // await loadBasic(engine);
            // await loadStarsPreset(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    // const options = useMemo(
    //     () => ({
    //         // preset: "stars",
    //         fullScreen: {
    //             enable: false,
    //             zIndex: -2,
    //         },

    //         "particles": {
    //             "number": {
    //                 "value": 10,
    //                 "density": {
    //                     "enable": false,
    //                     "value_area": 800
    //                 }
    //             },
    //             "color": {
    //                 "value": "#fff"
    //             },
    //             "shape": {
    //                 "type": "triangle",
    //                 "options": {
    //                     "sides": 5
    //                 }
    //             },
    //             "opacity": {
    //                 "value": 0.8,
    //                 "random": false,
    //                 "anim": {
    //                     "enable": false,
    //                     "speed": 1,
    //                     "opacity_min": 0.1,
    //                     "sync": false
    //                 }
    //             },
    //             "size": {
    //                 "value": 4,
    //                 "random": false,
    //                 "anim": {
    //                     "enable": false,
    //                     "speed": 40,
    //                     "size_min": 0.1,
    //                     "sync": false
    //                 }
    //             },
    //             "rotate": {
    //                 "value": 0,
    //                 "random": true,
    //                 "direction": "clockwise",
    //                 "animation": {
    //                     "enable": true,
    //                     "speed": 5,
    //                     "sync": false
    //                 }
    //             },
    //             "line_linked": {
    //                 "enable": true,
    //                 "distance": 600,
    //                 "color": "#ffffff",
    //                 "opacity": 0.4,
    //                 "width": 2
    //             },
    //             links: {
    //                 color: "#FFFFFF",
    //                 distance: 150,
    //                 enable: false,
    //                 opacity: 0.3,
    //                 width: 1,
    //             },
    //             "move": {
    //                 "enable": true,
    //                 "speed": 2,
    //                 "direction": "none",
    //                 "random": false,
    //                 "straight": false,
    //                 "out_mode": "out",
    //                 "attract": {
    //                     "enable": false,
    //                     "rotateX": 600,
    //                     "rotateY": 1200
    //                 }
    //             }
    //         },
    //         "interactivity": {
    //             "events": {
    //                 "onhover": {
    //                     "enable": true,
    //                     "mode": ["grab"]
    //                 },
    //                 "onclick": {
    //                     "enable": false,
    //                     "mode": "bubble"
    //                 },
    //                 "resize": true
    //             },
    //             "modes": {
    //                 "grab": {
    //                     "distance": 400,
    //                     "line_linked": {
    //                         "opacity": 1
    //                     }
    //                 },
    //                 "bubble": {
    //                     "distance": 400,
    //                     "size": 40,
    //                     "duration": 2,
    //                     "opacity": 8,
    //                     "speed": 3
    //                 },
    //                 "repulse": {
    //                     "distance": 200
    //                 },
    //                 "push": {
    //                     "particles_nb": 4
    //                 },
    //                 "remove": {
    //                     "particles_nb": 2
    //                 }
    //             }
    //         },
    //         "retina_detect": true,

    //         // background: {
    //         //     color: {
    //         //         value: "#1E2F97",
    //         //     },
    //         // },
    //         // fpsLimit: 120,
    //         // interactivity: {
    //         //     events: {
    //         //         onClick: {
    //         //             enable: true,
    //         //             mode: "repulse",
    //         //         },
    //         //         onHover: {
    //         //             enable: true,
    //         //             mode: 'grab',
    //         //         },
    //         //     },
    //         //     modes: {
    //         //         push: {
    //         //             distance: 200,
    //         //             duration: 15,
    //         //         },
    //         //         grab: {
    //         //             distance: 150,
    //         //         },
    //         //     },
    //         //     detectsOn: "canvas",
    //         //     events: {
    //         //         resize: true
    //         //     }
    //         // },
    //         // particles: {
    //         //     color: {
    //         //         value: "#FFFFFF",
    //         //     },
    //         //     links: {
    //         //         color: "#FFFFFF",
    //         //         distance: 150,
    //         //         enable: false,
    //         //         opacity: 0.3,
    //         //         width: 1,
    //         //     },
    //         //     move: {
    //         //         direction: "none",
    //         //         enable: true,
    //         //         outModes: {
    //         //             default: "bounce",
    //         //         },
    //         //         random: true,
    //         //         speed: 0,
    //         //         straight: false,
    //         //     },
    //         //     number: {
    //         //         density: {
    //         //             enable: true,
    //         //             area: 1080
    //         //         },
    //         //         limit: 0,
    //         //         value: 400,
    //         //     },
    //         //     opacity: {
    //         //         // value: 1.0,
    //         //         animation: {
    //         //             enable: true,
    //         //             minimumValue: 0.05,
    //         //             speed: 1,
    //         //             sync: false
    //         //         },
    //         //         random: {
    //         //             enable: true,
    //         //             minimumValue: 0.05,
    //         //         },
    //         //         value: 1
    //         //     },
    //         //     shape: {
    //         //         type: "circle",
    //         //     },
    //         //     size: {
    //         //         // value: { min: 1, max: 3 },
    //         //         random: {
    //         //             enable: true,
    //         //             minimumValue: 0.05
    //         //         },
    //         //         value: 1
    //         //     },
    //         // },
    //         // detectRetina: true,
    //     }),
    //     [],
    // );

    const options = useMemo(() => ({
        fullScreen: {
            enable: false,
            zIndex: -2,
        },
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#FFC31F'
            },
            shape: {
                type: 'triangle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.8,
                random: false,
                anim: {
                    enable: false,
                    speed: { min: 1, max: 2 },
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: { min: 3, max: 5 },
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 100,
                color: '#FFFFFF',
                opacity: 0.4,
                width: 1
            },
            links: {
                enable: true
            },
            move: {
                enable: true,
                speed: { min: 2, max: 3 },
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    }), [])

    return (
        <>
            < section className="bg-indigo-700 py-20 mb-4 opacity-80" >
                <Particles className="z-0" id={props.id} init={initParticlesEngine} loaded={particlesLoaded} options={options}>
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center z-10"
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
                </Particles>
            </section >

        </>

    );

};

export default HeroGraph;
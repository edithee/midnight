import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import { loadStarsPreset } from "@tsparticles/preset-stars";



const ParticlesComponent = (props) => {

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

            // await loadSlim(engine);
            // await loadBasic(engine);
            await loadStarsPreset(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = {
        preset: "stars",
        background: {
            color: {
                value: "#1E2F97",
            },
        },
        size: {
            value: { min: 0.05, max: 0.07 }
        }
    };

    return <Particles id={props.id} init={initParticlesEngine} loaded={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
import React, { useRef, useEffect } from 'react';
import { ForceGraph3D } from 'react-force-graph';
// import '../../src/index.css'; // Import CSS for label styling
import * as THREE from 'three';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import graphData from '../datasets/graph-nodes.json';
// // import SpriteText from "https://unpkg.com/three-spritetext/dist/three-spritetext.mjs";
// import SpriteText from "https://unpkg.com/three-spritetext@1.8.2/dist/three-spritetext.mjs";
import SpriteText from 'three-spritetext';



// const fetchNodes = async () => {
//     const res = await fetch(`../datasets/graph-nodes.json`);
//     const data = await res.json();
//     return data;
// };



const ForceGraph = () => {

    // const [graph, setGraph] = useState(false);

    // const myData = async () => {
    //     const res = await fetch(`../datasets/graph-nodes.json`);
    //     const data = await res.json();
    //     return data;
    // };


    // setGraph(fetchNodes);
    // console.log(graph);

    // setGraph(useEffect(() => {
    //     // If you're using Create React App and the file is in the public folder
    //     fetch('../datasets/graph-nodes.json')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => setData(data))
    //         .catch(error => console.error('There has been a problem with your fetch operation:', error));
    // }, []));

    // console.log(graph);

    // const graphData = async function fetchData() {
    //     const data = await import('../datasets/graph-nodes.json');
    //     console.log(data.name);
    // }

    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('../datasets/graph-nodes.json'); // Adjust the path to your JSON file
    //             const jsonData = await response.json();
    //             setData(jsonData);

    //             console.log(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []); // empty dependency array ensures useEffect runs only once


    // const fgRef = useRef();

    // useEffect(() => {
    //     if (!fgRef.current) return;

    //     const threeGraph = fgRef.current;

    //     // Load font asynchronously
    //     const loadFont = async () => {
    //         const fontLoader = new FontLoader();
    //         const font = await new Promise((resolve, reject) => {
    //             fontLoader.load(
    //                 'https://cdn.jsdelivr.net/npm/three/examples/fonts/helvetiker_regular.typeface.json',
    //                 resolve,
    //                 undefined,
    //                 reject
    //             );
    //         });

    //         // Create text geometry with loaded font
    //         const textGeometry = new TextGeometry('Hello World!', {
    //             font: font,
    //             size: 1,
    //             height: 0.2,
    //             curveSegments: 12,
    //             bevelEnabled: true,
    //             bevelThickness: 0.03,
    //             bevelSize: 0.02,
    //             bevelSegments: 5
    //         });

    //         const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    //         const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    //         textMesh.position.set(5, 5, 5); // Adjust position as needed

    //         const nodeObject = new THREE.Object3D();
    //         nodeObject.add(textMesh);

    //         threeGraph.scene().add(nodeObject);
    //     };

    //     loadFont();
    // }, []);


    // const fgRef = useRef();

    // useEffect(() => {
    //     if (!fgRef.current) return;

    //     const threeGraph = fgRef.current;
    //     const labels = createLabels(threeGraph);

    //     // Clean up on unmount
    //     return () => {
    //         labels.forEach(label => threeGraph.scene().remove(label));
    //     };
    // }, []);

    // const createLabels = (graph) => {
    //     const labels = [];

    //     // Check if nodes exist before iterating over them
    //     if (!graph.nodes) return labels;

    //     // Create a label for each node
    //     graph.nodes.forEach(node => {
    //         const label = createTextLabel(node.id, node.color);
    //         label.position.copy(node.__threeObj.position); // Set label position to match node
    //         labels.push(label);
    //         graph.scene().add(label);
    //     });

    //     return labels;
    // };

    // // Function to create a text label
    // const createTextLabel = (text, color) => {
    //     const label = new THREE.TextSprite({
    //         text: text,
    //         fontFamily: 'Arial, sans-serif',
    //         fontSize: 24,
    //         color: color || 'black',
    //     });
    //     return label;
    // };

    // const fgRef = useRef();

    // useEffect(() => {
    //     if (!fgRef.current) return;

    //     const threeGraph = fgRef.current;
    //     const labels = createLabels(threeGraph);

    //     // Clean up on unmount
    //     return () => {
    //         labels.forEach(label => threeGraph.scene().remove(label));
    //     };
    // }, []);

    // const createLabels = (graph) => {
    //     const labels = [];

    //     // Check if nodes exist before iterating over them
    //     if (!graph.nodes) return labels;

    //     // Create a label for each node
    //     graph.nodes.forEach(node => {
    //         const label = createTextLabel(node.id, node.color);
    //         label.position.copy(node.__threeObj.position); // Set label position to match node
    //         labels.push(label);
    //         graph.scene().add(label);
    //     });

    //     return labels;
    // };

    // // Function to create a text label
    // const createTextLabel = (text, color) => {
    //     const canvas = createCanvas();
    //     const context = canvas.getContext('2d');
    //     context.font = '24px Arial, sans-serif'; // Set font size and family
    //     context.fillStyle = color || 'black'; // Set label color
    //     context.textAlign = 'center';
    //     context.textBaseline = 'middle';
    //     context.fillText(text, canvas.width / 2, canvas.height / 2);

    //     // Create texture from canvas
    //     const texture = new THREE.CanvasTexture(canvas);

    //     // Create sprite material using the texture
    //     const material = new THREE.SpriteMaterial({ map: texture });

    //     // Create sprite object
    //     const sprite = new THREE.Sprite(material);
    //     sprite.scale.set(10, 5, 1); // Adjust scale as needed

    //     return sprite;
    // };

    // // Function to create a canvas for drawing text
    // const createCanvas = () => {
    //     const canvas = document.createElement('canvas');
    //     canvas.width = 256; // Set canvas width
    //     canvas.height = 64; // Set canvas height
    //     return canvas;
    // };

    const imgs = ['bubududu_cheeselove.png', 'dog.jpg', 'eagle.jpg', 'elephant.jpg', 'grasshopper.jpg', 'octopus.jpg', 'owl.jpg', 'panda.jpg', 'squirrel.jpg', 'tiger.jpg', 'whale.jpg'];

    // const imgs = ['bubududu_cheeselove.png', 'bubududu_cheeselove.png', 'bubududu_cheeselove.png'];
    // Random connected graph
    const gData = {
        nodes: imgs.map((img, id) => ({ id, img })),
        links: [...Array(imgs.length).keys()]
            .filter(id => id)
            .map(id => ({
                source: id,
                target: Math.round(Math.random() * (id - 1))
            }))
    };

    return (

        <>
            {/* <ForceGraph3D
                graphData={graphData}
                nodeAutoColorBy="group"
            ></ForceGraph3D> */}

            {/* <script type="text/jsx" data-type="module"> */}
            {/* <ForceGraph3D
                // graphData={{
                //     // nodes: [{ id: 'node1' }, { id: 'node2' }],
                //     // links: [{ source: 'node1', target: 'node2' }]

                // }}
                graphData={gData}
                // nodeAutoColorBy="id"
                // nodeThreeObject={node => {
                // const sprite = new SpriteText(node.id);
                // sprite.color = node.color || 'black'; // Set default color if not provided
                // sprite.textHeight = 8;
                // return sprite;
                nodeThreeObject={({ img }) => {
                    const imgTexture = new THREE.TextureLoader().load(`../assets/images/${img}`);
                    imgTexture.colorSpace = THREE.SRGBColorSpace;
                    const material = new THREE.SpriteMaterial({ map: imgTexture });
                    const sprite = new THREE.Sprite(material);
                    sprite.scale.set(12, 12);

                    return sprite;
                }}
            /> */}

            <ForceGraph3D

                graphData={gData}
                nodeThreeObject={({ img }) => {
                    // const imgTexture = new THREE.TextureLoader().load(`../src/assets/images/${img}`, () => {

                    //     // Texture loaded successfully
                    //     // imgTexture.crossOrigin = "anonymous";
                    //     imgTexture.colorSpace = THREE.SRGBColorSpace;
                    //     const material = new THREE.SpriteMaterial({ map: imgTexture });
                    //     const sprite = new THREE.Sprite(material);
                    //     sprite.scale.set(12, 12);
                    //     return sprite;

                    // }, undefined, (error) => {
                    //     console.error('Error loading texture:', error);
                    //     console.log(img.toString());
                    // });

                    const imgTexture = new THREE.TextureLoader().load(`../src/assets/images/${img}`);
                    imgTexture.colorSpace = THREE.SRGBColorSpace;
                    const material = new THREE.SpriteMaterial({ map: imgTexture });
                    const sprite = new THREE.Sprite(material);
                    sprite.scale.set(12, 12);

                    return sprite;

                }}
            />

            {/* <ForceGraph3D
                graphData={{
                    nodes: [{ id: 'node1' }, { id: 'node2' }],
                    links: [{ source: 'node1', target: 'node2' }]
                }}
                nodeAutoColorBy="id"
                nodeLabel={node => {
                    const label = document.createElement('div');
                    label.style.color = node.color || 'red'; // Set default color if not provided
                    label.textContent = node.id;
                    return label;
                }}
            /> */}

            {/* <ForceGraph3D
                graphData={{
                    nodes: [{ id: 'node1' }, { id: 'node2' }],
                    links: [{ source: 'node1', target: 'node2' }]
                }}
                nodeThreeObject={node => null} // Disable default nodes
                nodeLabel={node => (
                    <div className="node-label" style={{ color: node.color || 'black' }}>
                        {node.id}
                    </div>
                )}
            /> */}

            {/* <ForceGraph3D
                ref={fgRef}
                graphData={{
                    nodes: [{ id: 'node1' }, { id: 'node2' }],
                    links: [{ source: 'node1', target: 'node2' }]
                }}
                nodeThreeObject={null} // Disable default node rendering
                nodeThreeObjectExtend={false}
            /> */}

            {/* <ForceGraph3D
                graphData={{
                    nodes: [{ id: 'node1' }, { id: 'node2' }],
                    links: [{ source: 'node1', target: 'node2' }]
                }}
                nodeAutoColorBy="group"
                nodeCanvasObject={(node, ctx, globalScale) => {
                    const label = node.id;
                    const fontSize = 12 / globalScale;
                    ctx.font = `${fontSize}px Sans-Serif`;
                    const textWidth = ctx.measureText(label).width;
                    const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding

                    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                    ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);

                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = node.color;
                    ctx.fillText(label, node.x, node.y);

                    node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
                }}
                nodePointerAreaPaint={(node, color, ctx) => {
                    ctx.fillStyle = color;
                    const bckgDimensions = node.__bckgDimensions;
                    bckgDimensions && ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);
                }} */}
            {/* /> */}
        </>
    )
};

export default ForceGraph;
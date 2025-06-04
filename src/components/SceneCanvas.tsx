import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Cube } from "./objects/Cube"
import { Sphere } from "./objects/Sphere"


export const SceneCanvas = () => {
    return (
        <Canvas className="w-full bg-slate-200">
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={0.5} color="red" />
            <OrbitControls />
            <Cube position={[0, 0, 5]} />
            <Sphere position={[0, 5, 5]} />            
        </Canvas>
    )
}

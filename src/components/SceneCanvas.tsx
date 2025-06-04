import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Cube } from "./objects/Cube"
import { Sphere } from "./objects/Sphere"
import type { SceneObject } from "../types/scene"

interface Props {
    objects: SceneObject[]
    setObjects: React.Dispatch<React.SetStateAction<SceneObject[]>>
    selectedId: string | null
    setSelectedId: (id: string | null) => void
}

export const SceneCanvas = ({ objects, setObjects, setSelectedId }: Props) => {
    return (
        <Canvas
            camera={{
                position: [5, 5, 5],
                fov: 60
            }}
            className="w-full bg-slate-200"
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={0.5} />
            <OrbitControls />

            {objects.map(obj => 
                obj.type === 'cube' ? (
                    <Cube 
                        key={obj.id}
                        position={[0, 1, 5]} 
                        color="blue" 
                    />
                ) : (
                    <Sphere 
                        key={obj.id}
                        position={[0, 5, 5]} 
                        color="red" 
                    /> 
                )
            )}                       
        </Canvas>
    )
}
